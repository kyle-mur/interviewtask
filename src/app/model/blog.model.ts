export class BlogComment {
  id?: number;
  postId: number;
  parent_id: any;
  user: string;
  date: string;
  content: any;
}

export class BlogPost {
  id?: number;
  title: string;
  author: string;
  publish_date: string;
  slug: string;
  description: string;
  content: any;
}
