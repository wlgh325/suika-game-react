import {Grid} from "@mui/material";
import {Control, Score} from "./index";
import LeaderBoard from "./LeaderBoard";

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

export default LeftPanel;