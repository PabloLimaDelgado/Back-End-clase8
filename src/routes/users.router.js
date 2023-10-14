import { Router } from "express";
import { usersManager } from "../managers/usersManager.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await usersManager.findAll();
    res.status(200).json({ message: "Users", users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:idUser", async (req, res) => {
  const { idUser } = req.params;
  try {
    const user = await usersManager.findById(idUser);
    res.status(200).json({ message: "User", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post("/", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !last_name || !email || !password) {
    res.status(400).json({ message: "All data is required" });
  }
  try {
    const createdUser = await usersManager.createOne(req.body);

    res.redirect(`/home/${createdUser._id}`);
    res.status(200).json({ message: "User created", user: createdUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
