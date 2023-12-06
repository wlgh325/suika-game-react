import {action, computed, makeObservable, observable} from "mobx";
import RootStore from "./RootStore";

class ScoreStore extends RootStore {
    currentScore = 0;
    scoreList = [0,0,0];

    constructor(rootStore) {
        super();
        this.rootStore = rootStore;
        makeObservable(this, {
            currentScore: observable,
            scoreList: observable,
            bestScore: computed,
            sortedScoreList: computed,
            addScore: action,
            initScore: action,
        })
    }

    get bestScore() {
        // this.scoreList.sort();
        // return this.scoreList.length === 0 ? 0 : this.scoreList[0];
        return this.scoreList.length === 0 ? 0 : Math.max(...this.scoreList);
    }

    get sortedScoreList() {
        return this.scoreList.slice().sort((a,b) => b - a).slice(0, 3);
    }

    addScore = (point) => this.currentScore = this.currentScore + point;

    updateScoreList = () => this.scoreList.push(this.currentScore);

    initScore = () => this.currentScore = 0;
}

export default ScoreStore;
