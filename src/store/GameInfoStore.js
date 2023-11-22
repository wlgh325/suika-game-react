import { makeObservable, observable } from "mobx";
import RootStore from "./RootStore";

class GameInfoStore extends RootStore{
    score = 0;

    constructor(rootStore) {
        super();
        this.rootStore = rootStore;
        makeObservable(this, {
            score: observable,
        })
    }
    
    addScore = (point) => this.score = this.score + point;

    initScore = () => this.score = 0;
}

export default GameInfoStore;