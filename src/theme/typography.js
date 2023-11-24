import palette from "./palette";

const typography = {
    fontFamily: ["sans-serif", "Arial"].join(","),
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
    },
    h3: {
        fontFamily: "",
        textTransform: "uppercase",
    },
    h4: {
        fontFamily: "",
        fontSize: 17,
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