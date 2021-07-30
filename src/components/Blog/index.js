import axios from "axios";

export const blogData = async () => {
    const res = await axios({
        url: "https://dev.to/api/articles/me",
        method: "get",
        auth: {
            "api-key": "Y6cxGLx4tMe3vm1fta5cjDxC",
        },
    });

    console.log({ res });
};
