import style from '../styles/Post.module.css';
import Link from 'next/link';
import {useRouter} from "next/router";
import axios from "axios";
import { IPost } from '../typescript/posts';
import { AiFillDelete } from 'react-icons/ai';
type Props = {
    post: IPost
}

function Post({ post }: Props) {
    const router = useRouter()

    const deletePost = (postId) => {
        axios.delete(`https://simple-blog-api.crew.red/posts/${postId}`)
            .then(resp => router.push('/'))
            .catch(e => console.log(`Error with newPost: ${e}`))
    }
    return (
        <div className={style.content}>
            <Link href={`/posts/${post.id}`}>
                <span className={style.titlePost}>{post.title}</span></Link>
            <hr className={style.hr} />
            <p className={style.bodyPost}>{post.body}</p>
            <button className={style.button} onClick={() => deletePost(post.id)}><AiFillDelete/></button>
        </div>
    )
}

export default Post
