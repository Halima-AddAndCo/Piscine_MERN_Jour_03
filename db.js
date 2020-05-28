const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://halima:HelloQuick@cluster0-0lvaq.mongodb.net/mern-pool2?retryWrites=true&w=majority";
//+srv://halima:HelloQuick@cluster0-0lvaq.mongodb.net/mern-pool?retryWrites=true&w=majority
const assert = require('assert');
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("mern-pool2").collection("member");
  console.log('connect succesfull');
  client.close();
});















