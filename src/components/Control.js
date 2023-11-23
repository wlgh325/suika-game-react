import {observer} from "mobx-react-lite";
import {useStore} from "../store";
import {Box, Button, Typography} from "@mui/material"
import {ArrowDownward, ArrowUpward, Speed} from "@mui/icons-material";

const Control = () => {
    const {speed, theme, increaseSpeed, decreaseSpeed} = useStore("gameInfoStore");

    return (
        <Box>
            <Typography><Speed/>Speed: {speed} </Typography>
            <Button onClick={increaseSpeed}>speed Up <ArrowUpward/></Button>
            <Button onClick={decreaseSpeed}>speed Down <ArrowDownward/></Button> <br/>
            <Typography>Theme: {theme}</Typography>
        </Box>
    )
}

export default observer(Control);