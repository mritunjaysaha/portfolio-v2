import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDev,
    faGithubSquare,
    faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const listData = [
    { name: "github", href: "https://github", icon: `${faDev}` },
    { name: "twitter", href: "https://twitter", icon: `${faDev}` },
    { name: "dev.to", href: "https://dev.to", icon: `${faDev}` },
];

const size = "1x";

const Li = styled.li``;

const StyledAside = styled.aside`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;

    background-color: yellow;
`;

export function Aside() {
    return (
        <>
            <StyledAside>
                <ul>
                    <Li>
                        <a href="">
                            <FontAwesomeIcon icon={faDev} size={size} />
                        </a>
                    </Li>
                    <Li>
                        <a href="">
                            <FontAwesomeIcon
                                icon={faGithubSquare}
                                size={size}
                            />
                        </a>
                    </Li>
                    <Li>
                        <a href="">
                            <FontAwesomeIcon
                                icon={faTwitterSquare}
                                size={size}
                            />
                        </a>
                    </Li>
                </ul>
            </StyledAside>
        </>
    );
}
