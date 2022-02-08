interface Article_Info {}

interface Author_Info {
    
}
interface Category_Info {
  first_category_id: number;
  first_category_name: string;
  second_category_id: number;
  second_category_name: number;
}

interface Article {
  article_id: number;
  article_content: string;
  article_info: Article_Info;
  author_info: Author_Info;
  category_info: Category_Info;
}

interface Category {
  category_id: number;
  category_name: string;
  children?: Array<Category>;
}

export type { Article, Category };
