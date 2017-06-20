var path = require('path'), fs = require('fs');
var sidebar = require('../helpers/sidebar')
module.exports = {
  index: function (req, res) {
    // res.render
    // res.send('The image:index controller ' + req.params.image_id);
    var viewModal = {
      image: {
        uniqueId: 1,
        title: 'Sample Image 1',
        description: 'This is a sample.',
        filename: 'sample.jpg',
        views: 0,
        likes: 0,
        timestamp: Date.now()
      },
      comments: [
        {
          image_id: 1,
          email: 'GrandKai@aliyun.com',
          name: 'GrandKai',
          gravatar: 'http://lorempixel.com/75/75/animals/1',
          comment: 'this is a test comment...',
          timestamp: Date.now()
        },{
          image_id:1,
          email: 'GrandKai@aliyun.com',
          name: 'GrandKai',
          gravatar: 'http://lorempixel.com/75/75/animals/2',
          comment:'Another followup comment!',
          timestamp: Date.now()
        }
      ]
    }
    ;
    sidebar(viewModal, function (viewModal) {
      console.log('image view callback viewModal', viewModal);
      res.render('image', viewModal);
    });
  },

  create: function (req, res) {
    // res.send('The image:create POST controller');
    // res.redirect('/images/1');
    var saveImage = function () {
      // TODO
      var possible = 'abcdefghijklmnopqrstuvwxyz0123456789', imgUrl = '';

      for (var i = 0; i < possible.length; i++) {
        imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));

      }

      console.log('文件名称：', req);
      var tempPath = req.files.file.path,
          ext = path.extname(req.files.file.name).toLowerCase(),
          targetPath = path.resolve('./public/upload/' + imgUrl + ext);
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
        fs.rename(tempPath, targetPath, function (err) {
          if (err) throw err;

          res.redirect('/images/99');
        })
      } else {
        fs.unlink(tempPath, function (err) {
          if (err) throw err;

          res.json(500, {error: 'Only image files are allowed.'});
        })
      }

    };
    saveImage();
  },

  like: function (req, res) {
    // res.send('The image:like POST controller');
    res.json({likes: 1});
  },

  comment: function (req, res) {
    res.send('The image:comment POST controller')
  }

};