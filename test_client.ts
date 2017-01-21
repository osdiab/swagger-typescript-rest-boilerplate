import {DefaultApi} from "./build/client-ts/api";

const api = new DefaultApi();

async function run() {
  try {
    const res = await api.current();
    console.log(res.body);
    console.log(res.response.statusCode);
  } catch (e) {
    console.log("error: ", e);
  }
}

run().then(() => {
  console.log("done!");
});
