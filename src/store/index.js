import _ from "lodash";
import { useLocalStore } from "mobx-react-lite";
import { createContext, useContext } from "react";
import GameInfoStore from "./GameInfoStore";

// 어느 컴포넌트에서 사용 할 수 있도록 context 사용
const storeContext = createContext(null);

const initRootStore = () => {
    const rootStore = {};
    rootStore.gameInfoStore = new GameInfoStore();
    return rootStore;
}

// context Provider
export const StoreProvider = ({children}) => {
    const store = useLocalStore(initRootStore);

    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = (storeName) => {
    const store = useContext(storeContext);
    
    if(!store) {
        throw new Error("useStore must be used within StoreProvider")
    }

    if (_.isString(storeName)) {
        return _.get(store, storeName);
    }

    if (_.isArray(storeName)) {
        return _.pick(store, storeName);
    }

    return store;
}