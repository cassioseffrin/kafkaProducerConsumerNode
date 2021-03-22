// rececebe msgs do kafkay

import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['thebull:9092'],
  clientId: 'consumer1',
})

async function run() {

    const consumer = kafka.consumer({ groupId: 'test-group' })
    await consumer.connect()
    await consumer.subscribe({ topic: 'topico1', fromBeginning: true })

    await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
        value: message.value.toString(),
        })
    },
    });
}

run().catch(console.error)