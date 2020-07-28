const Customer = require("../models/customer");
const Intention = require("../models/intention");
const { sendEmail } = require("../sendEmail");

module.exports = {
  async create(req, res) {
    try {
      const { uuid } = req.body;

      const [intention] = await Intention.find({ uuid: uuid });

      const customer = await new Customer({
        email: req.body.email,
        company: req.body.company,
        cell_phone: req.body.cell_phone,
        cnpj: req.body.cnpj,
        intention: intention,
      });

      await customer.save();

      sendEmail(customer.email, customer);

      return res.status(200).json({ customer });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Customer Registration Failed!: " + error });
    }
  },

  async read(req, res) {
    try {
      const cnpj = req.query.cnpj;

      const [customers] = await Customer.find({ cnpj: cnpj });

      return res.status(200).json(customers);
    } catch (error) {
      return res.status(400).json({ error: "Customer Read Failed!: " + error });
    }
  },

  async update(req, res) {
    try {
      const { uuid, cnpj } = req.body;

      const [intention] = await Intention.find({ uuid: uuid });

      const [customer] = await Customer.find({ cnpj: cnpj });

      if (customer.intention.length >= 3)
        return res.status(403).json("Já possui 3 verificações neste CNPJ");
      customer.intention.push(intention);

      await customer.save();

      sendEmail(customer.email, customer);

      return res.status(200).json({ customer });
    } catch (error) {
      return res
        .status(400)
        .json({ error: "Customer Update Failed!: " + error });
    }
  },
};
