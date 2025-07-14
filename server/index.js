import Koa from 'koa';
import fetch from 'node-fetch';

const app = new Koa();

// 百度统计配置
const site_id = 22211231;
const access_token =
  '121.0a3259e92647f2426386a37cc1a6a427.YlI4NfVF9GptzSoZGMUqGIC0uF1pngwr9X3JAXe.XD6knQ';
const start_date = '20250712';

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

app.use(async (ctx) => {
  // 添加 CORS 头，允许来自 http://localhost:8080 的请求
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (ctx.path === '/api/pv' && ctx.method === 'GET') {
    const end_date = formatDate(new Date());
    const url = `https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token=${access_token}&site_id=${site_id}&method=visit/toppage/a&start_date=${start_date}&end_date=${end_date}&metrics=pv_count,visitor_count`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      ctx.body = data;
      ctx.status = 200;
    } catch (error) {
      ctx.body = { error: 'Failed to fetch data' };
      ctx.status = 500;
    }
  } else {
    ctx.status = 404;
    ctx.body = { error: 'Not Found' };
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Koa proxy server is running on http://localhost:${PORT}`);
});