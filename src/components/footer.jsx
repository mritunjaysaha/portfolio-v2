import styled from "@emotion/styled";
import { StyledFontAwesomeIcon } from "./StyledComponents/atoms";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../theme.config";
import { ThemeProvider } from "@emotion/react";

const StyledFooter = styled.footer`
    position: relative;
    bottom: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    padding: 2rem 0;
    span {
        padding-left: 1rem;
    }
`;

export function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <StyledFooter>
                <StyledFontAwesomeIcon icon={faEnvelope} width="1.5rem" />{" "}
                <span>mritunjaysaha@outlook.com</span>
            </StyledFooter>
        </ThemeProvider>
    );
}
