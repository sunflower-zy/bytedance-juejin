type Article = {};

type Category = {
    category_id: number;
    category_name: string;
    children: [Category] | undefined;
};

export type { Article, Category };
