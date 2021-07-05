import axios from "axios";
import  PostWithComments  from "../../components/PostWithComments";
import MainLayout from "../../components/layouts/MainLayout";
import Post from '../../components/Post';
import { IPostWithComments } from "../../typescript/posts";

type postIdProps = {
    post: IPostWithComments
}

export default function postId({ post }: postIdProps) {
    return (
        <MainLayout>
            <h1 style={{marginLeft: '20px'}}>{post.title}</h1>
            <Post post={post} />
            <PostWithComments post={post}/>
        </MainLayout>
    )
}

export async function getStaticPaths() {

    const listOfPosts: IPostWithComments[] = await axios.get('https://simple-blog-api.crew.red/posts')
        .then((res) => res.data);

    const paths = listOfPosts.map((post) => ({
        params: { postId: post.id.toString() },
    }))

    return {
        paths: paths,
        fallback: 'blocking'
    };
}

export async function getStaticProps({ params }) {
    const post: IPostWithComments = await axios.get(`https://simple-blog-api.crew.red/posts/${params.postId}?_embed=comments`)
        .then((res) => res.data);
    return {
        props: { post },
        revalidate: 1,
    }
}