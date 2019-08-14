const mongoose = require("mongoose");
const Acervo = mongoose.model("Acervo");

module.exports = {
  async index(req, res) {
    const acervo = await Acervo.find();
    return res.json(acervo);
  },

  async show(req, res) {
    const acervo = await Acervo.findById(req.params.id);
    return res.json(acervo);
  },

  async store(req, res) {
    const acervo = await Acervo.create(req.body);
    return res.json(acervo);
  },

  async update(req, res) {
    const acervo = await Acervo.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(acervo);
  },
  async destroy(req, res) {
    await Acervo.findByIdAndRemove(req.params.id);
    return res.send();
  }
};
