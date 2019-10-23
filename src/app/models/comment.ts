
export class Comment {
    author: string;
    content: string;
    likes: number

    constructor(author: string, content: string, likes: number) {
        this.author = author
        this.content = content 
        this.likes = likes
    }
}