/** jsxImportSour @emotion/react */
import { ThemeProvider, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";
import { theme, mediaQueries, bp } from "../../../theme.config";
import { navItems } from "../../../data";
import { MobileNavbar } from "./mobileNavbar";

const Logo = styled.div`
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.fontSize.fs20};
    font-family: "Roboto", sans-serif;
`;

const Nav = styled.nav`
    display: none;
    ${mediaQueries(bp.desktop)} {
        display: flex;
    }
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;

    ul {
        display: flex;

        width: 100%;

        justify-content: space-between;

        ${mediaQueries(bp.desktop)} {
            width: 60%;

            li {
                margin: 0;
            }
        }

        ${mediaQueries(bp.desktopLarge)} {
            width: 40%;

            li {
                margin: 0;
            }
        }

        li {
            text-transform: capitalize;
            ${mediaQueries(bp.desktop)} {
                margin: 0 4rem;
                padding: 1rem 2rem;
            }
            text-align: center;
            font-weight: 700;

            border-radius: ${(props) => props.theme.border.radius};
            border-top: ${(props) => props.theme.border.thickness};
            border-bottom: ${(props) => props.theme.border.thickness} solid
                transparent;

            transition: 0.3s ease-in;
            cursor: pointer;
            &:hover {
                background-color: ${(props) =>
                    props.theme.backgroundColor.secondaryBlue};
                color: ${(props) => props.theme.color.black};
            }
        }

        .ul-li--active {
            color: ${(props) => props.theme.color.blue};
            border-bottom: ${(props) => props.theme.border.thickness} solid
                ${(props) => props.theme.color.blue};

            &:hover {
                background-color: ${(props) =>
                    props.theme.backgroundColor.primary};

                color: ${(props) => props.theme.color.blue};
            }
        }
    }
`;

function DesktopNav() {
    const router = useRouter();

    return (
        <Nav>
            {/* <Logo>
                <Link href="/">Mritunjay</Link>
            </Logo> */}
            <ul>
                {navItems.map((items) => (
                    <Link
                        key={items.name}
                        href={items.href ? items.href : ""}
                        passHref
                    >
                        <li
                            className={
                                router.pathname === items.href
                                    ? "ul-li--active"
                                    : ""
                            }
                        >
                            {items.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </Nav>
    );
}

export function Navbar() {
    return (
        <ThemeProvider theme={theme}>
            <DesktopNav />
            <MobileNavbar />
        </ThemeProvider>
    );
}
