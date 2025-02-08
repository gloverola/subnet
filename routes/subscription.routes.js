import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
  res.send({ message: 'Subscriptions' });
});

subscriptionRouter.get('/:id', (req, res) => {
  res.send({ message: `Subscription ${req.params.id}` });
});

subscriptionRouter.post('/', (req, res) => {
  res.send({ message: 'Create subscription' });
});

subscriptionRouter.put('/:id', (req, res) => {
  res.send({ message: `Update subscription ${req.params.id}` });
});

export default subscriptionRouter;
