import {observer} from "mobx-react-lite";
import {useStore} from "../store";
import {Box, Grid, Typography } from "@mui/material";

const Score = () => {
    const {score, bestScore} = useStore("scoreStore");
    return (
        <Box>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
                <Grid item xs={6}>
                    <Typography variant="h3">Score: {score}</Typography>
                </Grid>
                <Grid tiem xs={6}>
                    <Typography variant="h3">BestScore: {bestScore}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default observer(Score);