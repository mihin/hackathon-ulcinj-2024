import { LightningElement, api, track } from 'lwc';

export default class Chat extends LightningElement {
    @api buddy;
    @api
    get isProposalSent() {
        return this._isProposalSent;
    }
    set isProposalSent(value) {
        this._isProposalSent = value;
    }
    proposalMsg;
    _isProposalSent = false;

    commonDestination = {
        key: 'key-4',
        title: 'Sveti Stefan',
        status: 'Look for buddies',
        img: 'https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/2-Sveti_Stefan-e1518769502911.jpg',
    };

    sendProposal() {
        this.proposalMsg = `Hi ${this.buddy.firstName}! Happy to meet you! Let's connect and explore ${this.commonDestination.title} together?`;
        this.isProposalSent = true;
        this.dispatchEvent(new CustomEvent('proposalsent', { detail: {
            buddy: this.buddy,
            message: this. proposalMsg
        }}));
    }

    handleBackAction() {
        this.dispatchEvent(new CustomEvent('back'));
    }

    connectedCallback() {
        if (this.isProposalSent) {
            this.proposalMsg = `Hi ${this.buddy.firstName}! Happy to meet you! Let's connect and explore ${this.commonDestination.title} together?`;
        }
    }
}