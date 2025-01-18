```javascript
// Correct usage of $inc operator with the $ positional operator
db.collection.updateOne({ _id: 1, 'arrayField.0': { $exists: true } }, { $inc: { 'arrayField.$[].0': 1 } });
//Alternative solution using $set
db.collection.updateOne({ _id: 1 }, { $set: { 'arrayField.0': db.collection.findOne({_id:1}).arrayField[0] + 1 }}); 
```