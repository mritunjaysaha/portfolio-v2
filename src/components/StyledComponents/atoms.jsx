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

export const StyledArticleBlog = styled.article`
    display: flex;
    flex-direction: column;

    p {
        padding-bottom: 2rem;
        overflow: hidden;
        color: ${(props) => props.theme.color.white};
        font-size: ${(props) => props.theme.fontSize.fs16};

        display: flex;
        flex-direction: column;

        ${mediaQueries(bp.desktop)} {
            flex-direction: row;
            font-size: ${(props) => props.theme.fontSize.fs24};
            padding: 2rem 0;
        }
        &:first-of-type {
            padding-top: 0;
        }

        span {
            width: max-content;

            border-radius: 2.5px;
            background-color: ${(props) =>
                props.theme.backgroundColor.secondaryBlue};
            padding: 0.4rem 1rem;
            font-size: ${(props) => props.theme.fontSize.fs14};

            color: ${(props) => props.theme.color.black};

            ${mediaQueries(bp.desktop)} {
                margin-left: 1rem;
            }
        }
    }
`;

export const StyledH3 = styled.h3`
    font-size: ${(props) => props.theme.fontSize.fs40};
    padding: 4rem 0;
    text-align: center;
`;

export const StyledIcon = styled(StyledFontAwesomeIcon)`
    color: ${(props) => props.theme.color.black};
`;
