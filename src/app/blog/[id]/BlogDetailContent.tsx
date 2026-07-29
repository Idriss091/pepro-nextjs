"use client";

import HeaderV1 from "@/components/header/HeaderV1";
import FooterV1 from "@/components/footer/FooterV1";
import ThemeDark from "@/components/switcher/ThemeDark";
import Link from "next/link";
import Image from "next/image";
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

interface BlogDetailContentProps {
  blog: BlogPost;
  blogData: BlogPost[];
}

export default function BlogDetailContent({
  blog,
  blogData,
}: BlogDetailContentProps) {
  const relatedBlogs = blogData
    .filter((b: BlogPost) => b.id !== blog.id && b.tag === blog.tag)
    .slice(0, 3);

  return (
    <>
      <div className="smooth-scroll-container">
        <HeaderV1 />

        {/* Page Banner */}
        <div className="page-banner-area bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 text-center">
                <div className="page-banner-content">
                  <h1>{blog.title}</h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Accueil</Link>
                      </li>
                      <li className="breadcrumb-item">
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {blog.title}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Detail */}
        <div className="blog-detail-area default-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-8">
                <div className="blog-detail-content">
                  {/* Featured Image */}
                  <div className="blog-featured-image">
                    <Image
                      src={`/assets/img/blog/${blog.thumbFull}`}
                      alt={blog.title}
                      width={800}
                      height={500}
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  </div>

                  {/* Article Meta */}
                  <div className="blog-meta-info">
                    <span className="blog-tag" style={{ marginRight: "15px" }}>
                      {blog.tag}
                    </span>
                    <span>
                      <i
                        className={blog.dateIcon}
                        style={{ marginRight: "5px" }}
                      />
                      {blog.date}
                    </span>
                    <span style={{ marginLeft: "20px" }}>
                      <i
                        className={blog.authorIcon}
                        style={{ marginRight: "5px" }}
                      />
                      {blog.author}
                    </span>
                  </div>

                  {/* Article Content */}
                  <div className="blog-article-content">
                    <h2>{blog.title}</h2>
                    {blog.content
                      .split("\n\n")
                      .map((paragraph: string, index: number) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                  </div>

                  {/* Share Article */}
                  <div className="blog-share-area">
                    <h4>Partager cet article</h4>
                    <div className="share-buttons">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${SITE_URL}/blog/${blog.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-btn"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${SITE_URL}/blog/${blog.id}&text=${blog.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-btn"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${SITE_URL}/blog/${blog.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-btn"
                      >
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="blog-navigation">
                    {blog.id > 1 && (
                      <Link href={`/blog/${blog.id - 1}`} className="prev-blog">
                        <i className="fas fa-angle-left" /> Article précédent
                      </Link>
                    )}
                    {blog.id < blogData.length && (
                      <Link href={`/blog/${blog.id + 1}`} className="next-blog">
                        Article suivant <i className="fas fa-angle-right" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-xl-4">
                <div className="blog-sidebar">
                  {/* Search */}
                  <div className="sidebar-widget">
                    <h4>Rechercher</h4>
                    <form className="search-form">
                      <input
                        type="text"
                        placeholder="Rechercher un article..."
                      />
                      <button type="submit">
                        <i className="fas fa-search" />
                      </button>
                    </form>
                  </div>

                  {/* Categories */}
                  <div className="sidebar-widget">
                    <h4>Catégories</h4>
                    <ul className="category-list">
                      {Array.from(
                        new Set(blogData.map((b: BlogPost) => b.tag)),
                      ).map((tag: string) => (
                        <li key={tag}>
                          <Link href={`/blog?tag=${tag}`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Recent Articles */}
                  <div className="sidebar-widget">
                    <h4>Articles récents</h4>
                    <ul className="recent-posts">
                      {blogData.slice(0, 5).map((recentBlog: BlogPost) => (
                        <li key={recentBlog.id}>
                          <Link href={`/blog/${recentBlog.id}`}>
                            {recentBlog.title}
                          </Link>
                          <span>{recentBlog.date}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Related Articles */}
                  {relatedBlogs.length > 0 && (
                    <div className="sidebar-widget">
                      <h4>Articles similaires</h4>
                      <div className="related-posts">
                        {relatedBlogs.map((relatedBlog: BlogPost) => (
                          <Link
                            key={relatedBlog.id}
                            href={`/blog/${relatedBlog.id}`}
                            className="related-post-item"
                          >
                            <Image
                              src={`/assets/img/blog/${relatedBlog.thumb}`}
                              alt={relatedBlog.title}
                              width={100}
                              height={100}
                              style={{
                                objectFit: "cover",
                                borderRadius: "4px",
                              }}
                            />
                            <div className="post-info">
                              <h5>{relatedBlog.title}</h5>
                              <span>{relatedBlog.date}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterV1 />
        <ThemeDark />
      </div>

      <style jsx>{`
        .blog-featured-image {
          margin: 40px 0;
        }

        .blog-meta-info {
          display: flex;
          align-items: center;
          gap: 15px;
          margin: 20px 0;
          font-size: 14px;
          color: #666;
        }

        .blog-tag {
          display: inline-block;
          background: #f5f5f5;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .blog-article-content {
          margin: 40px 0;
          line-height: 1.8;
        }

        .blog-article-content h2 {
          margin: 30px 0 20px;
          font-size: 28px;
          font-weight: 700;
        }

        .blog-article-content p {
          margin-bottom: 20px;
          color: #555;
        }

        .blog-share-area {
          margin: 40px 0;
          padding: 20px;
          background: #f9f9f9;
          border-radius: 8px;
        }

        .share-buttons {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }

        .share-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 50%;
          text-decoration: none;
          color: #333;
          transition: all 0.3s ease;
        }

        .share-btn:hover {
          background: #333;
          color: #fff;
          border-color: #333;
        }

        .blog-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 40px 0;
          padding: 20px 0;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
        }

        .prev-blog,
        .next-blog {
          color: #333;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .prev-blog:hover,
        .next-blog:hover {
          color: #007bff;
        }

        .blog-sidebar {
          margin-top: 40px;
        }

        .sidebar-widget {
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .sidebar-widget h4 {
          margin-bottom: 15px;
          font-weight: 700;
        }

        .category-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category-list li {
          margin-bottom: 10px;
        }

        .category-list a {
          text-decoration: none;
          color: #333;
          transition: color 0.3s ease;
        }

        .category-list a:hover {
          color: #007bff;
        }

        .recent-posts {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .recent-posts li {
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }

        .recent-posts li:last-child {
          border-bottom: none;
        }

        .recent-posts a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .recent-posts a:hover {
          color: #007bff;
        }

        .recent-posts span {
          display: block;
          font-size: 12px;
          color: #999;
          margin-top: 5px;
        }

        .related-posts {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .related-post-item {
          display: flex;
          gap: 12px;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .related-post-item:hover {
          transform: translateY(-2px);
        }

        .related-post-item img {
          flex-shrink: 0;
        }

        .related-post-item .post-info {
          flex: 1;
        }

        .related-post-item h5 {
          margin: 0 0 5px;
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }

        .related-post-item span {
          font-size: 12px;
          color: #999;
        }

        .search-form {
          position: relative;
          display: flex;
        }

        .search-form input {
          width: 100%;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }

        .search-form button {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
        }

        .page-banner-content {
          padding: 60px 20px;
        }

        .page-banner-content h1 {
          font-size: 48px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .page-banner-content p {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }

        .breadcrumb {
          background: none;
          padding: 0;
          margin: 0;
          justify-content: center;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          content: " / ";
          margin: 0 5px;
        }

        .breadcrumb-item a {
          color: #333;
          text-decoration: none;
        }

        .breadcrumb-item a:hover {
          color: #007bff;
        }

        .breadcrumb-item.active {
          color: #999;
        }
      `}</style>
    </>
  );
}
