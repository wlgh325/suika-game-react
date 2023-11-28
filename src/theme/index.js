import {createTheme, responsiveFontSizes} from "@mui/material/styles"
import typography from "./typography";
import palette from "./palette";

let theme = createTheme({
    typography,
    palette,
})

theme = responsiveFontSizes(theme);

export default theme;