import path from 'path'
import shttp from "../src/index.js";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://github.com/TencentCloud/tencentcloud-sdk-nodejs/archive/refs/heads/master.zip';
(async () => {
  await shttp.download(url, __dirname + '/files/' + path.basename(url)).progress((count, total) => {
    console.log(`${count}/${total}`)
  });
})();
