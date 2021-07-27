/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDev,
    faGithubSquare,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Anchor } from "../atoms/anchor";

const StyledAside = styled.aside`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
    background-color: blue;
    padding: 0 1rem;
`;

const Li = styled.li`
    margin: 1rem;
`;

export function Aside() {
    return (
        <>
            <StyledAside>
                <ul>
                    <Li>
                        <Anchor href="">
                            <FontAwesomeIcon
                                icon={faDev}
                                css={css`
                                    font-size: 4rem;
                                    color: black;
                                    height: 3rem;
                                `}
                            />
                        </Anchor>
                    </Li>
                    <Li>
                        <Anchor href="">
                            <FontAwesomeIcon icon={faGithubSquare} size="lg" />
                        </Anchor>
                    </Li>
                    <Li>
                        <Anchor href="">
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </Anchor>
                    </Li>
                </ul>
            </StyledAside>
        </>
    );
}
