// Create an Observable class with an object set to the instance of ProductionRelease
import {Observable} from "./Interfaces/Observable";
import {ProductionRelease} from "./ProdReleaseObservable/ProductionRelease";
import {EmailSubscriberObserver} from "./ProdReleaseObservers/EmailSubscriberObserver";
import {SmsSubscribeObserver} from "./ProdReleaseObservers/SmsSubscribeObserver";

const productionReleaseObservable: Observable = new ProductionRelease();

// Create an Observer class object
const emailObserverObj: EmailSubscriberObserver = new EmailSubscriberObserver();
const smsObserverObj: SmsSubscribeObserver = new SmsSubscribeObserver();

// Create all the email subscribers for the EmailSubscriberObserver
emailObserverObj.subscribe('soos@gmail.com');
emailObserverObj.subscribe('soos123@gmail.com');
emailObserverObj.subscribe('soos_other@gmail.com');

// Unsubscribe one of the subscribers
emailObserverObj.unSubscribe('soos123@gmail.com');

//Subscribe to SMS
smsObserverObj.subscribe(+333-243-3443)

// Add the list of observers to the main observable object
productionReleaseObservable.add(emailObserverObj);
productionReleaseObservable.add(smsObserverObj);

// Check for updates which will trigger notifications to all subscribers
productionReleaseObservable.notify();


/* We can add more observers ex: smsObserverObj, pushNotificationObj etc
productionReleaseObservable.add(pushNotificationObj);
*/