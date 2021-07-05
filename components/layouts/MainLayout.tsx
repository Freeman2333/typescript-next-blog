import Link from 'next/link';
import Head from "next/head";
import style from '../../styles/MainLayout.module.css';
import { MdNoteAdd } from 'react-icons/md';
function MainLayout({ children }) {

    return (
        <>
            <Head>
                <title>DevelopsToday - Blog</title>
                <meta name={'description'}
                      content={`DevelopsToday. Simple Blog with Next.js, React, Redux, TypeScript`}
                />
                <meta name={'robots'} content={'index, follow'}/>
                <meta name={'keywords'} content={'DevelopsToday, React, Next.js'}/>
                <meta name={'viewport'} content={'width-device-width, initial-scale=1'}/>
            </Head>
            <nav className={style.navigation}>
                <div className={style.navigation__container}>
                    <Link href='/' ><a className={style.link}>Main Page</a></Link>
                    <Link href='/posts/new'><a className={style.link}>Create post <MdNoteAdd className={style.icon}/></a></Link>
                </div>
            </nav>
            <main className={style.main}>
                <div className={style.main__container}>
                    {children}
                </div>
            </main>
        </>
    )
}

export default MainLayout
