/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import Head from "next/head";
import { Projects } from "../../src/components/projects";
import { mediaQueries, bp, theme } from "../../theme.config";
import { StyledH3 } from "../../src/components/StyledComponents/atoms";

export default function ProjectsPage() {
    return (
        <>
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
                    content="https://raw.githubusercontent.com/mritunjaysaha/portfolio-v2/main/public/portfolio_og.png"
                />
                <meta
                    property="og:url"
                    content="https://mritunjaysaha.netlify.app"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="Mritunjay" />
            </Head>
            <ThemeProvider theme={theme}>
                <main
                    css={css`
                        height: 100%;

                        ${mediaQueries(bp.desktop)} {
                            height: 100vh;
                        }
                        overflow: hidden;
                    `}
                >
                    <StyledH3>Projects</StyledH3>
                    <Projects />
                </main>
            </ThemeProvider>
        </>
    );
}
