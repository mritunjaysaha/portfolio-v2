import "../styles/globals.css";
import { Navbar } from "../src/components/navbar";
import { Footer } from "../src/components/footer";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
