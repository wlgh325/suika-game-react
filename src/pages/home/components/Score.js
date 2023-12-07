import {observer} from "mobx-react-lite";
import {useStore} from "../../../store";
import {Box, Typography} from "@mui/material";
import {FloatingPaper} from "../../../components";

const Score = () => {
    const {currentScore, bestScore} = useStore("scoreStore");
    return (
        <Box>
            <FloatingPaper>
                <Typography variant="h3">Score: {currentScore}</Typography>
                <Typography variant="h3">BestScore: {bestScore}</Typography>
            </FloatingPaper>
        </Box>
    )
}

export default observer(Score);