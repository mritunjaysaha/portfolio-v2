import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { Intro } from "../src/components/intro";
import { Projects } from "../src/components/projects";
import { Blogs } from "../src/components/blogs";
import { theme, mediaQueries, bp } from "../theme.config";

const StyledH3 = styled.h3`
    font-size: ${(props) => props.theme.fontSize.fs40};
    padding: 4rem 0;
    text-align: center;
`;
export default function Home() {
    return (
        <div>
            <Head>
                <title>Mritunjay</title>
                <meta name="description" content="Mritunjay Saha NERIST" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <main>
                    <Intro />
                    <StyledH3>Projects</StyledH3>
                    <Projects />
                    <StyledH3>Blogs</StyledH3>
                    <Blogs />
                </main>
            </ThemeProvider>
        </div>
    );
}
