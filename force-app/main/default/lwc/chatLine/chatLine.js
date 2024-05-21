import { LightningElement, api } from 'lwc';

export default class ChatLine extends LightningElement {
    @api chat;

    handleChatSelection() {
        this.dispatchEvent(new CustomEvent('chatselected', { detail: this.chat.buddy.name }));
    }
}