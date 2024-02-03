export type Content = {
    id: number;
    uuid?: string;
    account?: number;
    external_id?: string;
    external_url?: string;
    timestamp?: string;
    title?: string;
    text?: string;
    thumbnail_url?: string;
    content_platform?: string;
    content_type?: string;
    content_form?: string;
    likes?: number;
    comments?: number;
    views?: number;
    shares?: number;
    total_engagement?: number;
    engagement_of_views?: number;
    engagement_of_followers?: number;
}