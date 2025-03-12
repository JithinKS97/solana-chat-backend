import { WebSocketGateway, SubscribeMessage, MessageBody, ConnectedSocket, } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(80, { transports: ['websocket'], cors: true })
export class ChatGateway {
    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string, @ConnectedSocket() client: Socket) {
       console.log(message);
       client.emit('message', "Here is the response");
    }
}