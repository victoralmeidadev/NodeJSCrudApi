const mongoose = require("mongoose");

const AcervoSchema = new mongoose.Schema({
  nomeLivro: {
    type: String,
    required: false
  },
  autorLivro: {
    type: String,
    required: false
  },
  sinopseLivro: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
mongoose.model("Acervo", AcervoSchema);
