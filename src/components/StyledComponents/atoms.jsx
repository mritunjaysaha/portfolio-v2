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
    font-size: ${(props) => (props.width ? props.width : "3rem")};
`;

export const StyledArticleBlog = styled.article`
    display: flex;
    flex-direction: column;

    p {
        padding: 1.5rem 0;
        overflow: hidden;
        color: ${(props) => props.theme.color.white};
        font-size: ${(props) => props.theme.fontSize.fs24};

        &:first-of-type {
            padding-top: 0;
        }

        span {
            border-radius: 2.5px;
            background-color: ${(props) =>
                props.theme.backgroundColor.secondaryBlue};
            padding: 0.4rem 1rem;
            font-size: ${(props) => props.theme.fontSize.fs14};

            color: ${(props) => props.theme.color.black};
        }
    }
`;

export const StyledH3 = styled.h3`
    font-size: ${(props) => props.theme.fontSize.fs40};
    padding: 4rem 0;
    text-align: center;
`;
