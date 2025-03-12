import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';

@WebSocketGateway(80, { transports: ['websocket'], cors: true })
export class ChatGateway {
    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string) {
        console.log(message);
    }
}