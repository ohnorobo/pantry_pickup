var Pantry = require('../models/pantry');

module.exports = function(app) {

  app.get('/pantries/:id', function(req, res) {

    return Pantry.findById( req.params.id,
      function (err, post) {
        if (err) { throw(err); }
        if (post == null) { res.send(404, "404: No Pantry with ID " + req.params.id); }
        else {
          //console.log(post);
          if ('application/json' == res.getHeader('content-type')) {
            return res.json(post);
          } else { //render page
            return res.render('pantries', {pantry : post});
          }
        }
     });
  });

  //Edit pantry
  app.put('/pantries/:id', function(req, res) {
    console.log(req.body.pantry);

    //return Pantry.findById( req.body.pantry._id,
    //  function (err, post) {
    //    if (err) { throw(err); }
    //    if (post == null) { res.send(404, "404: No Pantry with ID " + req.body.pantry._id); }
    //    else {

          //req.query is json of params {site_name: "East End"}

          // TODO Geocode address
          // remove '' fields

          console.log("in pantry find function");

          //var upsertData = req.body.pantry.toObject();
          console.log("upsert data");
          //delete req.body.pantry._id
          console.log(req.body.pantry);

          newPantry = new Pantry(req.body.pantry);
          delete newPantry._id

          //new Pantry(req.body.pantry).save(function(err) {
          //  console.log("in func");
          //});

          Pantry.update({_id: req.body.pantry._id}, newPantry, {upsert:true},
            function(err) { console.log("nooooo"); throw(err); }
          );
      //  }
      //});
  });

  //Create Pantry
  //app.push

  //Delete Pantry
  //app.delete
}
