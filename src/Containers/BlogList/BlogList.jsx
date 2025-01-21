import React, { useContext, useEffect } from 'react'
import {collection, getDocs } from 'firebase/firestore'
import { firestore } from '../firebase'
import { UserContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import BlogCard from '../../Components/BlogCard/BlogCard'
import styles from './BlogList.module.css'

const BlogList = () => {
  const blogCollectionRef = collection(firestore , "blogPosts")
   const ctx = useContext(UserContext);
  

 useEffect(() =>{
  const fetchData = async () =>{
    try {
      const res = await getDocs(blogCollectionRef)
      console.log(res.docs);
       const blogData = res.docs.map((blog) =>{
      return {
        ...blog.data() ,
        id : blog.id
      }
       })

      ctx.setBlogPosts(blogData)
      console.log(blogData);
    } catch (error) {
      console.log("ERROR FETCHING DATA",error);
      
    }
  }

  fetchData();
 },[ctx.loadBlog])

  return (
    <>
    <div className={styles.blog_con}>
       {
        ctx.blogPosts.map((ele) =>{
          return <BlogCard key={ele.id} {...ele} />
        })
       }
      
    </div>
    </>
  )
}

export default BlogList