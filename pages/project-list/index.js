import { projects } from "../../src/projectData/data";

export default function ProjectsList() {
    return (
        <ol>
            {projects.map(({ name, demo, repo }) => (
                <li key={name}>
                    <h3>{name}</h3>
                    <a href={demo}>{demo}</a>
                    <a href={repo}>{repo}</a>
                </li>
            ))}
        </ol>
    );
}
