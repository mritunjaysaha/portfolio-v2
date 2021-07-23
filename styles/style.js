export const style = {
    color: {
        white: "#EDF2F7",
        black: "#16161d",
        textColor: "hsl(225, 53%, 35%)",
        blue: "hsl(199.2, 77.4%, 89.9%)",
    },
    font: {
        size: {
            small: "1.8rem",
            medium: "2.4rem",
            large: "3rem",
        },
        weight: {
            bold: 700,
        },
    },
    border: {
        thickness: "2.5px",
        color: "hsl(199.2, 77.4%, 60.9%)",
    },
    paddingSide: {
        mobile: "2rem",
    },
};

const breakPoints = [567, 768, 992, 1200];

export const mediaQueries = breakPoints.map(
    (bp) => `@media only screen and (min-width: ${bp}px)`
);
