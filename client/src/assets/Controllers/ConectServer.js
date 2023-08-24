import { useEffect } from 'react'
import io from 'socket.io-client'

const sockect = io('http://localhost:3000');

function SendMessage(message) {
    sockect.emit('enviar', message)
}

export { sockect, SendMessage }
