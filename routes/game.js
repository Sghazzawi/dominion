
/*
 * GET game page.
 */

exports.game = function(req, res){
  res.render('game', { title: 'Express' })
};
