import { useState, useEffect } from "react";
import axios from "axios";

export async function useBlogData() {
    const [blogData, setBlogData] = useState([]);

    async function fetchData() {
        await axios("https://dev.to/api/articles?username=mritunjaysaha")
            .then((blogs) => {
                setBlogData(blogs.data);
            })
            .catch((err) => console.log(err.message));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return blogData;
}
