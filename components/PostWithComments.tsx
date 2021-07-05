import  {useState} from 'react';
import {IPostWithComments} from "../typescript/posts";
import axios from "axios";
import {useRouter} from "next/router";
import style from './../styles/PostWithComments.module.css';
interface PostItemProps {
    post: IPostWithComments
}

const PostWithComments = ({post}:PostItemProps) => {
    const [posts, setPosts] = useState<IPostWithComments>(post)
    const {query} = useRouter()
    const postId = query.postId
    const [commentBody, setcommentBody] = useState('')
    
    const addComment = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('https://simple-blog-api.crew.red/comments', {
                postId: Number(postId),
                body: commentBody
            })
            setPosts({...posts, comments: [...posts.comments, response.data]})
            setcommentBody('')
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <div className={style.commentsBlock}>
            <h2 style={{marginTop: 20}}>Comments:</h2>

            <form className={style.form}>
                <div><textarea value={commentBody}  className={style.textarea} onChange={e=>setcommentBody(e.target.value)} required placeholder='Comment...' /></div>
                <button  className={style.btn} onClick={addComment}>Send</button>
            </form>
            <div className={style.commentsContainer}>
                {posts.comments.map(comment=>{
                    return <div className={style.commentItem} key={comment.id}>
                        {comment.body}
                    </div>
                })}
            </div>
        </div>
        
    );
};

export default PostWithComments;