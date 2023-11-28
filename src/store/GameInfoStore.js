import {action, computed, makeObservable, observable} from "mobx";
import RootStore from "./RootStore";
import {FRUITS_BASE, FRUITS_HLW} from "../fruits";
import sr from "seedrandom";

class GameInfoStore extends RootStore {
    speed = 2;
    step = 0.5
    gameCount = 0;
    theme = "base";
    gravityY = 1.5;
    currentFruitIndex = 0;
    nextFruitIndex = 0;
    random;

    constructor(rootStore) {
        super();
        this.rootStore = rootStore
        makeObservable(this, {
            speed: observable,
            step: observable,
            gameCount: observable,
            theme: observable,
            currentFruitIndex: observable,
            nextFruitIndex: observable,
            distance: computed,
            fruits: computed,
            increaseGameCount: action,
            increaseSpeed: action,
            decreaseSpeed: action,
            switchTheme: action,
            setFruitIndex: action,
        })

        this.random = sr();
    }

    increaseSpeed = () => ++this.speed;

    decreaseSpeed = () => --this.speed;

    get distance() {
        return this.speed * this.step;
    }

    get fruits() {
        switch (this.theme) {
            case "halloween":
                return FRUITS_HLW;
            default:
                return FRUITS_BASE;
        }
    }

    setFruitIndex = () => {
        this.currentFruitIndex = this.nextFruitIndex
        this.nextFruitIndex = Math.floor(this.random() * 5);
    }

    increaseGameCount = () => ++this.gameCount;

    switchTheme = () => this.theme = this.theme === "base" ? "halloween" : "base";
}

export default GameInfoStore;
