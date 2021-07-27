export const Anchor = ({ children, href }) => (
    <a target="_blank" rel="noopener noreferrer" href={href ? href : ""}>
        {children}
    </a>
);
