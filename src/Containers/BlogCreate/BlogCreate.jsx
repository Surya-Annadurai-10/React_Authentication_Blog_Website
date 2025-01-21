import React, { useContext, useRef, useState } from 'react'
import styles from "./BlogCreate.module.css"
import { UserContext } from '../../App';
import { firestore } from '../firebase';
import { collection , addDoc  } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const BlogCreate = () => {
  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const ctx = useContext(UserContext);
  const navigate = useNavigate();

 const blogCollection = collection (firestore , "blogPosts")

  const onFromSubmit = async (e) =>{
     e.preventDefault();
     const blogPost = {
      title : titleRef.current.value,
      body : bodyRef.current.value,
      createdBy : ctx.userDetails.name,
     }
   console.log(blogPost);
   ctx.setLoadBlog(!ctx.loadBlog);
   try {
     await addDoc(blogCollection , blogPost)
     navigate("/home");
     alert("blogPost Saved")
      
   } catch (error) {
     console.log(error);
     
   }
   
  }
  return (
   <>
    <div className={styles.con}>
    <form className={styles.form} onSubmit={onFromSubmit}>
        <h2>Start writing the Blog</h2> 
        <div className={styles.titleCon}>
          <label htmlFor="title">Title</label>
          <input ref={titleRef} className={styles.titleInput} placeholder='Enter Title' id='title' name='title' type="text" />
        </div> 
        <div  className={styles.bodyCon}>
          <label htmlFor="body">Body</label>
          <textarea ref={bodyRef}  className={styles.bodyArea} placeholder='write something...' name="body" id="body"></textarea>
        </div> 
       <button className={styles.createBtn}>Create</button>
    </form>
    </div>
   </>
  )
}

export default BlogCreate