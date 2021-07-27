/**@jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDev,
    faGithubSquare,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Anchor } from "../atoms/anchor";
import { theme } from "../../theme.config";
const StyledAside = styled.aside`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
    padding: 0 1rem;
`;

const Li = styled.li`
    margin: 1rem;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 4rem;
    color: ${(props) => props.theme.color.primary};
    height: 3rem;
`;

export function Aside() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <StyledAside>
                    <ul>
                        <Li>
                            <Anchor href="">
                                <StyledFontAwesomeIcon icon={faDev} />
                            </Anchor>
                        </Li>
                        <Li>
                            <Anchor href="">
                                <StyledFontAwesomeIcon icon={faGithubSquare} />
                            </Anchor>
                        </Li>
                        <Li>
                            <Anchor href="">
                                <StyledFontAwesomeIcon icon={faTwitterSquare} />
                            </Anchor>
                        </Li>
                    </ul>
                </StyledAside>
            </ThemeProvider>
        </>
    );
}
