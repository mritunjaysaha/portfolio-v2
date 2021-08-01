/**@jsxImportSource @emotion/react */
import { ThemeProvider, css } from "@emotion/react";
import styled from "@emotion/styled";
import { projects } from "../projectData/data";
import { theme, mediaQueries, bp } from "../../theme.config";
import { StyledIcon } from "./StyledComponents/atoms";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Anchor } from "../atoms/anchor";

const StyledArticle = styled.article`
    position: relative;
    width: 20rem;
    aspect-ratio: 1/1.1;

    ${mediaQueries(bp.tablet)} {
        width: 30rem;
    }

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
    color: ${(props) => props.theme.color.black};

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

        h3 {
            text-transform: capitalize;
            font-size: ${(props) => props.theme.fontSize.fs24};
        }
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
        <StyledArticle className={props.className}>
            {/* Icons */}
            <div className="icons">
                <Anchor href={repo}>
                    <StyledIcon icon={faGithub} width="2rem" />
                </Anchor>
                <Anchor href={demo}>
                    <StyledIcon icon={faExternalLinkAlt} width="2rem" />
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
    h3 {
        font-size: ${(props) => props.theme.fontSize.fs24};
        text-transform: uppercase;
    }
`;

const StyledProjectsGrid = styled.section`
    position: relative;

    display: grid;
    place-items: center;
    gap: 2rem;

    ${mediaQueries(bp.tablet)} {
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    }
    ${mediaQueries(bp.desktop)} {
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }

    .gradient-1 {
        background: #ffefba; /* fallback for old browsers */
        background: -webkit-linear-gradient(
            ${(props) => props.theme.gradient.deg30},
            #ffffff,
            #ffefba
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
            ${(props) => props.theme.gradient.deg30},
            #ffffff,
            #ffefba
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
    .gradient-2 {
        background-image: linear-gradient(
            ${(props) => props.theme.gradient.deg45},
            #f5f7fa 0%,
            #c3cfe2 100%
        );
    }

    .gradient-3 {
        background-image: linear-gradient(
            ${(props) => props.theme.gradient.deg45},
            #ebbba7 0%,
            #cfc7f8 100%
        );
    }

    .gradient-4 {
        background-image: linear-gradient(
            ${(props) => props.theme.gradient.deg45},
            #fff1eb 0%,
            #ace0f9 100%
        );
    }

    .gradient-5 {
        background-image: linear-gradient(
            ${(props) => props.theme.gradient.deg45},
            #f3e7e9 0%,
            #e3eeff 99%,
            #e3eeff 100%
        );
    }
`;

const gradient = [
    "gradient-1",
    "gradient-2",
    "gradient-3",
    "gradient-4",
    "gradient-5",
];

export function Projects() {
    return (
        <ThemeProvider theme={theme}>
            <StyledProjectsContainer>
                <StyledProjectsGrid>
                    {projects.map((data, count = 0) => {
                        count++;
                        if (data.display) {
                            return (
                                <ProjectCard
                                    key={data.demo}
                                    data={data}
                                    className={gradient[count % 5]}
                                />
                            );
                        }
                    })}
                </StyledProjectsGrid>
            </StyledProjectsContainer>
        </ThemeProvider>
    );
}
