export interface PostObj {
    urlName: string,
    title: string,
    body: string,
    body2?: string,
    tags?: string[],
    date?: string,
    author?: string,
    img?: string,
    type?: "News"|"Entertainment"|"Science"|"Tech"|"Social",
    subtitle?: string,
    caption?: string,
    projectArr?: {name: String}[],
    slateBody?: {type: "p"|"img", url:string}[]
}

export interface NewsletterObj {
    email: string; 
}

export interface AccountObj {
    email: string,
    name: string,
    image: string,
}

export type DatedObj<T extends {}> = T & {
    _id?: string,
    createdAt?: string, // ISO date
    updatedAt?: string, // ISO date
}

export type IdObj<T extends {}> = T & {
    _id: string,
}