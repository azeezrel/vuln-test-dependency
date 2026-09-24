# vuln-test-dependency

Repository that demonstrates dependency vulnerabilities:

- `package.json` pins older versions of `lodash`, `express`, and `minimist` known to have historical vulnerabilities.
- `Dockerfile` uses `node:8-alpine` which is EOL and will trigger scans for outdated base images.

Usage:

```bash
npm install
npm start
```
