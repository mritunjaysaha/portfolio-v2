/** JsxImportSource @emotion/react */
import { Global, ThemeProvider } from "@emotion/react";
import "../styles/globals.css";
import { Navbar } from "../src/components/navbar";
import { Footer } from "../src/components/footer";
import { Aside } from "../src/components/aside";
import { theme } from "../theme";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Global
                    styles={{
                        body: {
                            padding: "0 12rem",
                            fontSize: `${theme.fontSize.fs16}`,
                            backgroundColor: `${theme.backgroundColor.primary}`,
                            color: `${theme.color.primary}`,
                        },
                    }}
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
