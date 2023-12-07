import {alpha} from "@mui/material/styles"

const palette = {
    common: {
        black: "#000000",
        white: "#ffffff"
    },
    primary: {
       main: "#ff9800",
       dark: "#111111",
       contrastText: "#fff",
    },
    secondary: {
        main: "#0066ff",
        dark: "#2341e0",
        contrastText: "#fff",
    },
    error: {
        main: "#B00020"
    },
    warning: {
        main: "#ff9800"
    },
    info: {
        main: "#00acc1"
    },
    success: {
        main: "#4caf50"
    },
    divider: "#e5e5e5",
    background: {
        paper: "#FFDF11E2" ,
        default: "#e39b3d",
        backdrop: alpha("#dcebff", 0.5),
        progress: "#f3f3f3",
        button: "#efefef",
    }
}

export default palette;