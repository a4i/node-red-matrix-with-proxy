Proof of concept for a pull request to let node-red matrix chat client to connect via proxy

See request-matrix-via-proxy.mjs. We give matrix sdk a fetchFn function to use a proxy agent.

To test with a node-red server :

```bash
nvm use --lts # v20
cd node-red-data && npm install && cd ..
docker compose up -d
```

* Open your browser on http://localhost:1880/ A default matrix flow is configured.
* Put your matrix user-id in the `injecter` node
* Configure your matrix server via the `Whois user` node (server url, user id and password)
* Get an access token with the `Update Access Token` button
* Deploy your new configuration
* Wait to the `Whois user` node to be connected

You can now see traffic in your proxy logs.

