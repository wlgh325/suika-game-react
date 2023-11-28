import {Control, Game, Score} from "../components";
import {Box, Grid} from "@mui/material";
import NextFruitPanel from "../components/NextFruitPanel";
import {observer} from "mobx-react-lite";
import LeaderBoard from "../components/LeaderBoard";

const LeftPanel = () => {
    return (
        <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
                <Score/>
            </Grid>
            <Grid item>
                <Control/>
            </Grid>
            <Grid item>
                <LeaderBoard/>
            </Grid>
        </Grid>
    )
}

const Home = () => {
   return (
       <Grid container spacing={3} sx={{backgroundColor: "#e39b3d"}}>
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