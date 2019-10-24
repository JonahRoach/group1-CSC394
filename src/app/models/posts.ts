//import {PostService} from '../services/post.service'
import {Comment } from '../models/comment'

export class Post
{
    userId:number;
    id:number;
    title:string;
    numLikes:number = 0;
    body:string;
    
    constructor(userId:number, id: number, title:string, body:string) {}
}