/** jsxImportSource @emotion/react */
import { Global, ThemeProvider, css } from "@emotion/react";
import "../styles/globals.css";
import { Navbar } from "../src/components/navbar";
import { Footer } from "../src/components/footer";
import { Aside } from "../src/components/aside";
import { theme, mediaQueries, bp } from "../theme.config";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Global
                    styles={css`
                        @import url("https://fonts.googleapis.com/css2?family=Be+Vietnam:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

                        body {
                            padding: 0 4rem;

                            font-size: ${theme.fontSize.fs16};
                            background-color: ${theme.backgroundColor.primary};
                            color: ${theme.color.primary};

                            font-family: "Be Vietnam", sans-serif;

                            ${mediaQueries(bp.desktop)} {
                                padding: 0 12rem;
                            }
                        }
                    `}
                />
            </ThemeProvider>
            <Navbar />
            <Aside />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
