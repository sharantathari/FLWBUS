import axios from 'axios';
import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

    const get_blogs = async () => {
        const r = await axios.get('https://blogs-cc.coffeecodes.in/v1/blogs/getAll/edodwaja');
        setBlogs(r.data);
    }

    useEffect(() => {
        get_blogs();
    }, []);

    return (
        <div className="row justify-content-center CCEN">
        {
          blogs.length > 0 ? blogs.map((blog, index) => {
            return <BlogCard key={index} props={blog} />
          }) : <h1 className="text-center">No blogs yet</h1>
        }
      </div>
      

    )
}