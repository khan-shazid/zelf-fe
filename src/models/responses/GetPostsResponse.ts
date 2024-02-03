import { Post } from "../Post";

export type GetPostsResponse = {
    success: boolean;
    page?: number;
    next?: number;
    total_contents?: number;
    page_size?: number;
    data?: Post[];
}