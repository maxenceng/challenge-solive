# Challenge Solive

Development mode (need 2 terminals):
- 1st terminal:
```
yarn dev:koa
```
- 2nd terminal:
```
yarn dev:wds
```

Production mode:
```
yarn prod:build && yarn prod:start
```

Stop the prod server:
```
yarn prod:stop
```

Populate the DB with data.json
```
yarn import:data
```

Remove everything from the DB
```
yarn import:data remove
```
