import {Observer} from "../Interfaces/Observer";

export class SmsSubscribeObserver implements Observer {

    private smsSubscribersList: Set<number> = new Set();

    subscribe(mobile: number) {
        // Add the new sms to the subscription list and notify the subscriber
        this.smsSubscribersList.add(mobile);
        this.sendSms(mobile, 'Your newsletter subscription was successful. You will receive updates soon after the release. Stay tuned!!!');
    }

    // Update method called by the subject to notify the observer
    update(): void {
        // Fetch the list of sms subscribers from the set
        const smsListArray = Array.from(this.smsSubscribersList);
        for (const mobile of smsListArray) {
            this.sendSms(mobile, 'Yes!!!! We have launched a new release of our software. Please click on the below link to get a detailed view of what this release is about.');
        }
    }

    // Unsubscribe a mobile from the list
    unSubscribe(mobile: number): void {
        this.smsSubscribersList.delete(mobile);
        this.sendSms(mobile, 'You have unsubscribed from our newsletter. Please let us know if there is any feedback from your side.');
    }

    // Private method to simulate sending an sms
    private sendSms(mobile: number, smsBody: string): void {
        // Implement the sms send logic
        console.log(`SMS sent to ${mobile}: ${smsBody}`);
    }


}