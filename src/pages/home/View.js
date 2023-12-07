import {LeftPanel, Game} from "./components";
import {Grid} from "@mui/material";
import NextFruitPanel from "./components/NextFruitPanel";
import {useTheme} from "@mui/system";

const Home = () => {
    const {palette} = useTheme();
    return (
        <Grid container spacing={3} sx={{backgroundColor: palette.background.default}}>
            <Grid item xs={3} sm={3} container>
                <LeftPanel/>
            </Grid>
            <Grid item xs={6} sm={6}>
                <Game/>
            </Grid>
            <Grid item xs={3} sm={3}>
                <NextFruitPanel/>
            </Grid>
        </Grid>
   )
}

export default Home;