export class Message{
    sender: string;
    text: string;
    timestamp: Date;

    constructor( sender: string, text: string) {
        this.sender = sender;
        this.text = text;
        this.timestamp = new Date();
    }
}
