import Head from "next/head";
import { Intro } from "../src/components/intro";
import { Projects } from "../src/components/projects";

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
                <Projects />
            </main>
        </div>
    );
}
