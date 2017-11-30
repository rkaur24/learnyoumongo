var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url,function(err,db){
    if(err) throw err;
    let collection = db.collection('docs')
    let record = {
        firstName : process.argv[2],
        lastName : process.argv[3]
    }
   collection.insert(record,function(err,data){
       if(err) throw err;
       console.log(JSON.stringify(record))
       db.close()
   })
})