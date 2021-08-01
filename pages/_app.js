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
                        body {
                            padding: 0 4rem;

                            font-size: ${theme.fontSize.fs16};
                            background-color: ${theme.backgroundColor.primary};
                            color: ${theme.color.primary};

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
