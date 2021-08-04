import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

import { mediaQueries, theme, bp } from "../../../theme.config";
import { navItems } from "../../../data";

import { StyledFontAwesomeIcon } from "../StyledComponents/atoms";
import {
    faDev,
    faGithubSquare,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
    faBook,
    faHome,
    faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

import { Anchor } from "../../atoms/anchor";

const Logo = styled.div`
    color: ${(props) => props.theme.color.secondary};
    font-size: ${(props) => props.theme.fontSize.fs24};
    font-family: "Roboto", sans-serif;
`;

const StyledMenu = styled(RiMenu3Line)`
    color: ${(props) => props.theme.color.secondary};
    font-size: ${(props) => props.theme.fontSize.fs24};
`;

const StyledClose = styled(IoCloseSharp)`
    position: absolute;
    top: 0;
    right: 0;

    font-size: ${(props) => props.theme.fontSize.fs24};
    margin: 2rem;
`;

const StyledNavbar = styled.nav`
    position: relative;

    padding: 2rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .section-navbar {
        z-index: 100;

        position: fixed;
        top: 0;
        left: 0;

        display: grid;
        grid-auto-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 0px 0px;
        width: 100%;
        height: 100%;

        display: none;

        background-color: red;

        overflow-y: hidden;

        height: 100vh;
        width: 100vw;
        background-color: ${(props) => props.theme.backgroundColor.primary};

        ul {
            grid-area: 3 / 1 / 7 / 2;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            li {
                text-transform: capitalize;
                font-size: ${(props) => props.theme.fontSize.fs32};
            }
        }
        .contact {
            grid-area: 8 / 1 / 10 / 2;

            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: 0 auto;
            width: 60vw;
        }
    }

    ${mediaQueries(bp.desktop)} {
        display: none;
    }
`;

export function MobileNavbar() {
    function handleOpen() {
        const el = document.querySelector(".section-navbar");
        el.style.display = "grid";
    }

    function handleClose() {
        const el = document.querySelector(".section-navbar");

        el.style.display = "none";
    }

    return (
        <ThemeProvider theme={theme}>
            <StyledNavbar>
                <Logo>
                    <Link href="/">Mritunjay</Link>
                </Logo>
                <StyledMenu onClick={handleOpen} />
                <section className="section-navbar">
                    <StyledClose onClick={handleClose} />
                    <ul>
                        <Link href={navItems[0].href} passHref>
                            <li onClick={handleClose}>
                                <span>
                                    <StyledFontAwesomeIcon
                                        width="2rem"
                                        icon={faHome}
                                    />
                                </span>
                                &nbsp;{navItems[0].name}
                            </li>
                        </Link>
                        <Link href={navItems[1].href} passHref>
                            <li onClick={handleClose}>
                                <span>
                                    <StyledFontAwesomeIcon
                                        width="2rem"
                                        icon={faBook}
                                    />
                                </span>
                                &nbsp;{navItems[1].name}
                            </li>
                        </Link>
                        <Link href={navItems[2].href} passHref>
                            <li onClick={handleClose}>
                                <span>
                                    <StyledFontAwesomeIcon
                                        width="2rem"
                                        icon={faLaptopCode}
                                    />
                                </span>
                                &nbsp;{navItems[2].name}
                            </li>
                        </Link>
                    </ul>
                    <div className="contact">
                        <Anchor href="https://dev.to/mritunjaysaha">
                            <StyledFontAwesomeIcon icon={faDev} />
                        </Anchor>
                        <Anchor href="https://github.com/mritunjaysaha">
                            <StyledFontAwesomeIcon icon={faGithubSquare} />
                        </Anchor>
                        <Anchor href="https://twitter.com/MritunjaySaha_">
                            <StyledFontAwesomeIcon icon={faTwitterSquare} />
                        </Anchor>
                    </div>
                </section>
            </StyledNavbar>
        </ThemeProvider>
    );
}
