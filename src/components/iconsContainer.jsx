/**jsxImportSource @emotion/react */
import { css, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCss3Alt,
    faHtml5,
    faSass,
    faReact,
    faJs,
    faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { SiNextDotJs, SiMongodb } from "react-icons/si";
import { mediaQueries, theme, bp } from "../../theme.config";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${(props) => props.theme.color.primary};
    font-size: 12rem;
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

    .si-icon {
        color: ${(props) => props.theme.color.primary};
        font-size: 12rem;
        width: auto;
        height: 12rem;
    }
`;

const StyledDiv = styled.div`
    display: none;

    ${mediaQueries(bp.desktop)} {
        display: flex;
    }

    width: 200rem;
    .mover-1 {
        animation: moveSlideshow 30s linear infinite alternate-reverse;
        width: 160rem;
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
                        <SiMongodb className="si-icon" />
                    </li>
                    <li>
                        <StyledFontAwesomeIcon icon={faJs} />
                    </li>
                    <li>
                        <StyledFontAwesomeIcon icon={faReact} />
                    </li>
                    <li>
                        <StyledFontAwesomeIcon icon={faNodeJs} />
                    </li>
                    <li>
                        <SiNextDotJs className="si-icon" />
                    </li>
                </StyledUl>
            </StyledDiv>
        </ThemeProvider>
    );
}
