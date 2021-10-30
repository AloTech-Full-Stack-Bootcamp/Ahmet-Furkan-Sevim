const Koa = require('koa');
const app = new Koa();

const PORT = process.env.PORT || 5000;

async function logger(ctx, next) {
  const time = new Date();
  const start = time.getTime();

  await next();
  const ms = new Date().getTime() - start;
  console.log('Path: ' + ctx.path);
  console.log('Http method: ' + ctx.method);
  console.log(`Start Time: ${time}`);
  console.log(`Time: ${ms}ms`);
}

app.use(async (ctx, next) => {
  logger(ctx, next);
  if ('/' === ctx.path) {
    ctx.body = 'Index Sayfası';
  } else if ('/about' === ctx.path) {
    ctx.body = 'Hakkında sayfası';
  } else if ('/contact' === ctx.path) {
    ctx.body = 'İletişim sayfası';
  } else {
  }
});

app.listen(PORT, () => {
  console.log(`Server is running by localhost:${PORT}`);
});
