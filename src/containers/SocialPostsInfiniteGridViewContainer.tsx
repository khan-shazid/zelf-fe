import { useEffect } from 'react';
import { usePosts } from '../hooks/usePosts';
import { SocialPostGridItem } from '../components/SocialPostGridItem';
import styles from './SocialPostsInfiniteGridViewContainer.module.css';

export function SocialPostsInfiniteGridViewContainer() {
    const {loading, pagination, posts, handleScroll} = usePosts();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, handleScroll]);

    return (
        <div className={styles['social-posts-infinite-container']}>
            <div className={styles['info-container']}>
                <p>All Posts <span>({pagination?.total || 0} Total Posts)</span></p>
                <button className="btn-link">VIEW ALL</button>
            </div>
            <div className={styles['grid-container']}>
                {
                    posts.map((post) => (
                        <SocialPostGridItem
                            key={post.content.id}
                            title={post.content.title}
                            thumbnail_image={post.content.thumbnail_url}
                            platform={post.content.content_platform}
                            creator_pro_pic={post.creator.profile_picture_url}
                            creator_name={post.creator.name}
                            post_view={post.content.views}
                            post_like={post.content.likes}
                            post_comment={post.content.comments}
                        />
                    ))
                }
                
            </div>
        </div>
    )
}