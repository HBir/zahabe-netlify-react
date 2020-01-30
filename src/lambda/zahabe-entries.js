const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });


export async function handler(event, context) {
  // console.log('queryStringParameters', event.queryStringParameters);

  try {
    await client.connect();
    if (event.httpMethod === 'GET') {
      const res = await client.db('Zahabe').collection('Entries')
        .find().sort({ mvorder: -1 }).toArray()
      return {
        statusCode: 200,
        body: JSON.stringify(res)
      }
    } else if (event.httpMethod === 'POST') {
      console.log(event.body);
      return {
        statusCode: 200,
        body: JSON.stringify({status: "success"})
      }
    }


  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }

}
