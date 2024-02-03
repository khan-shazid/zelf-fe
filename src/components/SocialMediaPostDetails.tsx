import { ReactComponent as ExternalLink } from '../assets/icons/external-link.svg';
import { STATIC_IMAGES } from '../constants/AppUrls';
import { Post } from '../models/Post';
import { formatCounts } from '../utils/utils';
import styles from './SocialMediaPostDetails.module.css';

type SocialMediaPostDetailsProps = {
    post: Post;
}

export const SocialMediaPostDetails = (props: SocialMediaPostDetailsProps) => {
    const {post} = props;

    const goToPost = () => {
        window.open(post.content.external_url, '_blank');
    }

    return (
        <div className={styles['media-post-details-container']}>
            <div className={styles['cover-image']}>
                <img src={post.content.thumbnail_url} alt={post.content.title}/>
            </div>
            <div className={styles['post-details']}>
                <div className={styles.creator}>
                    <img 
                        src={post.creator.profile_picture_url} 
                        alt={post.creator.name}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = STATIC_IMAGES.profileImagePlaceholder;
                        }}
                    /> 
                    <p className={styles['creator-name']}>{post.creator.name}</p>
                    {/* TODO:: timestamp fix */}
                    <p className={styles['creator-post-timeline']}>5 days ago</p>
                </div>
                <div>
                    {post.content.text} 
                </div>
                <button onClick={goToPost} className={`btn-link ${styles['external-link']}`}>
                    <ExternalLink/> See Original Post
                </button>

                <div className={styles['stat-container']}>
                    <div>
                        <p className={styles.count}>
                            {post.content.views ? formatCounts(post.content.views) : 'N/A'}
                        </p>
                        <p className={styles.label}>Total Views</p>
                    </div>
                    <div>
                        <p className={styles.count}>
                            {post.content.likes ? formatCounts(post.content.likes) : 'N/A'}
                        </p>
                        <p className={styles.label}>Total Likes</p>
                    </div>
                    <div>
                        <p className={styles.count}>
                            {post.content.comments ? formatCounts(post.content.comments) : 'N/A'}
                        </p>
                        <p className={styles.label}>Total Comments</p>
                    </div>
                    <div>
                        <p className={styles.count}>{parseFloat(post.content.engagement_of_views.toString()).toFixed(3)}%</p>
                        <p className={styles.label}>Total Engagement Rate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}