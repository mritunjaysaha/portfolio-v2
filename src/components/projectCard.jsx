/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Anchor } from "../atoms/anchor";
import { style, mediaQueries } from "../../styles/style";
import Image from "next/image";

export function ProjectCard({ name, description, repo, demo, stack, gif }) {
    return (
        <>
            {/* gif */}
            <div
                css={css`
                    width: 100%;
                    height: auto;

                    aspect-ratio: 16/9;
                    ${mediaQueries[3]} {
                        grid-area: img;
                        height: 20rem;
                        width: 30rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `}
            >
                {gif ? (
                    <Image
                        src={`/${gif}`}
                        alt={name}
                        height={220}
                        width={400}
                        css={css`
                            aspect-ratio: 16/9;
                        `}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            {/* Description */}
            <div
                css={css`
                    ${mediaQueries[3]} {
                        grid-area: content;
                        padding-left: 4rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                `}
            >
                <h1
                    css={css`
                        font-size: 3rem;
                        margin: 1rem 0;
                    `}
                >
                    {name ? name : "Project Name"}
                </h1>
                <p
                    css={css`
                        margin: 1rem 0;
                        line-height: 2.4rem;
                    `}
                >
                    {description ? description : temp}
                </p>

                {/* Stack */}
                <p
                    css={css`
                        display: flex;
                        margin: 2rem 0;
                    `}
                >
                    <strong>Stack:</strong>
                    <span
                        css={css`
                            display: flex;
                            margin-left: 1rem;
                            flex-wrap: wrap;

                            p {
                                background-color: ${style.color.textLightBlue};
                                border: ${style.border.thickness} solid
                                    ${style.border.color};
                                border-radius: 0.5rem;
                                font-size: ${style.font.size.fs18};

                                padding: 0.6rem 1.4rem;
                                margin: 0 0.4rem 0.4rem;

                                ${mediaQueries[3]} {
                                    padding: 1rem 2rem;
                                    margin: 0 1rem 1rem;
                                    cursor: pointer;
                                }
                            }
                        `}
                    >
                        {stack.map((s) => (
                            <p>{s}</p>
                        ))}
                    </span>
                </p>

                <div
                    css={css`
                        display: flex;
                        a {
                            text-decoration: none;
                            margin: 0 1rem;
                            padding: 1rem 2rem;
                            border: ${style.border.thickness} solid
                                ${style.border.color};
                            border-radius: 0.5rem;

                            font-size: ${style.font.size.fs18};

                            padding: 0.6rem 1.4rem;
                            margin: 0 0.4rem 0.4rem;

                            &:first-child {
                                margin-left: 0;
                            }

                            &:last-child {
                                margin-right: 0;
                            }
                        }
                    `}
                >
                    <Anchor content="Github" link={repo} />
                    <Anchor content="Visit" link={demo} />
                </div>
            </div>
        </>
    );
}
