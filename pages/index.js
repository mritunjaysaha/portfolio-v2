/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Navbar } from "../src/components/navbar.jsx";
import { SocialTabs } from "../src/components/socialTabs";
import { ProjectSection } from "../src/section/projectSection";
import { FooterSection } from "../src/section/footerSection";
import { IntroSection } from "../src/section/introSection";
import { mediaQueries, style } from "../styles/style";

export default function Home() {
    return (
        <>
            <section
                // grid layout of entire page
                css={css`
                    display: grid;
                    padding: 0 ${style.paddingSide.mobile};

                    ${mediaQueries[3]} {
                        grid-template-columns: repeat(12, minmax(0, 1fr));
                        column-gap: 1rem;
                        padding: 0 20rem;
                    }
                `}
            >
                <Navbar />
                <IntroSection />
                <ProjectSection />
                <FooterSection />
            </section>
            <SocialTabs />
        </>
    );
}
