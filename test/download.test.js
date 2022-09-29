import { statSync } from 'fs'
import path from 'path'
import shttp from "../src/index.js";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  await shttp.download('http://localhost:3002/test-upload.png', __dirname + '/data/download.png');  
})();
