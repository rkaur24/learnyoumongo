var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url,function(err,db){
    if(err) throw err;
    db.collection('parrots').find({age: {$gt: parseInt(process.argv[2])}}).toArray(function(err,doc){
        if(err) throw err;
        console.log(doc)
        db.close()
    })
})