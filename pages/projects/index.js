/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import Head from "next/head";
import { Projects } from "../../src/components/projects";
import { mediaQueries, bp, theme } from "../../theme.config";
import { StyledH3 } from "../../src/components/StyledComponents/atoms";

export default function ProjectsPage() {
    return (
        <div>
            <Head>
                <title>Projects</title>
                <meta
                    name="description"
                    content="Mritunjay Saha NERIST Blogs Projects"
                />
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
        </div>
    );
}
