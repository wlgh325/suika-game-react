import {Button as MuiButton} from "@mui/material"
import {styled} from "@mui/system";

const Button = ({children, ...rest}) => {
   return <MuiButton {...rest}>{children}</MuiButton>
}

export const ControlButton = styled((props) => <Button variant="contained" {...props}/>)(({theme}) => {
    return {
        color: theme.palette.secondary.main,
    }
})

export default Button;