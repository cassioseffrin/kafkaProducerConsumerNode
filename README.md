Exemplo de microservicos em node que enviam e recebem mensagem do Kafka.

```
iniciaKafka.sh
echo "indo para o diretorio do kafka..."
cd /home/cassio/kafka_2.13-2.7.0/
echo "iniciando zookeeper..."
bin/zookeeper-server-start.sh config/zookeeper.properties &
echo "iniciando kafka..."
bin/kafka-server-start.sh config/server.properties &
echo "criando topico1..."
bin/kafka-topics.sh --create --topic topico1 --bootstrap-server &
echo "descrevendo topico1..."
#bin/kafka-topics.sh --describe --topic topico1 --bootstrap-server &
#pra enviar mensagens manualmente
#bin/kafka-console-producer.sh --topic topico1 --bootstrap-server localhost:9092 &
#pra receber manualmente
#bin/kafka-console-consumer.sh --topic topico1 --from-beginning --bootstrap-server localhost:9092
 ```