import "../styles/globals.css";
import { Navbar } from "../src/components/navbar";
import { Footer } from "../src/components/footer";
import { Aside } from "../src/components/aside";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Aside />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
