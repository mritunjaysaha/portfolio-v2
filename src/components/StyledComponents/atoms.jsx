import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mediaQueries, bp } from "../../../theme.config";
/**
 * @icon FontAwesomeIcon name
 * @width default 3rem
 */
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    /* font-size: 4rem; */
    color: ${(props) => props.theme.color.primary};
    width: ${(props) => (props.width ? props.width : "3rem")};
    font-size: ${(props) => (props.width ? props.width : "3rem")};
`;

export const StyledH3 = styled.h3`
    font-size: ${(props) => props.theme.fontSize.fs40};
    padding: 4rem 0;
    text-align: center;
`;

export const StyledIcon = styled(StyledFontAwesomeIcon)`
    color: ${(props) => props.theme.color.black};
`;
