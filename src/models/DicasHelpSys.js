const mongoose = require("mongoose");

const DicasHelpSysSchema = new mongoose.Schema({
  descricao: {
    type: String,
    required: true
  },
  foto: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
mongoose.model("DicasHelpSys", DicasHelpSysSchema);
