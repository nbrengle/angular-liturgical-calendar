export class Message{
    senderId: string;
    text: string;
    timestamp: Date;

    constructor( senderId: string, text: string) {
        this.senderId = senderId;
        this.text = text;
        this.timestamp = new Date();
    }
}
