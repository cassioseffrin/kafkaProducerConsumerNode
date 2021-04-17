import express from 'express';
import { Kafka, logLevel } from 'kafkajs';
import routes from './rotas';
const app = express();

/**
 * conecta no Kafka
 */
const kafka = new Kafka({
  clientId: 'api',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
  retry: {
    initialRetryTime: 200,
    retries: 5
  },
});
 
const producer = kafka.producer();

/**
 * adiciona o producer para todas rotas
 */
app.use((req, res, next) => {
  req.producer = producer;
  return next();
})

/**
 * insere as rotas rotas  
 */
app.use(routes);

async function run() {
  app.listen(8888);
}

run().catch(console.error)