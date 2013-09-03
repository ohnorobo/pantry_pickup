var Pantry = require('../models/pantry');

module.exports = function(app) {

  app.get('/edit', function(req, res) {
      console.log("viewing pantry: " + req.query.id);

      return Pantry.findById( req.query.id,
        function (err, post) {
            if (err) { throw(err); }
            if (post == null) { res.send(404, "no pantry with id " + req.query.id + " found."); }
            else {
                console.log(post);
                return res.render('edit', {pantry : post});
            }
     });
  });
}
