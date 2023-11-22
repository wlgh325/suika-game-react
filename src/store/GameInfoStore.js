import {action, computed, makeObservable, observable} from "mobx";
import RootStore from "./RootStore";

class GameInfoStore extends RootStore {
    speed = 2;
    step = 0.5
    rootStore;

    constructor(rootStore) {
        super();
        this.rootStore = rootStore
        makeObservable(this, {
            speed: observable,
            step: observable,
            distance: computed,
            increaseSpeed: action,
            decreaseSpeed: action,
        })
    }

    increaseSpeed = () => ++this.speed;

    decreaseSpeed = () => --this.speed;

    get distance() {
        return this.speed * this.step;
    }
}

export default GameInfoStore;
