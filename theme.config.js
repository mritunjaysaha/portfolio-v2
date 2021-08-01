const color = {
    black: "#111111",
    grey: "#969697",
    lightGrey: "#A4A4A4",
    white: "#f9f9f9",
    blue: "hsl(199.2, 77.4%, 50%)",
    lightBlue: "hsl(199.2, 77.4%, 68.9%)",
};

export const theme = {
    color: {
        primary: color.grey,
        secondary: color.lightGrey,
        white: color.white,
        blue: color.blue,
        black: color.black,
    },
    backgroundColor: {
        primary: color.black,
        primaryBlue: color.blue,
        secondaryBlue: color.lightBlue,
    },
    fontSize: {
        fs12: "1.2rem",
        fs14: "1.4rem",
        fs16: "1.6rem",
        fs18: "1.8rem",
        fs20: "2rem",
        fs24: "2.4rem",
        fs28: "2.8rem",
        fs32: "3.2rem",
        fs36: "3.6rem",
        fs40: "4rem",
    },
    border: {
        radius: "0.25rem",
        thickness: "0.25rem",
    },
    gradient: {
        deg30: "30deg",
        deg45: "45deg",
        deg60: "60deg",
        deg75: "75deg",
        deg90: "deg90",
    },
};

export const bp = {
    mobile: 576,
    tablet: 768,
    desktop: 992,
    desktopLarge: 1200,
};

// export const media = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export function mediaQueries(name) {
    return `@media only screen and (min-width: ${name}px)`;
}
