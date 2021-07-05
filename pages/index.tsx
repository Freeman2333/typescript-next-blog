import styles from '../styles/Home.module.css'
import MainLayout from '../components/layouts/MainLayout'
import axios from 'axios';
import Post from '../components/Post';
import { IPost } from '../typescript/posts';

type Props = {
  posts: IPost[]
}

export default function Home({ posts }: Props) {

  return (
    <MainLayout>
      <h1 className={styles.h1}>List of posts:</h1>
      <ul className={styles.list}>
        {posts.map((post) =>
          <li className={styles.post} key={`post_${post.id}`}>
            <Post post={post} />
          </li>
        )}
      </ul>
    </MainLayout>
  )
}

export async function getServerSideProps() {

  const posts: IPost[] = await axios.get('https://simple-blog-api.crew.red/posts')
    .then((res) => res.data);

  return {
    props: { posts},
  }
}

