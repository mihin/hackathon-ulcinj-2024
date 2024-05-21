import { LightningElement, api } from 'lwc';

export default class BuddyCard extends LightningElement {
    @api buddy;

    handleBuddySelection() {
        this.dispatchEvent(new CustomEvent('buddyselected', { detail: this.buddy.name }));
    }
}