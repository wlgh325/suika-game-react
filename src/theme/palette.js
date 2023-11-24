import {alpha} from "@mui/material/styles"

const palette = {
    common: {
        black: "#000000",
        white: "#ffffff"
    },
    primary: {
       main: "#ab0021",
       dark: "#111111",
       contrastText: "#fff",
    },
    secondary: {
        main: "#ab0021",
        dark: "#ab0021",
        contrastText: "fff",
    },
    error: {
        main: "#e63321"
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
        paper: "#ffffff" ,
        default: "#f4f4f4",
        search: "#f5f5f5",
        cell: "#f6f6f6",
        backdrop: alpha("#dcebff", 0.5),
        progress: "#f3f3f3",
        button: "#efefef",
    }
}

export default palette;