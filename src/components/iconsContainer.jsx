/**JsxImportSource @emotion/react */
import { ThemeProvider, keyframes, css } from "@emotion/react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faHtml5,
    faSass,
    faReact,
    faJs,
} from "@fortawesome/free-brands-svg-icons";
import { theme } from "../../theme.config";

const sliding = keyframes`100%{transform: translateX(-450px)}`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${(props) => props.theme.color.primary};
    font-size: 12rem;
    color: ${(props) => props.theme.color.blue};
    width: auto;
    height: 12rem;
`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 0 auto;
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);

    li {
        transform: translate3d(0, 0, 0);
    }
`;

const StyledDiv = styled.div`
    display: flex;
    width: 1600px;

    .mover-1 {
        animation: moveSlideshow 12s linear infinite;
        width: 2526px;
    }

    .mover-2 {
        animation: moveSlideshow 12s linear infinite;

        width: 2226px;
    }

    .mover-1,
    .mover-2 {
    }

    @keyframes moveSlideshow {
        100% {
            transform: translateX(-66.6666%);
        }
    }
`;
export function IconsContainer() {
    return (
        <ThemeProvider theme={theme}>
            <StyledDiv>
                <StyledUl className="mover-1">
                    <li>
                        <StyledFontAwesomeIcon icon={faCss3Alt} />
                    </li>
                    <li>
                        <StyledFontAwesomeIcon icon={faHtml5} />
                    </li>
                    <li>
                        <StyledFontAwesomeIcon icon={faSass} />
                    </li>
                    <li>
                        <StyledFontAwesomeIcon icon={faJs} />
                    </li>
                    <li>
                        <StyledFontAwesomeIcon icon={faReact} />
                    </li>
                </StyledUl>
                <StyledUl className="mover-2">
                    <li>
                        <StyledFontAwesomeIcon icon={faCss3Alt} />
                    </li>
                    <li>
                        <StyledFontAwesomeIcon icon={faHtml5} />
                    </li>
                    <li>
                        <StyledFontAwesomeIcon icon={faSass} />
                    </li>
                    <li>
                        <StyledFontAwesomeIcon icon={faJs} />
                    </li>
                    <li>
                        <StyledFontAwesomeIcon icon={faReact} />
                    </li>
                </StyledUl>
            </StyledDiv>
        </ThemeProvider>
    );
}
