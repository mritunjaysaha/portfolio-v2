/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDev,
    faLinkedin,
    faTwitterSquare,
    faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Anchor } from "../atoms/anchor";
import { style, mediaQueries } from "../../styles/style";

const asideStyle = css`
    ${mediaQueries[3]} {
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0px;
        left: 0px;
        height: 100vh;
    }
`;

const ulStyle = css`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const liStyle = css`
    margin: 1rem 2rem;
    border-radius: 50%;
    border: ${style.border.thickness} solid transparent;
    padding: 1.5rem;
    transition: ease-in 0.3s;

    color: ${style.color.grey};

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border: ${style.border.thickness} solid ${style.border.color};
        color: ${style.color.white};
    }
`;

export function SocialTabs() {
    return (
        <aside css={asideStyle}>
            <ul css={ulStyle}>
                <li css={liStyle}>
                    <Anchor
                        content={
                            <FontAwesomeIcon
                                icon={faGithubSquare}
                                css={css`
                                    font-size: 4rem;
                                `}
                            />
                        }
                        href="https://github.com/mritunjaysaha"
                    />
                </li>
                <li css={liStyle}>
                    <Anchor
                        content={
                            <FontAwesomeIcon
                                icon={faTwitterSquare}
                                css={css`
                                    font-size: 4rem;
                                `}
                            />
                        }
                        href="https://github.com/mritunjaysaha"
                    />
                </li>
                <li css={liStyle}>
                    <Anchor
                        content={
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                css={css`
                                    font-size: 4rem;
                                `}
                            />
                        }
                        href="https://github.com/mritunjaysaha"
                    />
                </li>
                <li css={liStyle}>
                    <Anchor
                        content={
                            <FontAwesomeIcon
                                icon={faDev}
                                css={css`
                                    font-size: 4rem;
                                `}
                            />
                        }
                        href="https://dev.to/mritunjaysaha"
                    />
                </li>
            </ul>
        </aside>
    );
}
