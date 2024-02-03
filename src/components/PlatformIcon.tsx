import { ReactComponent as Instagram } from '../assets/icons/instagram.svg';
import { ReactComponent as Tiktok } from '../assets/icons/tiktok.svg';

export const PlatformIcon = ({ type }) => {
    switch(type) {
        case 'instagram':
            return <Instagram/>;
        case 'tiktok':
            return <Tiktok/>;
        default:
            return <Instagram/>;
      }
}