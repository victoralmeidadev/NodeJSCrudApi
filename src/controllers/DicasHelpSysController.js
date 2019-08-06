const mongoose = require("mongoose");
const DicasHelpSys = mongoose.model("DicasHelpSys");

module.exports = {
  async index(req, res) {
    const dicas = await DicasHelpSys.find();
    return res.json(dicas);
  },

  async show(req, res) {
    const dicas = await DicasHelpSys.findById(req.params.id);
    return res.json(dica);
  },

  async store(req, res) {
    const dica = await DicasHelpSys.create(req.body);
    return res.json(dica);
  },

  async update(req, res) {
    const dica = await DicasHelpSys.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(dica);
  },
  async destroy(req, res) {
    await DicasHelpSys.findByIdAndRemove(req.params.id);
    return res.send();
  }
};
