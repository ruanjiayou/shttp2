import path from 'path'
import shttp from "../src/index.js";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://upload-images.jianshu.io/upload_images/2675631-4bef7ddf67d042e9.gif?imageMogr2/auto-orient/strip|imageView2/2/w/774/format/webp';
(async () => {
  await shttp.download(url, __dirname + '/files/' + path.basename(url)).progress((count, total) => {
    console.log(`${count}/${total}`)
  });
})();
