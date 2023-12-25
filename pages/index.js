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
