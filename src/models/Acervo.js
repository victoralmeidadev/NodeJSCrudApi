const mongoose = require("mongoose");

const AcervoSchema = new mongoose.Schema({
  nomeLivro: {
    type: String,
    require: true
  },
  autorLivro: {
    type: String,
    require: true
  },

  sinopseLivro: {
    type: String,
    require: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});
mongoose.model("Acervo", AcervoSchema);
