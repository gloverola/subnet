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

subscriptionRouter.delete('/:id', (req, res) => {
  res.send({ message: `Delete subscription ${req.params.id}` });
});

subscriptionRouter.get('/users/:id', (req, res) => {
  res.send({ message: `Subscriptions for user ${req.params.id}` });
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
  res.send({
    message: `Cancel subscription for user ${req.params.id}`,
  });
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({ message: 'Upcoming renewal' });
});

export default subscriptionRouter;
