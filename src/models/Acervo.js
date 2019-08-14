const mongoose = require("mongoose");

const AcervoSchema = new mongoose.Schema({
  nomeLivro: String,

  autorLivro: String,

  sinopseLivro: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});
mongoose.model("Acervo", AcervoSchema);
