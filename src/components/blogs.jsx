/**jsxImportSource @emotion/react */
import { ThemeProvider, css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { theme, mediaQueries, bp } from "../../theme.config";
import { BlogAnchor } from "../atoms/anchor";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledBlogList = styled.ul`
    display: flex;
    flex-direction: column;

    li {
        padding-bottom: 2rem;
        overflow: hidden;

        color: ${(props) => props.theme.color.secondary};
        font-size: ${(props) => props.theme.fontSize.fs16};
        font-weight: bold;

        display: flex;
        flex-direction: column;

        ${mediaQueries(bp.tablet)} {
            flex-direction: row;
            font-size: ${(props) => props.theme.fontSize.fs24};
            padding: 2rem 0;
        }

        a:hover {
            text-decoration: underline;
        }
        /* reading time in minutes */
        span {
            width: max-content;

            display: flex;
            align-items: center;

            border-radius: 2.5px;
            background-color: ${(props) =>
                props.theme.backgroundColor.secondaryBlue};
            padding: 0.4rem 1rem;
            font-size: ${(props) => props.theme.fontSize.fs14};

            color: ${(props) => props.theme.color.black};

            ${mediaQueries(bp.tablet)} {
                margin-left: 1rem;
            }
        }
    }
`;

const StyledArrowIcon = styled(FontAwesomeIcon)`
    width: ${(props) => props.theme.fontSize.fs18};
    font-size: ${(props) => props.theme.fontSize.fs18};

    ${mediaQueries(bp.desktopLarge)} {
        width: ${(props) => props.theme.fontSize.fs40};
        font-size: ${(props) => props.theme.fontSize.fs40};
    }
`;

const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;

    ${mediaQueries(bp.desktopLarge)} {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 4rem 4rem;
        width: 100%;
    }

    h3 {
        font-size: ${(props) => props.theme.fontSize.fs24};
        text-transform: uppercase;
        text-align: center;
    }

    .link-div {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: ${(props) => props.theme.border.radius};
        background-color: ${(props) =>
            props.theme.backgroundColor.secondaryBlue};
        color: ${(props) => props.theme.color.black};
        font-size: ${(props) => props.theme.fontSize.fs20};
        cursor: pointer;
        width: 100%;

        padding: 1rem 0;

        transition: all 0.2s ease-out;

        &:hover {
            box-shadow: 12px 9px 19px 0px rgba(150, 150, 151, 0.25);
            -webkit-box-shadow: 12px 9px 19px 0px rgba(150, 150, 151, 0.25);
            -moz-box-shadow: 12px 9px 19px 0px rgba(150, 150, 151, 0.25);
        }

        span {
            display: flex;
            align-items: center;
            margin-right: 1rem;
        }

        ${mediaQueries(bp.tablet)} {
            width: max-content;
            padding: 1rem 2rem;
            margin: 0 auto;
        }

        ${mediaQueries(bp.desktopLarge)} {
            width: 20rem;
            margin-left: 12rem;
            aspect-ratio: 1/1;
            flex-direction: column;

            padding: 2rem;
        }
    }
`;

export function Blogs({ blogs }) {
    return (
        <ThemeProvider theme={theme}>
            <StyledContainer>
                <StyledBlogList>
                    {blogs
                        ? blogs.map((blog, count = 0) => {
                              if (count < 3) {
                                  return (
                                      <BlogAnchor
                                          key={blog.url}
                                          href={blog.url}
                                          title={blog.title}
                                          reading_time_minutes={
                                              blog.reading_time_minutes
                                          }
                                      />
                                  );
                              }
                          })
                        : ""}
                </StyledBlogList>

                <Link href="/blogs" passHref>
                    <div className="link-div">
                        <span>
                            <StyledArrowIcon
                                width="1.8rem"
                                icon={faArrowAltCircleRight}
                            />
                        </span>
                        Check out more
                    </div>
                </Link>
            </StyledContainer>
        </ThemeProvider>
    );
}
