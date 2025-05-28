import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket|null>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {

    const ws = new WebSocket('ws://localhost:8080');
    ws.onopen = () => {
      console.log('Connected');
      setSocket(ws);
    }
    ws.onmessage = (message) => {
      console.log('Received message: ', message.data);
      setLatestMessage(message.data);
    }
    setSocket(ws);

    return () => {
      ws.close();
    }
  }, [])

  if(!socket) {
    return <div>Connecting to socket server...</div>
  }

  return (<>
  <input onChange={(e) => setMessage(e.target.value)} value={message} />
  <button onClick={()=>socket.send(message)}>Send</button>
  {latestMessage}
  </>)
}

export default App
