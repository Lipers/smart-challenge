const Intention = require("../models/intention");

module.exports = {
  async create(req, res) {
    try {
      const intention = await Intention.create(req.body);

      return res.status(200).json({ intention });
    } catch (error) {
      return res.status(400).json({ error: "Registration Failed!:" + error });
    }
  },

  async update(req, res) {
    try {
      const { uuid } = req.params;

      await Intention.update({ uuid: uuid }, { $set: { lead: true } });

      const [intention] = await Intention.find({ uuid: uuid });

      return res.status(200).json(intention);
    } catch (error) {
      return res.status(400).json("Error intention update!:" + error);
    }
  },
};
