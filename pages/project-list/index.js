import { projects } from "../../src/projectData/data";

export default function ProjectsList({ selectedProjects }) {
    return (
        <>
            <Head>
                <title>Mritunjay | Project list</title>
                <meta name="description" content="Mritunjay Saha" />
                <link rel="icon" href="/favicon.ico" />

                <meta property="og:title" content="Mritunjay Saha" />
                <meta
                    property="og:description"
                    content="Frontend Developer | React.js | TypeScript"
                />
                <meta
                    property="og:image"
                    content="https://raw.githubusercontent.com/mritunjaysaha/portfolio-v2/main/public/portfolio_og.png"
                />
                <meta
                    property="og:url"
                    content="https://mritunjaysaha.netlify.app"
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="Mritunjay" />
            </Head>
            <ol>
                {selectedProjects.map(({ name, demo, repo }) => (
                    <li key={name}>
                        <h3>{name}</h3>
                        <a href={demo}>{demo}</a>
                        <br />
                        <a href={repo}>{repo}</a>

                        <br />
                        <br />
                    </li>
                ))}
            </ol>
        </>
    );
}

export async function getStaticProps() {
    const selectedProjects = projects;

    return {
        props: { selectedProjects },
    };
}
