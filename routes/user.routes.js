import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send({ message: 'Users' });
});

userRouter.get('/:id', (req, res) => {
  res.send({ message: `User ${req.params.id}` });
});

userRouter.post('/', (req, res) => {
  res.send({ message: 'Create user' });
});

userRouter.put('/:id', (req, res) => {
  res.send({ message: `Update user ${req.params.id}` });
});

export default userRouter;
