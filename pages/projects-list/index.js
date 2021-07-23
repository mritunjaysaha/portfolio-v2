import React from "react";
import { projects } from "../../src/data/projectInfo";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Stacks = (props) => {
    const stacks = props.stacks;
    return (
        <span>
            {stacks.map((stack) =>
                stacks[stacks.length - 1] !== stack ? `${stack}, ` : `${stack}.`
            )}
        </span>
    );
};

const ProjectDetails = (props) => {
    const project = props.project;
    return (
        <li>
            <article
                css={css`
                    line-height: 1rem;
                    color: #16161d;
                `}
            >
                <h3
                    css={css`
                        font-weight: bold;
                        padding-bottom: 1rem;
                    `}
                >
                    {project.name}
                </h3>
                <section
                    css={css`
                        line-height: 2.5rem;
                        font-weight: 300;
                        color: #333;
                    `}
                >
                    <p>{project.description}</p>
                    <p>
                        <strong>Stack:&nbsp;</strong>
                        <Stacks stacks={project.stack} />
                    </p>
                    <p>
                        <strong>Demo:&nbsp;</strong>{" "}
                        <a
                            css={css`
                                text-decoration: none;
                                color: #16161d;
                            `}
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {project.demo}
                        </a>
                    </p>
                    <p>
                        <strong>GitHub:&nbsp;</strong> {project.repo}
                    </p>
                </section>
                <br />
            </article>
        </li>
    );
};

export default function ProjectList() {
    return (
        <section
            css={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: max-content;
                width: 100%;
            `}
        >
            <h3
                css={css`
                    padding: 2rem 0;
                `}
            >
                List of Projects
            </h3>
            <ol
                css={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    height: max-content;
                    width: 60vw;
                    margin: 0;
                `}
            >
                {projects.map((project) => (
                    <ProjectDetails key={project.name} project={project} />
                ))}
            </ol>
        </section>
    );
}
