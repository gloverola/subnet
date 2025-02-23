import { Router } from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUser);

userRouter.post("/", (req, res) => {
  res.send({ message: "Create user" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ message: `Update user ${req.params.id}` });
});

export default userRouter;
