import {Observable} from "../Interfaces/Observable";
import {Observer} from "../Interfaces/Observer";

export class ProductionRelease implements Observable {

    private observerList : Observer[] = []

    // Add a new observer to the list
    add(observer: Observer) {
        this.observerList.push(observer)
    }

    // Remove an observer from the list
    remove(observer: Observer) {

        //Check the index exists for the observer
        let index = this.observerList.indexOf(observer)

        if(index != -1) {
            this.observerList.splice(index, 1)
        }

    }

    // Notify all observers about the update
    notify() {
        for (const observer of this.observerList) {
            observer.update()
        }
    }

}