import React from 'react'
import styles from './BlogCard.module.css'

const BlogCard = (props) => {
  return (
    <div className={styles.card_con}>
        <h1 className={styles.title}>{props.title}</h1>
        <p>{props.body}</p>
    
         <h3 className={styles.created}>Created By :{props.createdBy}</h3>
    </div>
  )
}

export default BlogCard