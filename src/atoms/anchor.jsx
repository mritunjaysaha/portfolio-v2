/**
 *
 * @param {href} href link
 * @returns
 */
export const Anchor = ({ children, href }) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={href ? href : ""}>
            {children}
        </a>
    );
};

/**
 *
 * @param {href} url
 * @param {reading_time_minutes} read time
 * @param {title} title of the blog
 * @returns
 */
export const BlogAnchor = ({ href, reading_time_minutes, title }) => (
    <p key={href}>
        <Anchor href={href}>{title}</Anchor>
        &nbsp;&nbsp;
        <span>{reading_time_minutes} mins read</span>
    </p>
);
