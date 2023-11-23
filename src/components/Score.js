import {observer} from "mobx-react-lite";
import {useStore} from "../store";
import {Box, Grid, Typography } from "@mui/material";

const Score = () => {
    const {score, bestScore} = useStore("scoreStore");
    return (
        <Box>
            <Typography variant="h3">Score: {score}</Typography>
            <Typography variant="h3">BestScore: {bestScore}</Typography>
        </Box>
    )
}

export default observer(Score);