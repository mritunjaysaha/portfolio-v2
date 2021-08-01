/**@JsxImportSource @emotion/react */
import { ThemeProvider, css } from "@emotion/react";
import styled from "@emotion/styled";
import { projects } from "../projectData/data";
import { theme, mediaQueries, bp } from "../../theme.config";
import { StyledFontAwesomeIcon } from "./StyledComponents/atoms";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Anchor } from "../atoms/anchor";

const StyledArticle = styled.article`
    position: relative;
    width: 20rem;
    aspect-ratio: 1/1.1;
    border: 1px solid red;

    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
        ". . . icons icons"
        ". . . icons icons"
        ". . . . ."
        ". . . . ."
        ". . . . ."
        "title title title title title"
        "title title title title title"
        "title title title title title"
        "stack stack stack stack stack";
    width: 100%;
    height: 100%;
    padding: 2rem;

    .icons {
        grid-area: icons;
        display: flex;
        justify-content: space-between;
        align-items: center;

        position: absolute;
        top: 0;
        right: 0;

        width: 6rem;
    }

    .title {
        grid-area: title;

        text-align: center;
    }

    .stack {
        grid-area: stack;
        display: flex;
        justify-content: center;

        span {
            text-transform: uppercase;
            padding-right: 1rem;
            white-space: pre;
        }
    }
`;

function ProjectCard(props) {
    const { name, repo, demo, stack } = props.data;
    return (
        <StyledArticle>
            {/* Icons */}
            <div className="icons">
                <Anchor href={repo}>
                    <StyledFontAwesomeIcon icon={faGithubAlt} width="2rem" />
                </Anchor>
                <Anchor href={demo}>
                    <StyledFontAwesomeIcon
                        icon={faExternalLinkAlt}
                        width="2rem"
                    />
                </Anchor>
            </div>
            {/* TITLE */}

            <div className="title">
                <h3>{name ? name : ""}</h3>
            </div>
            {/* stack */}
            <div className="stack">
                {stack ? stack.map((st) => <span key="st">{st}</span>) : ""}
            </div>
        </StyledArticle>
    );
}

const StyledProjectsContainer = styled.section`
    position: relative;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    place-items: center;
    gap: 2rem;
    ${mediaQueries[bp.desktop]} {
    }
`;

export function Projects() {
    return (
        <ThemeProvider theme={theme}>
            <section>
                <h3>Projects</h3>
                <br />
                <br />
                <StyledProjectsContainer>
                    {projects.map((data) => {
                        if (data.display) {
                            return <ProjectCard key={data.demo} data={data} />;
                        }
                    })}
                </StyledProjectsContainer>
            </section>
        </ThemeProvider>
    );
}
