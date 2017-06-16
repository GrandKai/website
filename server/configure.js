var path = require('path'),
  routes = require('./routes'),
  exphbs = require('express3-handlebars'),
  moment = require('moment'),
  express = require('express'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  morgan = require('morgan'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler');

module.exports = function (app) {
  // configuration code...
  app.engine('handlebars', exphbs.create({
    defaultLayout: 'main',
    layoutsDir: app.get('views') + '/layouts',
    partialsDir: [app.get('views') + '/partials'],
    helpers: {
      timeago: function (timestamp) {
        return moment(timestamp).startOf('minute').fromNow();
      }
    }

  }).engine);
  app.set('view engine', 'handlebars');

  // 服务器收到的每个 request 请求以 console.log() 的形式输出
  app.use(morgan('dev'));

  // 方便打包通过浏览器 POST 提交的表单字段（通过 req.body 属性）
  // 同 bodyParser 处理posted JSON data via the req.body property
  // 同 bodyParser get 提交的表单字段 req.body
  app.use(bodyParser({
    uploadDir: path.join(__dirname, '../public/upload/temp')
  }));

  // 兼容老版本浏览器不支持 REST HTTP 动作（如： update，put），methodOverride 允许通过隐藏表单域伪造
  app.use(methodOverride());
  // This allows cookies to be sent/received.
  app.use(cookieParser('some-secret-value-here'));
  routes.initialize(app, new express.Router());
  // app.use(app.router);

  // server up static resource
  app.use('/public/', express.static(path.join(__dirname, '../public')));

  if ('development' === app.get('env')) {
    // 异常处理，自定义错误页面，存储异常信息等
    app.use(errorHandler());
  }

  return app;
};