const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Hannes:ossian21@zahabecluster-r5xen.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

const obj = {
  foo: 'bar'
};
export async function handler(event, context) {
  // console.log('queryStringParameters', event.queryStringParameters);
  try {
    await client.connect();
    const res = await client.db('Zahabe').collection('Entries')
      .find().sort({ mvorder: 1 }).toArray()
    return {
      statusCode: 200,
      body: JSON.stringify(res)
    }

  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
  // client.connect(err => {
  //   const collection = client.db("Zahabe").collection("Entries");
  //   // perform actions on the collection object
  //   console.log("got collection")
  //   collection.find().toArray(function(err, docs) {
  //     console.log(docs);


  //     client.close();
  //     callback(null, {
  //       statusCode: 200,
  //       body: JSON.stringify({ msg: 'Hello, World!', ...obj })
  //     });
  //   });

  // });

}
