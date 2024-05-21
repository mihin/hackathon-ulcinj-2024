import { LightningElement, api } from 'lwc';

export default class TripDestination extends LightningElement {
    @api destination;

    get statusClass() {
        return `status ${this.destination.numberOfBuddies > 0 ? 'open' : 'confirmed'}`;
    }

    get buddiesInfo() {
        return this.destination.numberOfBuddies > 0
            ? `${this.destination.numberOfBuddies} buddies`
            : 'No buddies';
    }
}