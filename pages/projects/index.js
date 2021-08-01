/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Head from "next/head";
import { Projects } from "../../src/components/projects";

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
            <main
                css={css`
                    height: 80vh;
                `}
            >
                <Projects />
            </main>
        </div>
    );
}
