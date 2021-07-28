/** JsxImportSour @emotion/react */
import { ThemeProvider, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { theme } from "../../theme.config";
import { navItems } from "../../data";

const Logo = styled.div`
    margin-bottom: 1rem;
    font-size: ${(props) => props.theme.fontSize.fs20};
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;

    ul {
        display: flex;

        li {
            text-transform: capitalize;
            margin: 0 4rem;
            padding: 1rem 2rem;

            text-align: center;
            font-weight: 700;

            border-radius: ${(props) => props.theme.border.radius};
            border: 0 solid transparent;
            border-top: ${(props) => props.theme.border.thickness};
            border-bottom: ${(props) => props.theme.border.thickness};

            transition: 0.3s ease-in;
            cursor: pointer;
            &:hover {
                background-color: ${(props) =>
                    props.theme.backgroundColor.primaryBlue};
                color: ${(props) => props.theme.color.black};
            }
        }

        .ul-li--active {
            color: ${(props) => props.theme.color.activeNav};
            border-bottom: ${(props) => props.theme.border.thickness} solid
                ${(props) => props.theme.color.activeNav};

            &:hover {
                background-color: ${(props) =>
                    props.theme.backgroundColor.primary};

                color: ${(props) => props.theme.color.activeNav};
            }
        }
    }
`;

export function Navbar() {
    const router = useRouter();

    return (
        <ThemeProvider theme={theme}>
            <Nav>
                <Logo>
                    <Link href="/">Mritunjay</Link>
                </Logo>
                <ul>
                    {navItems.map((items) => (
                        <Link
                            key={items.name}
                            href={items.href ? items.href : ""}
                            passHref
                        >
                            <li
                                className={
                                    router.pathname
                                        .split("/")
                                        .includes(items.name)
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
        </ThemeProvider>
    );
}
