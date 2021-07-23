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
                        background: ${style.color.grey};
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
                    display: flex;

                    li {
                        margin: 0 2rem;

                        a {
                            color: ${style.color.grey};
                            background-color: transparent;
                            padding: 1rem 2rem;
                            border-radius: ${style.border.radius};
                            &:hover {
                                background-color: ${style.color.lightBlue};
                                color: ${style.color.black};
                            }
                        }
                        &:first-of-type {
                            margin-left: 0;
                        }
                        &:last-of-type {
                            margin-right: 0;
                        }
                    }
                `}
            >
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
