import express from 'express';
import { CompressionTypes } from 'kafkajs';
const routes = express.Router();

routes.post('/enviarMensagem', async (request, respose) => {
  // console.log(request.body);
  await request.producer.connect();
  await request.producer.send({
    topic: 'topico1',
    messages: [
      // { value: 'teste3!' },
      { value: request.body.mensagem },
    ],
  });
  await request.producer.disconnect();

  return respose.json({ ok: true });
});

export default routes;