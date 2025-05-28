Websocket Server setup
```
cd websocket-trial
npm ci
# if typescript error run `tsc -b`
tsc -b 
```

1. Open https://hoppscotch.io/realtime/websocket
2. WebSocket tab > `ws://localhost:8080` and click `Connect`
3. Repeat step 1 and 2 again to check multiple connections.


Websocket Client 
```
cd websocket-react 
npm ci
npm run dev
```
Type any message in inputbox and click `send`. The message will be broadcasted.
Check the message https://hoppscotch.io/realtime/websocket
