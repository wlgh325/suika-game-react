import palette from "./palette";

const typography = {
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(","),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
        fontFamily: "",
        textTransform: "uppercase",
    },
    h2: {
        fontFamily: "",
        fontWeight: 700,
        textTransform: "uppercase",
    },
    h3: {
        fontFamily: "",
    },
    h4: {
        fontFamily: "",
        color: palette.common.black
    },
    h5: {
        fontFamily: "",
        fontSize: 18,
        fontWeight: 600,
    },
    h6: {
        fontFamily: "",
    }
}

export default typography;