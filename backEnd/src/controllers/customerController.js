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
      });

      customer.intention = intention;

      await customer.save();

      sendEmail(customer.email, customer);

      return res.status(200).send({ customer });
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Customer Registration Failed!: " + error });
    }
  },
};
