
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Hello World' });
};

exports.demo = function(req, res){
  res.render('demo', 
            { 
                title: 'Demo page' ,
                header: 'demo,demo........'
            }
    );
};

exports.app = function(req, res){
  res.render('bootstrap', 
            { 
                title: 'bootstrap page' ,
                content: 'demo,demo........'
            }
    );
};
