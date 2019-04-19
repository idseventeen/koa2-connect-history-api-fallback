# README.md

koa2的一个中间件，用于处理vue-router使用history模式返回index.html，让koa2支持SPA应用程序。 \
我只是一个搬运工，让它兼容Koa2而已。详细说明请到原作者项目库查看\
[bripkens作者的connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback)

## Install

```bash
$ npm install --save 'koa2-connect-history-api-fallback'
```

## Use

在原作者的使用方法下增加了白名单选项，原作者的插件默认会将所有的请求都指向到index.html，这样可能就会导致项目内其他路由也被指向到index.html
使用方法如下：

```javascript
const Koa = require('koa');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
// 或者当你使用 ES6 语法，你可以这样
import { historyApiFallback } from 'koa2-connect-history-api-fallback';
// 或者
import historyApiFallback from 'koa2-connect-history-api-fallback';

const app = new Koa();

// handle fallback for HTML5 history API
app.use(historyApiFallback({ whiteList: ['/api'] }));

// other middlewares
app.use(...);
```

## Example
```javascript
const Koa = require('koa');

// require 'koa2-connect-history-api-fallback' middleware
const { historyApiFallback } = require('koa2-connect-history-api-fallback');

// create app
const app = new Koa();

// use historyApiFallback
app.use(historyApiFallback());

// other middlewares
app.use(...);

```

# LICENSE

Follow [MIT License](/LICENSE)
