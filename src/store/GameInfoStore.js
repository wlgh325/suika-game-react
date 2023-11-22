import {action, makeObservable, observable} from "mobx";
import RootStore from "./RootStore";

class ScoreStore extends RootStore {
    score = 0;
    bestScore = 0;
    rootStore;

    constructor(rootStore) {
        super();
        this.rootStore = rootStore;
        makeObservable(this, {
            score: observable,
            bestScore: observable,
            addScore: action,
            initScore: action,
            updateBestScore: action
        })
    }

    addScore = (point) => this.score = this.score + point;

    initScore = () => this.score = 0;

    updateBestScore = () => {
        if (this.bestScore < this.score) {
            this.bestScore = this.score;
        }
    }
}

export default ScoreStore;
