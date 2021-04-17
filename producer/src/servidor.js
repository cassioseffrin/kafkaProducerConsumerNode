import express from 'express';
import { Kafka, logLevel } from 'kafkajs';
import routes from './rotas';
 
var app = express();
app.use(express.json());
 

/**
 * conecta no Kafka
 */
const kafka = new Kafka({
  clientId: 'api',
  // brokers: ['ec2-3-137-198-93.us-east-2.compute.amazonaws.com:9092'],
  // brokers: ['3.137.198.93:9092'],
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
app.use((req  , res, next) => {
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