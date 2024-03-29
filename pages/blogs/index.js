import { ThemeProvider } from "@emotion/react";
import Head from "next/head";
import { theme, mediaQueries, bp } from "../../theme.config";
import { BlogAnchor } from "../../src/atoms/anchor";
import { StyledBlogList } from "../../src/components/blogs";

import styled from "@emotion/styled";

const StyledSection = styled.section`
    font-family: "Readex Pro", sans-serif !important;
    ${mediaQueries(bp.desktop)} {
        padding: 4rem;
        min-height: 100vh;
    }
`;

const StyledH3 = styled.h3`
    font-family: "Poppins", sans-serif !important;
    font-size: ${(props) => props.theme.fontSize.fs40};
    padding-bottom: 4rem;
`;

export default function Blogs({ blogs }) {
    return (
        <ThemeProvider theme={theme}>
            <StyledSection>
                <StyledH3>Latest Articles</StyledH3>
                <StyledBlogList>
                    {blogs.map((blog) => (
                        <BlogAnchor
                            key={blog.url}
                            href={blog.url}
                            reading_time_minutes={blog.reading_time_minutes}
                            title={blog.title}
                        />
                    ))}
                </StyledBlogList>
            </StyledSection>
        </ThemeProvider>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        "https://dev.to/api/articles?username=mritunjaysaha"
    );
    const blogs = await res.json();

    if (!blogs) {
        return {
            notFound: true,
        };
    }

    return {
        props: { blogs },
    };
}
