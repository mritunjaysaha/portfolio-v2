/**@jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import {
    faDev,
    faGithubSquare,
    faTwitterSquare,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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
                    {/* <CircularLoading>
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
                    </CircularLoading> */}

                    <CircularLoading
                        icon={faDev}
                        href="https://dev.to/mritunjaysaha"
                    />
                    <CircularLoading
                        icon={faGithubSquare}
                        href="https://github.com/mritunjaysaha"
                    />
                    <CircularLoading
                        icon={faTwitterSquare}
                        href="https://twitter.com/mritunjay__saha"
                    />
                    <CircularLoading
                        icon={faLinkedin}
                        href="https://linkedin.com/in/mritunjaysaha"
                    />
                </StyledAside>
            </ThemeProvider>
        </>
    );
}
