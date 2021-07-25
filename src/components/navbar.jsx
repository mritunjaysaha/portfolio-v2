import styled from "@emotion/styled";

import Link from "next/link";
const Logo = () => <div>Mritunjay</div>;

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
        }
    }
`;

export function Navbar() {
    return (
        <>
            <Nav>
                <Logo />
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
        </>
    );
}
