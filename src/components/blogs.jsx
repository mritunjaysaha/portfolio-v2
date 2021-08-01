/**jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import { theme, mediaQueries, bp } from "../../theme.config";
import { useBlogData } from "../customHooks/blog";
import { Anchor } from "../atoms/anchor";

const StyledContainer = styled.section`
    padding-top: 6rem;

    h3 {
        font-size: ${(props) => props.theme.fontSize.fs24};
        text-transform: uppercase;
    }
`;

const BlogAnchor = ({ href, reading_time_minutes, title }) => (
    <p key={href}>
        <Anchor href={href}>{title}</Anchor>
        &nbsp;&nbsp;
        <span>{reading_time_minutes} mins read</span>
    </p>
);

const StyledArticle = styled.article`
    display: flex;
    justify-content: space-between;
    padding-left: 4rem;

    p {
        padding: 1.5rem 0;
        overflow: hidden;
        color: ${(props) => props.theme.color.white};
        font-size: ${(props) => props.theme.fontSize.fs20};

        span {
            border-radius: 2.5px;
            background-color: ${(props) =>
                props.theme.backgroundColor.secondaryBlue};
            padding: 0.4rem 1rem;

            color: ${(props) => props.theme.color.blue};
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
                <h3>Popular Articles</h3>
                <br />
                <br />

                <StyledArticle>
                    <div>
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
                    </div>
                    <Link href="/blogs">Check out more</Link>
                </StyledArticle>
            </StyledContainer>
        </ThemeProvider>
    );
}
