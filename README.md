# README.md

koa2的一个中间件，用于处理vue-router使用history模式返回index.html，让koa2支持SPA应用程序。 \
我只是一个搬运工，让它兼容Koa2而已。详细说明请到原作者项目库查看\
[bripkens作者的connect-history-api-fallback](https://github.com/bripkens/connect-history-api-fallback)

## Install

```bash
$ npm install --save 'koa2-connect-history-api-fallback'
```

## Example
```bash
const Koa = require('koa');

# require 'koa2-connect-history-api-fallback' middleware
const historyApiFallback = require('koa2-connect-history-api-fallback');

# create app
const app = new Koa();

# use historyApiFallback
app.use(historyApiFallback());

# other middlewares
app.use(...);

```