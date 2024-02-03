import { formatCounts } from '../utils/utils';
import { PlatformIcon } from './PlatformIcon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './SocialPostGridItem.module.css';
import { STATIC_IMAGES } from '../constants/AppUrls';

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
            {/* TODO:: could have handleded the css in better way for image */}
            {/* TODO:: we can optimize more with scrollPosition for image load */}
            <LazyLoadImage
                className="content-grid-thumbnail"
                wrapperClassName="content-grid-thumbnail"
                alt={title}
                src={thumbnail_image}
                effect="blur"
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = STATIC_IMAGES.posterPlaceholder;
                }}
                placeholderSrc={STATIC_IMAGES.posterPlaceholder}
            />
            {/* <img height={'100%'} width={'100%'} src={thumbnail_image} alt={title}/> */}
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