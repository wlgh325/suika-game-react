import {observer} from "mobx-react-lite";
import {Button as MuiButton} from "@mui/material"
import {styled} from "@mui/system";

const Button = ({children, ...rest}) => {
   return <MuiButton {...rest}>{children}</MuiButton>
}

export const ControlButton = styled((props) => <Button {...props}/>)(({theme}) => {
    return {
        color: theme.palette.info.main,
    }
})