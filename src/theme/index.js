import {createTheme, responsiveFontSizes} from "@mui/material/styles"
import typography from "./typography";
import palette from "./palette";
import components from "./components";
import transitions from "./transitions"

let theme = createTheme({
    components,
    transitions,
    typography,
    palette,
})

theme = responsiveFontSizes(theme);

export default theme;