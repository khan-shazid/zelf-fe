import { useCallback, useEffect, useState } from "react"
import { fetchPosts } from "../services/ContentService";
import { hasWindowScrolledHalf } from "../utils/utils";
import { Pagination } from "../models/Pagination";
import { Post } from "../models/Post";

export function usePosts() {
    const [loading, setLoading] = useState<boolean>(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [pagination, setPagination] = useState<Pagination>(null);

    const handleFetchData = useCallback(
        async (page = 1) => {
            setLoading(true);
            const result = await fetchPosts(page);
            setLoading(false);
            if (result.success) {
                if (page > 1) setPosts((prev) => [...prev, ...result.data]);
                else setPosts(result.data);
                setPagination({
                    page: result.page,
                    size: result.page_size,
                    total: result.total_contents,
                    next: result.next
                });
            }
        },
        [setPosts, setPagination],
    );

    useEffect(() => {
        handleFetchData();
    }, [handleFetchData]);

    const handleScroll = useCallback(() => {
        if (hasWindowScrolledHalf() && !loading) {
            const {  next } = pagination;
            if (next) {
                handleFetchData(next);
            }
        }
    }, [loading, pagination, handleFetchData]);

    return { loading, posts, pagination, handleFetchData, handleScroll };
}