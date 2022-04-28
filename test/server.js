import express, { application } from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import multer from 'multer';
import path from 'path';
import compression from 'compression';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static('../public'));
app.use(express.json({ limit: '2gb' }));
app.use(cookieParser());
app.use(bodyParser.json({ limit: '3mb' }));
app.use(bodyParser.urlencoded({ limit: '3mb', extended: true }));
app.use(compression());
const fileParser = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, '/../.tmp'),
  }),
  // fieldNameSize/fieldSize/fields/fileSize/files/parts/headerPairs/
  limits: {
    fileSize: '2gb',
    fieldSize: 100,
    fieldNameSize: 255
  }
  // fileFilter
}).any();//.fields() 指定上传字段
app.use(fileParser);

app.get('/test/string', async (req, res, next) => {
  console.log(req.body);
  res.send('test');
});
app.get('/test/json', async (req, res, next) => {
  console.log(req.body);
  res.json({ code: 0 });
});
app.post('/test/file', async (req, res, next) => {
  console.log(req.files)
  res.json({ code: 0 })
});
app.post('/test/files', async (req, res, next) => {

});

app.use((req, res, next) => {
  console.log(res.headersSent);
  console.log(req.url)
  console.log(req.method)
})
app.listen(3002, () => {
  console.log('express listen at: 3002');
});