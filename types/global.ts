export interface Blog {
    id: string;
    user: string;
    title: string;
    description: string;
    posted: string;
    category: string;
    thumbnail: string;
    view: string;
    shared: string
    author?: any;
    content?: string;
    tags: string;
    active: string;
    tags_array: string[];
    url: string;
    category_link: string;
    category_name: string;
    is_post_admin: true,
    reaction: {
        is_reacted: boolean;
        type: string;
        count: number;
    }
}