export type ForAxiosDefs =
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK"
    | undefined;

export interface LandingStateDef {
    details: {
        name: string;
        location: string;
        followers: number;
        description: string;
        info: string;
    };
    photos: {
        logo: string;
        header: string;
        carousel: Array<string>;
        id: number;
    };
    main_quote: {
        heading: string;
        body: string;
        footer: string;
        footer_photo: string;
    };
    social_links: {
        facebook: string;
        instagram: string;
        twitter: string;
        linkedin: string;
    };
    cuisineGenerated: string;
    cuisine: {
        id: string;
        name: string;
    };
    about: string;
    quotes: Array<QuoteInfoDef>;
    jobs: [];
}

export interface QuoteInfoDef {
    author: string;
    position: string;
    text: string;
}
