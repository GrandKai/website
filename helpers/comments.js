module.exports = {
  newest: function () {
    var comments = [
      {
        image_id: 1,
        email: 'GrandKai@aliyun.com',
        name: 'GrandKai',
        gravatar: 'http://lorempixel.com/75/75/animals/1',
        comment: '这是一个测试评论',
        timestamp: Date.now(),
        image: {
          uniqueId: 1,
          title: 'Sample Image 1',
          description: '',
          filename: 'sample1.jpg',
          views: 0,
          likes: 0,
          timestamp: Date.now()
        }
      }, {
        image_id: 1,
        email: 'GrandKai@aliyun.com',
        name: 'GrandKai',
        gravatar: 'http://lorempixel.com/75/75/animals/2',
        comment: '这是第二个测试评论',
        timestamp: Date.now(),
        image: {
          uniqueId: 1,
          title: 'Sample Image 1',
          description: '',
          filename: 'sample1.jpg',
          views: 0,
          likes: 0,
          timestamp: Date.now()
        }
      }
    ];

    return comments;
  }
};