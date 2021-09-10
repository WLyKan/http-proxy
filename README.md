# http-proxy
simple http-proxy 

## how to use

proxy server

```bash
npm start
# gen ssl cert
npm run cert
```

dist server

```bash
npx http-server ./app -p 5000 -P http://localhost:3000/
# or
npx http-server ./app -p 5000 -P http://localhost:3000/ -S -C ./path/to/cert.pem -K ./path/to/key.pem
```
