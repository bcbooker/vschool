import React from 'react';
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import BlogList from "./BlogList"
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return(
        <div>
            <Header  />
            <BlogList  style={{alignItems: "center"}} />
            <h1>Test JS From App</h1>
            <Footer />
        </div>
    )
}

export default App