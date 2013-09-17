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

    return Pantry.findById( req.params.id,
      function (err, post) {
        if (err) { throw(err); }
        if (post == null) { res.send(404, "404: No Pantry with ID " + req.params.id); }
        else {

          //req.query is json of params {site_name: "East End"}
          //TODO Geocode address

          var upsertData = pantry.toObject();
          delete upsertData._id

          Pantry.update({_id: req.params.id}, req.query,
            function(err) { throw(err); }
          );
        }
      });
  });

  //Create Pantry
  //app.push

  //Delete Pantry
  //app.delete
}
