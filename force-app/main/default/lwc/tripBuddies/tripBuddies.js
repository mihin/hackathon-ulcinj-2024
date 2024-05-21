import { LightningElement, track } from 'lwc';

const TABS = {
    BUDDIES: 'buddies',
    CHATS: 'chats'
};

export default class TripBuddies extends LightningElement {
    buddies = [
        {
            firstName: 'Mikhail',
            name: 'Mikhail Prisheltsev',
            age: '26',
            jobTitle: 'Software Developer',
            img: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001879.png',
        },
        {
            name: 'Alina Protasova',
            age: '25',
            jobTitle: 'Travel Blogger',
            img: 'https://avatarfiles.alphacoders.com/375/375571.png'
        },
        {
            name: 'Andrey Putasov',
            age: '33',
            jobTitle: 'Interior Designer',
            img: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001879.png',
        },
        {
            name: 'Zakaria Beno',
            age: '25',
            jobTitle: 'Software Developer',
            img: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001879.png',
        },
        {
            name: 'Konstantin Maslov',
            age: '22',
            jobTitle: 'Freelancer',
            img: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001879.png',
        },
        {
            name: 'Arina Popova',
            age: '22',
            jobTitle: 'Student',
            img: 'https://avatarfiles.alphacoders.com/375/375571.png'
        },
        {
            name: 'Alex Voloshin',
            age: '27',
            jobTitle: 'Lawyer',
            img: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001879.png',
        },
        {
            name: 'Alina Pozova',
            age: '25',
            jobTitle: 'UI/UX Designer',
            img: 'https://avatarfiles.alphacoders.com/375/375571.png'
        },
        {
            name: 'John Murray',
            age: '28',
            jobTitle: 'Architect',
            img: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001879.png',
        },
        {
            name: 'Anastasia Rogozina',
            age: '32',
            jobTitle: 'HR',
            img: 'https://avatarfiles.alphacoders.com/375/375571.png'
        },
    ];

    @track chats = [];
    selectedBuddy;
    selectedTab = TABS.BUDDIES;

    get buddiesPresent() {
        return this.buddies.length > 0;
    }

    get chatsPresent() {
        return this.chats.length > 0;
    }

    get showBuddies() {
        return this.selectedTab === TABS.BUDDIES && !this.selectedBuddy;
    }

    get showChats() {
        return this.selectedTab === TABS.CHATS && !this.selectedBuddy;
    }

    get buddiesNumber() {
        return this.buddiesPresent ? `(${this.buddies.length})` : '';
    }

    get chatsNumber() {
        return this.chatsPresent ? `(${this.chats.length})` : '';
    }

    get buddiesTabClass() {
        return `tab buddies ${this.selectedTab === TABS.BUDDIES ? 'selected' : ''}`;
    }

    get chatsTabClass() {
        return `tab chats ${this.selectedTab === TABS.CHATS ? 'selected' : ''}`;
    }

    get isProposalSent() {
        return this.selectedBuddy && this.chats.find(chat => chat.buddy.name === this.selectedBuddy.name)?.proposalSent;
    }

    selectBuddiesTab() {
        this.selectedTab = TABS.BUDDIES;
        this.selectedBuddy = null;
    }

    selectChatsTab() {
        this.selectedTab = TABS.CHATS;
        this.selectedBuddy = null;
    }

    onBuddySelected($event) {
        this.selectedBuddy = this.buddies.find(buddy => buddy.name === $event.detail);
    }

    onChatSelected($event) {
        this.selectedBuddy = this.chats.find(chat => chat.buddy.name === $event.detail)?.buddy;
    }

    handleProposalSent($event) {
        this.chats.push(
            {
                buddy: $event.detail.buddy,
                lastMessage: $event.detail.message,
                proposalSent: true
            }
        );
        this.buddies.splice(
            this.buddies.findIndex(buddy => buddy.name === $event.detail.buddy.name),
            1
        );
    }

    handleBackAction() {
        this.selectedBuddy = null;
    }
}