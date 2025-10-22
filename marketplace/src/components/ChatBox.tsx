import { useState } from 'react'

export default function ChatBox() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const sendMessage = () => {
    if (!message) return
    setMessages([...messages, message])
    setMessage('')
  }

  return (
    <div style={{border: '1px solid #ccc', padding: '10px'}}>
      <div style={{height: '200px', overflowY: 'auto', marginBottom: '10px'}}>
        {messages.map((m, i) => <div key={i}>{m}</div>)}
      </div>
      <input 
        value={message} 
        onChange={e => setMessage(e.target.value)} 
        placeholder="Type message..."
        style={{width: '70%', marginRight: '5px'}}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}
