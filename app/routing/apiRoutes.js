
var friends = require('../data/friends.js');

module.exports = function(app){
  app.get('/api', function(req,res){
    res.json(friends);
  });

  app.post('/api/new', function(req,res){
    
    var scoresArr = [];
    var userCount = 0;
    var best = 0;
    var userValues = req.body.vals;
    for(var i=0; i<friends.length; i++){
      var diff = 0;
      
      for(var j=0; j<userValues.length; j++){
        diff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userValues[j])));//returns absolute values.
      }
      scoresArr.push(diff);
    }

    for(var i=0; i<scoresArr.length; i++){ 
      if(scoresArr[i] <= scoresArr[best]){
        best = i;
      }
    }

   //best match data sent to front end as bff (best friend forever)
    var bff = friends[best];
    res.json(bff);

    //newly submitted user pused to the array of objects in friends.js
    friends.push(req.body);
  });
};

