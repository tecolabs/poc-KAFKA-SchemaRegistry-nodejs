


var KafkaRest = require('kafka-rest');
var kafka = new KafkaRest({'url': 'http://localhost:8082'});


// kafka.brokers is a Brokers instance, list() returns a list of Broker instances
kafka.brokers.list(function (err, brokers) {
    for (var i = 0; i < brokers.length; i++)
        console.log(brokers[i].toString());
});


kafka.topics.get('test', function (err, topic) {
   // console.log(topic)
});

kafka.topics.topic('test');

// With Avro data:

/*var userIdSchema = new KafkaRest.AvroSchema("int");
var userInfoSchema = new KafkaRest.AvroSchema({
    "name": "UserInfo",
    "type": "record",
    "fields": [
        { "name": "id", "type": "int" },
        { "name": "name", "type": "string" }]
});

// Avro value schema followed by messages containing only values
kafka.topic('test').produce(userInfoSchema, {'avro': 'record'}, {'avro': 'another record'});

// Avro key and value schema.
kafka.topic('test').produce(userIdSchema, userInfoSchema, {'key': 1, 'value': {'id': 1, 'name': 'Bob'}});*/

kafka.topic('test').produce('hola  asdasdasdad5',handleProduceResponse.bind(undefined))

function handleProduceResponse(err, res) {

    if (err) {
        console.log("Error producing message: " + err);
    }
}
