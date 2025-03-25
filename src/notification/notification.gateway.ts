import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class NotificationGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  private server: Server;


  handleConnection(client: Socket) {
    console.log(`Mijoz ulanish o'rnatdi: ${client.id}`);
    client.emit('connection', { message: 'Ulanish muvaffaqiyatli o‘rnatildi!' });
  }


  handleDisconnect(client: Socket) {
    console.log(`Mijoz ulanishni uzdi: ${client.id}`);
  }


  notifyNewProduct(data: any) {
    this.server.emit('new-product', { message: 'Yangi mahsulot qo‘shildi', data });
  }
}
