import express from 'express';
import { render } from './utils';

const app = express();

app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({
    message: 'data from api'
  });
});

app.get('/api/newslist', (req, res) => {
  res.json({
    code: 0,
    data: [
      { id: '001', title: 'news 001' },
      { id: '002', title: 'news 002' },
    ]
  });
});

app.get('*', (req, res) => {
  render(req, res);
});

const config = {
  port: 3000
}

app.listen(config.port, () => {
  console.log('React SSR Start listen on http://127.0.0.1:%s', config.port);
});
