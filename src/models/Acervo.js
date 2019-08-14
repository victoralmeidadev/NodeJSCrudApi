const mongoose = require("mongoose");

const AcervoSchema = new mongoose.Schema({
  nomeLivro: {
    type: String,

  },
  autorLivro: {
    type: String,

  },
  sinopseLivro: {
    type: String,

  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
mongoose.model("Acervo", AcervoSchema);
