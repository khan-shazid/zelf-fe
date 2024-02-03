import { AppUrls } from '../constants/AppUrls';
import axios from 'axios';
import { GetPostsResponse } from '../models/responses/GetPostsResponse';



export async function fetchPosts(page: number): Promise<GetPostsResponse> {
    try {
        const result = await axios.get(`${AppUrls.contents}?page=${page}`);
        return {
            success: true,
            ...result.data
        };
    } catch (e) {
        return ({
            success: false
        })
    }
}