var sidebar = require('../helpers/sidebar');
module.exports = {
  index: function (req, res) {
    // res.send('The home:index controller');
    var viewModal = {
      images: [
        {
          uniqueId: 1,
          title: 'Sample Image 1',
          description: '',
          filename: 'sample.jpg',
          views: 0,
          likes: 0,
          timestamp: Date.now()
        },{
          uniqueId: 2,
          title: 'Sample Image 2',
          description: '',
          filename: 'sample2.jpg',
          views: 0,
          likes: 0,
          timestamp: Date.now()
        },{
          uniqueId: 3,
          title: 'Sample Image 3',
          description: '',
          filename: 'sample3.jpg',
          views: 0,
          likes: 0,
          timestamp: Date.now()
        },{
          uniqueId: 4,
          title: 'Sample Image 4',
          description: '',
          filename: 'sample4.jpg',
          views: 0,
          likes: 0,
          timestamp: Date.now()
        }
      ]
    };

    sidebar(viewModal, function (viewModal) {
      console.log('home view callback viewModal', viewModal);
      res.render('index', viewModal);
    });
  }
};