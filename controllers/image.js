var path = require('path'), fs = require('fs');
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
    res.render('image', viewModal);
  },

  create: function (req, res) {
    res.send('The image:create POST controller');
    res.redirect('/images/1');
    var saveImage = function () {
      // TODO
    }
    saveImage();
  },

  like: function (req, res) {
    res.send('The image:like POST controller');
  },

  comment: function (req, res) {
    res.send('The image:comment POST controller')
  }

};