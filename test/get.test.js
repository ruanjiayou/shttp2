import shttp from "../src/index.js";

(async () => {
  const text = await shttp.get('http://localhost:3002/test/string');
  const json = await shttp.get('http://localhost:3002/test/json');
  console.log(text);
  console.log(json);
})();
