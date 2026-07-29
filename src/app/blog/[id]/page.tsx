import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailContent from "./BlogDetailContent";
import blogData from "@/assets/jsonData/blog/BlogPeproData.json";
import { SITE_URL } from "@/lib/site";

interface BlogPost {
  id: number;
  date: string;
  dateIcon: string;
  author: string;
  authorIcon: string;
  tag: string;
  title: string;
  text: string;
  excerpt: string;
  btnText: string;
  btnIcon: string;
  thumbFull: string;
  thumb: string;
  animationDelay: string;
  content: string;
}

export async function generateStaticParams() {
  return blogData.map((blog: BlogPost) => ({
    id: blog.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = blogData.find((b: BlogPost) => b.id.toString() === id);

  if (!blog) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: `${blog.title} - Blog Pepro`,
    description: blog.excerpt,
    alternates: {
      canonical: `/blog/${id}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url: `${SITE_URL}/blog/${id}`,
      type: "article",
      images: [
        {
          url: `${SITE_URL}/assets/img/blog/${blog.thumbFull}`,
          alt: blog.title,
        },
      ],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogData.find((b: BlogPost) => b.id.toString() === id);

  if (!blog) {
    notFound();
  }

  return <BlogDetailContent blog={blog} blogData={blogData} />;
}
