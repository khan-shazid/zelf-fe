import { SocialPostsInfiniteGridViewContainer } from '../containers/SocialPostsInfiniteGridViewContainer';
import { SocialPostsTableContainer } from '../containers/SocialPostsTableContainer';
import styles from './HomePage.module.css';

export function HomePage() {
    return (
        <div className={`container ${styles['home-page']}`}>
            <SocialPostsTableContainer/>
            <SocialPostsInfiniteGridViewContainer/>

            
        </div>
    )
}