const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");
const UserController = require("./controllers/UserController");
const DicasHelpSysController = require("./controllers/DicasHelpSysController");
const AcervoController = require("./controllers/AcervoController");
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.destroy);
routes.get("/dicashelpsys/:id", DicasHelpSysController.show);
routes.post("/dicashelpsys", DicasHelpSysController.store);
routes.put("/dicashelpsys/:id", DicasHelpSysController.update);
routes.delete("/dicashelpsys/:id", DicasHelpSysController.destroy);
routes.get("/livros", AcervoController.index);
routes.get("/livros/:id", AcervoController.show);
routes.post("/livros", AcervoController.store);
routes.put("/livros/:id", AcervoController.update);
routes.delete("/livros/:id", AcervoController.destroy);
module.exports = routes;
