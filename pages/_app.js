/** jsxImportSource @emotion/react */
import { Global, ThemeProvider, css } from "@emotion/react";
import "../styles/globals.css";
import { Navbar } from "../src/components/Navbar/navbar";
import { Footer } from "../src/components/footer";
import { Aside } from "../src/components/aside";
import { theme, mediaQueries, bp } from "../theme.config";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    const initializeGoogleTagManager = () => {
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "G-7BC2J471CG");
    };
    useEffect(() => {
        initializeGoogleTagManager();
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <Global
                    styles={css`
                        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Readex+Pro:wght@200;300;400;500;600;700&display=swap");

                        html {
                            ${mediaQueries(bp.desktopXL)} {
                                font-size: 80%;
                            }
                        }
                        body {
                            padding: 0 4rem;

                            font-size: ${theme.fontSize.fs16};
                            background-color: ${theme.backgroundColor.primary};
                            color: ${theme.color.primary};

                            ${mediaQueries(bp.desktop)} {
                                padding: 0 12rem;
                            }
                        }

                        h3 {
                            font-family: "Poppins", sans-serif;
                            font-weight: 600;
                        }
                        span {
                            font-family: "Readex Pro", sans-serif;
                            font-weight: 300;
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
