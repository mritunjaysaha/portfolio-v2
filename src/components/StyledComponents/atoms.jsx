import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @icon FontAwesomeIcon name
 * @width default 3rem
 */
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    /* font-size: 4rem; */
    color: ${(props) => props.theme.color.primary};
    width: ${(props) => (props.width ? props.width : "3rem")};
`;
