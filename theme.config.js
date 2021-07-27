const color = {
    black: "#111111",
    grey: "#767677",
    lightGrey: "#A4A4A4",
    white: "#f9f9f9",
    blue: "hsl(199.2, 77.4%, 89.9%)",
    lightBlue: "hsl(199.2, 77.4%, 50.9%)",
    darkBlue: "hsl(199.2, 77.4%, 30.9%)",
};

export const theme = {
    color: {
        primary: color.grey,
        secondary: color.lightGrey,
        white: color.white,
        blue: color.blue,
        activeNav: color.lightBlue,
        hoverNav: color.darkBlue,
    },
    backgroundColor: {
        primary: color.black,
        activeNav: color.lightBlue,
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
        thickness: "0.2rem",
    },
};
