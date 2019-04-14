export interface PostInfo{
    _id:string;
    url:string;
    imageUrlr:string;
    description:string;
    author: string;
    _acl: {creator: string};
    _kmd:{ date: string};
}