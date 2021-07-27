/** JsxImportSour @emotion/react */
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { theme } from "../../theme.config";

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
            margin: 0 1rem;
            padding: 1rem 2rem;

            text-align: center;

            border-radius: ${(props) => props.theme.border.radius};
            border-bottom: 0.4rem solid transparent;

            transition: 0.3s ease-in;

            &:hover {
                background-color: ${(props) => props.theme.color.blue};
                color: ${(props) => props.theme.color.blueText};
            }

            .ul-li--active {
                border-bottom: 0.4rem solid
                    ${(props) => props.theme.color.blueText};
            }
        }
    }
`;

export function Navbar() {
    return (
        <ThemeProvider theme={theme}>
            <Nav>
                <Logo>
                    <Link href="/">Mritunjay</Link>
                </Logo>
                <ul>
                    <li>
                        <Link href="/">home</Link>
                    </li>
                    <li>
                        <Link href="/blogs">blogs</Link>
                    </li>
                    <li>
                        <Link href="/projects">projects</Link>
                    </li>
                </ul>
            </Nav>
        </ThemeProvider>
    );
}
