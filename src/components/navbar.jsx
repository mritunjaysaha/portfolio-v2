/** JsxImportSour @emotion/react */
import { ThemeProvider } from "@emotion/react";
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

            &:hover {
                background-color: ${(props) => props.theme.color.blue};
                color: ${(props) => props.theme.color.black};
            }
        }

        .ul-li--active {
            color: ${(props) => props.theme.color.activeNav};
            border-bottom: ${(props) => props.theme.border.thickness} solid
                ${(props) => props.theme.color.activeNav};
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
                        <li
                            key={items.name}
                            className={
                                router.pathname.split("/").includes(items.name)
                                    ? "ul-li--active"
                                    : ""
                            }
                        >
                            <Link href={items.href ? items.href : ""}>
                                {items.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Nav>
        </ThemeProvider>
    );
}
