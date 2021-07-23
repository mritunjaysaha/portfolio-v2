/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { projects } from "../data/projectInfo";
import { ProjectArticle } from "../components/projectArticle";
import { mediaQueries } from "../../styles/style";

export function ProjectSection() {
    return (
        <>
            <section
                css={css`
                    display: flex;
                    flex-direction: column;
                    ${mediaQueries[3]} {
                        grid-column: 1 / span 12;
                    }
                `}
            >
                <h1
                    css={css`
                        text-align: center;
                        font-size: 4rem;
                        margin-bottom: 4rem;
                    `}
                >
                    Projects
                </h1>
                {projects.map(
                    ({
                        display,
                        name,
                        description,
                        repo,
                        demo,
                        stack,
                        gif,
                    }) => {
                        if (display) {
                            return (
                                <ProjectArticle
                                    name={name}
                                    description={description}
                                    repo={repo}
                                    demo={demo}
                                    stack={stack}
                                    gif={gif}
                                />
                            );
                        }
                    }
                )}
            </section>
        </>
    );
}
