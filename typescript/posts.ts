export interface INewPost {
    body: string;
    title: string;
}

export interface IPostWithComments {
    id: number | null
    title: string | null
    body: string | null
    comments: {
        id: number | null
        postId: number | null
        body: string | null
    }[]
}