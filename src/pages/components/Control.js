import {observer} from "mobx-react-lite";
import {useStore} from "../../store";
import {Box, Typography} from "@mui/material"
import {ArrowDownward, ArrowUpward, Speed} from "@mui/icons-material";
import {ControlButton} from "./index";

const Control = () => {
    const {speed, theme, increaseSpeed, decreaseSpeed, switchTheme} = useStore("gameInfoStore");
    const {initScore} = useStore("scoreStore");

    return (
        <Box>
            <Typography>Theme: {theme}</Typography>
            <ControlButton onClick={() => {
                const switchThemeMessage = "테마를 바꾸시겠습니까? \n 바꾸시면 게임을 다시 시작합니다";
                if (window.confirm(switchThemeMessage)) {
                    switchTheme();
                    initScore();
                }
            }}>Switch Theme</ControlButton>
            <Typography><Speed sx={{verticalAlign: "middle"}}/> Speed: {speed} </Typography>
            <ControlButton onClick={increaseSpeed}>speed Up <ArrowUpward/></ControlButton>
            <ControlButton onClick={decreaseSpeed}>speed Down <ArrowDownward/></ControlButton> <br/>
        </Box>
    )
}

export default observer(Control);