import React from 'react';

function BlogPost(props){
    console.log(props)
    return(
        <div className="row"  style={{color: "red", display: "flex", boxizing: "border-box", marginLeft: "auto !important"}}>
            <div className="col-lg-8 col-md-10 mx-auto">
                
            <h5>{props.post.title}</h5>
            <p>{props.post.date}</p>
            <br></br>
            <p>{props.post.author}</p>
            <br></br>
            </div>

           
        </div>
    )
}

export default BlogPost