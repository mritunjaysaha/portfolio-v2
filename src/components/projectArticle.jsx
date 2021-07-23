/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { ProjectCard } from "../components/projectCard";
import { mediaQueries } from "../../styles/style";
export function ProjectArticle(props) {
    return (
        <>
            <article
                css={css`
                    display: flex;
                    flex-direction: column;
                    margin: 2rem 0;
                    ${mediaQueries[3]} {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        grid-template-areas: "img content content";
                        margin: 8rem 0;
                    }
                `}
            >
                <ProjectCard {...props} />
            </article>
        </>
    );
}
