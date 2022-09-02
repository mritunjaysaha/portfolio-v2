import styled from "@emotion/styled";
import { StyledFontAwesomeIcon } from "./StyledComponents/atoms";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../theme.config";
import { ThemeProvider } from "@emotion/react";
import Link from "next/link";

const StyledFooter = styled.footer`
    position: relative;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    padding: 2rem 0;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span {
        line-height: 2rem;
        padding-left: 1rem;
        font-size: 1.6rem;
    }
`;

export function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <StyledFooter>
                <Link href="mailto:mritunjaysaha@outlook.com?cc=mritunjaysaha93@gmail.com&subject=PORTFOLIO QUERY">
                    <a>
                        <StyledFontAwesomeIcon
                            icon={faEnvelope}
                            width="1.5rem"
                        />
                        <span>mritunjaysaha@outlook.com</span>
                    </a>
                </Link>
            </StyledFooter>
        </ThemeProvider>
    );
}
