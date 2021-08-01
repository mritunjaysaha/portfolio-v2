/**jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import { theme, mediaQueries, bp } from "../../theme.config";
import { useBlogData } from "../customHooks/blog";
import { Anchor } from "../atoms/anchor";

const StyledContainer = styled.section`
    section {
        display: flex;
        justify-content: space-between;
        padding: 0 4rem;
    }

    h3 {
        font-size: ${(props) => props.theme.fontSize.fs24};
        text-transform: uppercase;
        text-align: center;
    }

    .link-div {
        position: relative;
        width: 20rem;
        aspect-ratio: 1/1.1;

        display: grid;

        place-items: center;

        border-radius: ${(props) => props.theme.border.radius};

        background-color: ${(props) =>
            props.theme.backgroundColor.secondaryBlue};

        color: ${(props) => props.theme.color.black};

        font-size: ${(props) => props.theme.fontSize.fs20};

        cursor: pointer;
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

    p {
        padding: 1.5rem 0;
        overflow: hidden;
        color: ${(props) => props.theme.color.white};
        font-size: ${(props) => props.theme.fontSize.fs28};

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

export function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useBlogData()
        .then((data) => setBlogs(data))
        .catch((err) => console.log(err));

    return (
        <ThemeProvider theme={theme}>
            <StyledContainer>
                <section>
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
                    </StyledArticle>

                    <Link href="/blogs" passHref>
                        <div className="link-div">Check out more</div>
                    </Link>
                </section>
            </StyledContainer>
        </ThemeProvider>
    );
}
