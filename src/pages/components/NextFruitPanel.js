import {observer} from "mobx-react-lite";
import {Box, Typography} from "@mui/material";
import {useStore} from "../../store";

const NextFruitPanel = () => {
    const gameInfoStore = useStore("gameInfoStore");
    const nextFruit = gameInfoStore.fruits[gameInfoStore.nextFruitIndex]

    return (
        <Box>
            <Typography variant="h4" fontFamily="Roboto">Next</Typography>
            <img src={`${nextFruit.name}.png`} alt=""/>
        </Box>
    )
}

export default observer(NextFruitPanel);