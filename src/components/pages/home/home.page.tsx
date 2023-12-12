import React from "react";
import { useGetPosts } from "../../../hooks/posts/useGetPosts";
import PostsGrid from "../../posts/posts-grid/posts-grid.component";

const Home : React.FC = ()=>{
    const posts = useGetPosts();

    return(
        <div className="home"><PostsGrid posts={posts || []}/></div>
    )
}
export default Home;