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
    width: 30rem;
    aspect-ratio: 1/1.1;

    display: grid;
    grid-template-rows: repeat(1fr, 8);
    grid-template-areas:
        "icon"
        "title"
        "title"
        "title"
        "title"
        "title"
        "title"
        "stack";

    padding: 2rem;
    width: 100%;
    height: 100%;

    color: ${(props) => props.theme.color.black};

    .icons {
        grid-area: icon;
        display: flex;
        justify-content: flex-end;
        height: max-content;
        a {
            margin-right: 1.2rem;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    .title {
        grid-area: title;
        display: grid;
        place-items: center;

        font-family: "Roboto", sans-serif;
        text-align: center;

        h3 {
            text-transform: capitalize;
            /* font-size: ${(props) => props.theme.fontSize.fs20}; */

            /* font-size: 2.4rem; */
        }
    }

    .stack {
        grid-area: stack;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-end;

        height: max-content;

        font-size: ${(props) => props.theme.fontSize.fs14};

        span {
            text-transform: uppercase;
            padding-right: 1rem;
            width: max-content;

            &::last-child {
                padding-right: 0;
            }
        }
    }

    ${mediaQueries(bp.tablet)} {
        .title {
            h3 {
                font-size: ${(props) => props.theme.fontSize.fs28};
            }
        }
    }

    ${mediaQueries(bp.desktop)} {
        width: 24rem;

        .stack {
            font-size: ${(props) => props.theme.fontSize.fs16};
        }
    }

    ${mediaQueries(bp.desktopLarge)} {
        width: 30rem;
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

    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

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
                        if (data.display == true) {
                            count++;
                            return (
                                <ProjectCard
                                    key={data.demo}
                                    data={data}
                                    className={gradient[count % 4]}
                                />
                            );
                        }
                    })}
                </StyledProjectsGrid>
            </StyledProjectsContainer>
        </ThemeProvider>
    );
}
