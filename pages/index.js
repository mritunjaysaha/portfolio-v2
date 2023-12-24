import { ThemeProvider } from "@emotion/react";
import Head from "next/head";
import { Intro } from "../src/components/intro";
import { Projects } from "../src/components/projects";
import { Blogs } from "../src/components/blogs";
import { theme } from "../theme.config";
import { StyledH3 } from "../src/components/StyledComponents/atoms";

export default function Home({ blogs }) {
    return (
        <div>
            <Head>
                <title>Mritunjay</title>
                <meta name="description" content="Mritunjay Saha" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content="Mritunjay Saha" />
                <meta
                    property="og:description"
                    content="Frontend Developer | React.js | TypeScript"
                />
                <meta
                    property="og:image"
                    content="https://github.com/mritunjaysaha/portfolio-v2/blob/main/public/portfolio_og.png"
                />
                <meta
                    property="og:url"
                    content="https://mritunjaysaha.netlify.app"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="Mritunjay" />
            </Head>
            <ThemeProvider theme={theme}>
                <main>
                    <Intro />
                    <StyledH3>Projects</StyledH3>
                    <Projects />
                    <StyledH3>Blogs</StyledH3>
                    <Blogs blogs={blogs} />
                </main>
            </ThemeProvider>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        "https://dev.to/api/articles?username=mritunjaysaha"
    );
    const blogs = await res.json();

    if (!blogs) {
        return {
            notFound: true,
        };
    }

    return {
        props: { blogs: blogs.slice(0, 3) },
    };
}
