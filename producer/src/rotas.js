import express from 'express';
import { CompressionTypes } from 'kafkajs';

const routes = express.Router();

routes.post('/enviarMensagem', async (req, res) => {
  const message = {
    user: { id: 1, name: 'Cassio Seffrin' },
    course: 'Kafka com Node.js',
    grade: 10,
  };
 

  await req.producer.connect();
  await req.producer.send({
    topic: 'topico1',
    messages: [
      { value: 'Hello Cassio!' },
    ],
  });
  await req.producer.disconnect();

  return res.json({ ok: true });
});

export default routes;