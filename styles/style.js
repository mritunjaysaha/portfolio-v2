export const style = {
    color: {
        grey: "#777676",
        black: "#101011",
        blue: "hsl(225, 53%, 35%)",
        lightBlue: "hsl(199.2, 77.4%, 75%)",
        white: "#AAABAB",
    },
    font: {
        size: {
            fs18: "1.8rem",
            fs24: "2.4rem",
            fs30: "3rem",
        },
        weight: {
            bold: 700,
        },
    },
    border: {
        thickness: ".25rem",
        color: "hsl(199.2, 77.4%, 60.9%)",
        radius: ".5rem",
    },
    paddingSide: {
        mobile: "2rem",
    },
    transition: {},
};

const breakPoints = [567, 768, 996, 1200];

export const mediaQueries = breakPoints.map(
    (bp) => `@media only screen and (min-width: ${bp}px)`
);
