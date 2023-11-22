import {action, computed, makeObservable, observable} from "mobx";
import RootStore from "./RootStore";

class GameInfoStore extends RootStore {
    speed = 2;
    step = 0.5
    gameCount = 0;

    constructor(rootStore) {
        super();
        this.rootStore = rootStore
        makeObservable(this, {
            speed: observable,
            step: observable,
            gameCount: observable,
            distance: computed,
            increaseGameCount: action,
            increaseSpeed: action,
            decreaseSpeed: action,
        })
    }

    increaseSpeed = () => ++this.speed;

    decreaseSpeed = () => --this.speed;

    get distance() {
        return this.speed * this.step;
    }

    increaseGameCount = () => ++this.gameCount;
}

export default GameInfoStore;
