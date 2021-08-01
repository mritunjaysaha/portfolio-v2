/**jsxImportSource @emotion/react */
import { ThemeProvider, css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";
import { theme, mediaQueries, bp } from "../../theme.config";
import { useBlogData } from "../customHooks/blog";
import { BlogAnchor } from "../atoms/anchor";
import { StyledArticleBlog } from "./StyledComponents/atoms";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledArrowIcon = styled(FontAwesomeIcon)`
    width: ${(props) => props.theme.fontSize.fs18};
    font-size: ${(props) => props.theme.fontSize.fs18};

    ${mediaQueries(bp.desktop)} {
        width: ${(props) => props.theme.fontSize.fs40};
        font-size: ${(props) => props.theme.fontSize.fs40};
    }
`;

const StyledContainer = styled.section`
    section {
        display: flex;
        flex-direction: column;

        ${mediaQueries(bp.desktop)} {
            flex-direction: row;
            justify-content: space-between;
            padding: 0 4rem 4rem;
            width: 80vw;
        }
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

        span {
            margin-right: 1rem;
        }

        ${mediaQueries(bp.tablet)} {
            width: max-content;
            padding: 1rem 2rem;
            margin: 0 auto;
        }

        ${mediaQueries(bp.desktop)} {
            width: 20rem;
            margin-left: 12rem;
            aspect-ratio: 1/1;
            flex-direction: column;
        }
    }
`;

export function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useBlogData()
        .then((data) => setBlogs(data))
        .catch((err) => console.log(err));

    return (
        <ThemeProvider theme={theme}>
            <StyledContainer>
                <section>
                    <StyledArticleBlog>
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
                    </StyledArticleBlog>

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
                </section>
            </StyledContainer>
        </ThemeProvider>
    );
}
