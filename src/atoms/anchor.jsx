/**
 *
 * @param {href} href link
 * @returns
 */
export const Anchor = ({ children, href }) => {
    console.log({ href });
    return (
        <a target="_blank" rel="noopener noreferrer" href={href ? href : ""}>
            {children}
        </a>
    );
};
