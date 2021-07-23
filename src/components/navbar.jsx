/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Anchor } from "../atoms/anchor";
import { style, mediaQueries } from "../../styles/style";
import { SocialTabs } from "./socialTabs";
import { useState } from "react";

export function Navbar() {
    const [isMenuClicked, setMenuClicked] = useState(false);

    function handleMenuBtn() {
        console.log("clicked");
        setMenuClicked(true);
    }

    function handleCloseBtn() {
        console.log("close");
        setMenuClicked(false);
    }

    return (
        <nav
            css={css`
                padding: 4rem 0;
                display: flex;
                justify-content: space-between;

                /* Desktop view */
                ${mediaQueries[3]} {
                    grid-column: 1 / span 12;
                    display: flex;
                    justify-content: space-between;
                    padding: 4rem 0;
                }
            `}
        >
            <div
                css={css`
                    & > a {
                        margin: 1rem 1.5rem 1rem 0;
                    }
                `}
            >
                <Anchor
                    content="@MritunjaySaha_"
                    link="https://twitter.com/MritunjaySaha_"
                    fontWeight={style.font.weight.bold}
                />
            </div>

            {/* Hamburger Menu */}
            <section
                css={css`
                    height: inherit;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    ${mediaQueries[3]} {
                        display: none;
                    }

                    div {
                        background: ${style.color.black};
                        height: 0.4rem;
                        width: 3.2rem;

                        border-radius: 15px;
                    }
                `}
                onClick={handleMenuBtn}
            >
                <div></div>
                <div></div>
                <div></div>
            </section>

            {/* Navbar menu */}
            <ul
                css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: ${style.color.black};

                    display: ${isMenuClicked ? "flex" : "none"};
                    flex-direction: column;

                    height: 100vh;
                    width: 100vw;

                    z-index: 10;

                    li {
                        list-style: none;
                        width: inherit;
                        padding-top: 4rem;
                        padding-left: 4rem;

                        &:first-child {
                            padding-top: 12rem;
                        }

                        a {
                            color: ${style.color.white};
                            font-size: ${style.font.size.medium};
                            font-weight: ${style.font.weight.bold};
                            text-transform: uppercase;
                            letter-spacing: 0.4rem;

                            /* border-bottom: ${style.border.thickness} solid
                                ${style.color.white}; */

                            background-image: linear-gradient(
                                to left,
                                ${style.color.white},
                                ${style.color.white}
                            );
                            background-size: 36% ${style.border.thickness};
                            background-repeat: no-repeat;
                            background-position: left bottom;
                        }
                    }
                    ${mediaQueries[3]} {
                        position: unset;
                        height: max-content;
                        width: max-content;

                        background: none;

                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;

                        li {
                            transition: 0.3s all;
                            padding: 0;
                            margin: 1rem 2.5rem;

                            &:first-child {
                                margin-left: 0;
                            }

                            &:last-child {
                                margin-right: 0;
                            }

                            a {
                                background: none;
                                padding: 1rem 2.5rem;
                                color: ${style.color.black};
                                transition: 0.3s all;
                                border-radius: 0.5rem;
                                /* border: ${style.border.thickness} solid
                                    transparent; */
                                font-size: ${style.font.size.small};
                                letter-spacing: unset;
                                text-transform: capitalize;

                                &:hover {
                                    background: ${style.color.blue};
                                    /* border: ${style.border.thickness} solid
                                        ${style.border.color}; */
                                }
                            }
                        }
                    }
                `}
            >
                <li
                    css={css`
                        ${mediaQueries[3]} {
                            display: none;
                        }
                    `}
                >
                    {/* close button */}
                    <p
                        css={css`
                            position: absolute;
                            top: 4rem;
                            right: 4rem;

                            display: ${isMenuClicked ? "flex" : "none"};

                            color: ${style.color.white};
                            font-size: 4rem;
                            font-weight: ${style.font.weight.bold};
                        `}
                        onClick={handleCloseBtn}
                    >
                        &times;
                    </p>
                </li>
                <li>
                    <Anchor content="Projects" link="/projects" />
                </li>
                <li>
                    <Anchor content="Blogs" link="/blogs" />
                </li>
                <li>
                    <Anchor content="About" link="/about" />
                </li>
            </ul>
        </nav>
    );
}
