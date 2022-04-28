import shttp from "../src/index.js";

(async () => {
  try {
    // const res = await shttp.get('http://localhost:3002/test/string').query({ q: 'test' });
    // console.log(res, 'res');
    // const res1 = await shttp.get('http://localhost:3002/test/json');
    // console.log(res1, 'res1');
    const res2 = await shttp.post('http://localhost:3002/test/file').attach('image', '/Users/jiayou/projects/shttp2/test/data/2.jpg');
    console.log(res2, 'res2');
  } catch (e) {
    console.log(e);
  }
})();
