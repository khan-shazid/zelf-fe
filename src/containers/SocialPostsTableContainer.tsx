import { Modal } from '../components/Modal/Modal';
import { useState } from 'react';
import { SocialMediaPostDetails } from '../components/SocialMediaPostDetails';
import { ReactComponent as Play } from '../assets/icons/play.svg';
import { ReactComponent as Sort } from '../assets/icons/sort.svg';
import styles from './SocialPostsTableContainer.module.css';
import { usePosts } from '../hooks/usePosts';
import { PlatformIcon } from '../components/PlatformIcon';
import { formatCounts, formatDate } from '../utils/utils';
import { Post } from '../models/Post';

export function SocialPostsTableContainer() {
    const {posts} = usePosts();
    const [showPostInfoModal, setShowPostInfoModal] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post>(null);

    // TODO:: we can handle more data fetching inside this onscroll
    return (
        <div className={styles['table-container']} onScroll={() => {}}>
            <table className={styles['post-info-table']}>
                <thead>
                    <tr>
                        <th align="left">Date</th>
                        <th align="left">Video</th>
                        <th align="left">Creator</th>
                        <th align="center">Platform</th>
                        <th align="center"><div className={styles['th-sortable']}>Total Views <Sort/></div></th>
                        <th align="center"><div className={styles['th-sortable']}>Total Engagement <Sort/></div></th>
                        <th align="center"><div className={styles['th-sortable']}>Engagement Rates <Sort/></div></th>
                        <th align="right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map((post) => {
                            return (
                                <tr key={post.content.id}>
                                    {/* TODO:: formatting timestamp */}
                                    <td align="left"><p className={styles.date}>{formatDate(post.content.timestamp, "MMM DD")}</p></td>
                                    <td align="left"><div className={styles.video}><Play/> <p>{post.content.title}</p></div></td>
                                    <td align="left"><div className={styles.creator}><img src={post.creator.profile_picture_url} alt={post.creator.name}/> <p>@{post.creator.username}</p></div></td>
                                    <td align="center"><div className={styles.platform}><PlatformIcon type={post.content.content_platform}/></div></td>
                                    <td align="center"><p className={styles['info-text']}>{formatCounts(post.content.views)}</p></td>
                                    <td align="center"><p className={styles['info-text']}>{formatCounts(post.content.total_engagement)}</p></td>
                                    <td align="center"><p className={styles['info-text']}>{parseFloat(post.content.engagement_of_views.toString()).toFixed(3)}%</p></td>
                                    <td align="right">
                                        <button 
                                            className="btn-link" 
                                            onClick={() => {
                                                setSelectedPost(post);
                                                setShowPostInfoModal(true);
                                            }}>View Post</button></td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>

            <Modal 
                show={showPostInfoModal} onClose={() => {
                    setShowPostInfoModal(false);
                    setSelectedPost(null);
                }}>
                {showPostInfoModal && <SocialMediaPostDetails post={selectedPost}/>}
            </Modal>
        </div>
    )
}