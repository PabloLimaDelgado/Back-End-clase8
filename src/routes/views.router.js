import { Router } from "express";
import { usersManager } from "../managers/usersManager.js";
import { productsManager } from "../managers/productsManager.js";

const router = Router();

router.get("/singup", (req, res) => {
  res.render("singup");
});

router.get("/createproduct", (req, res) => {
  res.render("createproduct");
});

router.get("/home/:idUser", async (req, res) => {
  const { idUser } = req.params;
  const userInfo = await usersManager.findById(idUser);
  const { first_name, last_name } = userInfo;

  const products = await productsManager.findAll();

  res.render("home", { first_name, last_name, products });
});
export default router;
