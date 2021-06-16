export interface PostObj {
    urlName: string,
    title: string,
    body: string,
    body2?: string,
    tags?: string[],
    date?: string,
    author?: string,
    img?: string,
    type?: "News"|"Entertainment"|"Science"|"Tech"|"Life",
    subtitle?: string,
    caption?: string,
}

export type DatedObj<T extends {}> = T & {
    _id?: string,
    createdAt?: string, // ISO date
    updatedAt?: string, // ISO date
}

export type IdObj<T extends {}> = T & {
    _id: string,
}