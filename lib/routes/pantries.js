var Pantry = require('../models/pantry');

module.exports = function(app) {

  app.get('/pantries/:id', function(req, res) {
    console.log("viewing pantry: " + req.params.id);

    return Pantry.findById( req.params.id,
      function (err, post) {
        if (err) { throw(err); }
        if (post == null) { res.send(404, "404: No Pantry with ID " + req.params.id); }
        else {
          console.log(post);
          //TODO check content type and return json or html appropriately
          return res.render('pantries', {pantry : post});
        }
     });
  });

  //Edit pantry
  app.put('/pantries/:id', function(req, res) {
    //Get body of put request
    //var pantry = req.body;

    //TODO get pantry pieces from param
    // get old pantry entry from db
    // replace entries with params

    //Geocode address



    var upsertData = pantry.toObject();
    delete upsertData._id

    Pantry.update({_id: pantry._id}, upsertData, {upsert: true},
      function(err) { throw(err); }
    );
  });

  //Create Pantry
  //app.push

  //Delete Pantry
  //app.delete
}
