import fetch from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';
import * as sdk from "matrix-js-sdk";

const proxyAgent = new HttpsProxyAgent("http://localhost:3128");

const myfetch = async (...args) => {
    console.log(args)
    let params = {};
    if (args && args.length > 1) {
        params = args[1];
    }
    return await fetch(args[0], {...params, agent: proxyAgent})
}

const client = sdk.createClient({ baseUrl: "https://matrix.org/", fetchFn: myfetch });
client.publicRooms(function (err, data) {
    console.log("Public Rooms: %s", JSON.stringify(data));
});

