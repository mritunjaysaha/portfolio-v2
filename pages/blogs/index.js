import { useState, useEffect } from "react";

export default function Blogs() {
    const [reactionCount, setReactionCount] = useState([]);
    const [title, setTitle] = useState([]);
    const URL = "https://dev.to/api/articles?username=mritunjaysaha";
    useEffect(() => {
        fetch(URL)
            .then((res) => res.json)
            .then((blogs) => {
                for (blog of blogs) {
                    console.log(blogs);
                    setTitle.push(blogs.title);
                    setReactionCount.push(blogs.positive_reactions_count);
                }
            });

        console.log({ title }, { reactionCount });
    }, []);

    return (
        <>
            {title}
            {reactionCount}
        </>
    );
}
