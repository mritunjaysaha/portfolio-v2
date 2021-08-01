/**@jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { StyledFontAwesomeIcon } from "./StyledComponents/atoms";
import {
    faDev,
    faGithubSquare,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Anchor } from "../atoms/anchor";
import { theme, mediaQueries, bp } from "../../theme.config";
import { CircularLoading } from "./circularLoading";

const StyledAside = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    display: none;

    ${mediaQueries(bp.desktop)} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 100vh;
        padding: 0 1rem;
    }
`;

export function Aside() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <StyledAside>
                    <CircularLoading>
                        <Anchor href="https://dev.to/mritunjaysaha/">
                            <StyledFontAwesomeIcon icon={faDev} />
                        </Anchor>
                    </CircularLoading>
                    <CircularLoading>
                        <Anchor href="https://github.com/mritunjaysaha">
                            <StyledFontAwesomeIcon icon={faGithubSquare} />
                        </Anchor>
                    </CircularLoading>
                    <CircularLoading>
                        <Anchor href="https://twitter.com/MritunjaySaha_">
                            <StyledFontAwesomeIcon icon={faTwitterSquare} />
                        </Anchor>
                    </CircularLoading>
                </StyledAside>
            </ThemeProvider>
        </>
    );
}
