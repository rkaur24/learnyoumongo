var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url,function(err,db){
    if(err) throw err;
    let collection = db.collection(process.argv[3])

   collection.remove({"_id": process.argv[4]},function(err,data){
       if(err) throw err;
       db.close()
   })
})