import { formatCounts } from '../utils/utils';
import { PlatformIcon } from './PlatformIcon';
import styles from './SocialPostGridItem.module.css';

type SocialPostGridItemProps = {
    title: string;
    thumbnail_image: string;
    platform: string;
    creator_pro_pic: string;
    creator_name: string;
    post_view: number;
    post_like: number;
    post_comment: number;
}

export const SocialPostGridItem = (props: SocialPostGridItemProps) => {
    const {title, thumbnail_image, platform, creator_pro_pic, creator_name, post_view, post_like, post_comment} = props;

    return (
        <div className={styles['grid-item-container']}>
            {/* TODO:: we can do optimization here by lazy loading the thumbnail image */}
            <img height={'100%'} width={'100%'} src={thumbnail_image} alt={title}/>
            <div className={styles['bottom-info']}>
                <div className={styles.creator}>
                    <img src={creator_pro_pic} alt={title}/> 
                    <p>{creator_name}</p>
                </div>
                <div className={styles['platform-icon']}>
                    <PlatformIcon type={platform}/>
                </div>
            </div>
            <div className={styles['meta-info-container']}>
                Views {formatCounts(post_view)} Likes {formatCounts(post_like)}  Comments {formatCounts(post_comment)}
            </div>
        </div>
    )
}