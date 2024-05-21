import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Trip extends NavigationMixin(LightningElement) {
    navigateToTrip() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Trip__c',
            },
        });
    }
}