type Article = {};

type Category = {
    category_id: number;
    category_name: string;
    children?: Array<Category>;
};

export type { Article, Category };
