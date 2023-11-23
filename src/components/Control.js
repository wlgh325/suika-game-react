import {observer} from "mobx-react-lite";
import {useStore} from "../store";
import {Box, Button, Typography} from "@mui/material"
import {ArrowDownward, ArrowUpward, Speed} from "@mui/icons-material";

const Control = () => {
    const {speed, theme, increaseSpeed, decreaseSpeed, switchTheme} = useStore("gameInfoStore");
    const {initScore} = useStore("scoreStore");

    return (
        <Box>
            <Typography>Theme: {theme}</Typography>
            <Button onClick={() => {
                const switchThemeMessage = "테마를 바꾸시겠습니까? \n 바꾸시면 게임을 다시 시작합니다";
                if (window.confirm(switchThemeMessage)) {
                    switchTheme();
                    initScore();
                }
            }}>Switch Theme</Button>
            <Typography><Speed/>Speed: {speed} </Typography>
            <Button onClick={increaseSpeed}>speed Up <ArrowUpward/></Button>
            <Button onClick={decreaseSpeed}>speed Down <ArrowDownward/></Button> <br/>
        </Box>
    )
}

export default observer(Control);