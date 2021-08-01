import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import Head from "next/head";
import { useBlogData } from "../../src/customHooks/blog";
import { theme, mediaQueries, bp } from "../../theme.config";
import { BlogAnchor } from "../../src/atoms/anchor";
import { StyledArticleBlog } from "../../src/components/StyledComponents/atoms";

import styled from "@emotion/styled";

const StyledSection = styled.section`
    padding: 6rem;
`;

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useBlogData()
        .then((data) => setBlogs(data))
        .catch((err) => console.log(err));

    return (
        <div>
            <Head>
                <title>Blogs</title>
                <meta name="description" content="Mritunjay Saha NERIST" />
            </Head>
            <ThemeProvider theme={theme}>
                <StyledSection>
                    <StyledArticleBlog>
                        {blogs.map((blog) => (
                            <BlogAnchor
                                key={blog.url}
                                href={blog.url}
                                reading_time_minutes={blog.reading_time_minutes}
                                title={blog.title}
                            />
                        ))}
                    </StyledArticleBlog>
                </StyledSection>
            </ThemeProvider>
        </div>
    );
}
