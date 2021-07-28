import Head from "next/head";
import { CircularLoading } from "../src/components/circularLoading";
import { Intro } from "../src/components/intro";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Mritunjay</title>
                <meta name="description" content="Mritunjay Saha NERIST" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Intro />
            </main>
        </div>
    );
}
