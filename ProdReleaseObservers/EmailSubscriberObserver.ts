import {Observer} from "../Interfaces/Observer";

export class EmailSubscriberObserver implements Observer {

    private emailSubscribersList: Set<string> = new Set();

    subscribe(emailId: string) {
        // Add the new email to the subscription list and notify the subscriber
        this.emailSubscribersList.add(emailId);
        this.sendEmail(emailId, 'Your newsletter subscription was successful. You will receive updates soon after the release. Stay tuned!!!');
    }

    // Update method called by the subject to notify the observer
    update(): void {
        // Fetch the list of email subscribers from the set
        const emailListArray = Array.from(this.emailSubscribersList);
        for (const email of emailListArray) {
            this.sendEmail(email, 'Yes!!!! We have launched a new release of our software. Please click on the below link to get a detailed view of what this release is about.');
        }
    }

    // Unsubscribe an email from the list
    unSubscribe(emailId: string): void {
        this.emailSubscribersList.delete(emailId);
        this.sendEmail(emailId, 'You have unsubscribed from our newsletter. Please let us know if there is any feedback from your side.');
    }

    // Private method to simulate sending an email
    private sendEmail(email: string, emailBody: string): void {
        // Implement the email send logic
        console.log(`Email sent to ${email}: ${emailBody}`);
    }


}