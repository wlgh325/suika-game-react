import {Paper as MuiPaper} from "@mui/material";
import {styled} from "@mui/system";

const StyledPaper = styled((props) => <MuiPaper {...props}/>)(({theme}) => {
    return {
        backgroundColor: theme.palette.background.paper,
    }
})

export const FloatingPaper = styled((props) => <MuiPaper elevation={20} {...props}/>)(({theme}) => {
    return {
        backgroundColor: theme.palette.background.paper,
        ...theme.transitions.floatingAni,
    }
})

const Paper = (props) => <StyledPaper {...props}/>

export default Paper;