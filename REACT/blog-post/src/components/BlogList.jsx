import React from 'react';
import BlogPost from "./BlogPost"
import postData from "../Posts"
import center from "./home-bg.jpg"

function BlogList(){
    const BlogComponents = postData.map(post => 
        <BlogPost
        
        post = {post}
        />)

    return(
        <div   >
            <img className="img-center" src={center} alt="center" />
            {/* <BlogPost /> */}
            {BlogComponents }
        </div>
    )
}

export default BlogList