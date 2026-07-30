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
  content?: string;
  pricingRows?: PricingRow[];
  ctaTitle?: string;
  ctaText?: string;
  ctaWhatsappText?: string;
  ctaHref?: string;
  ctaButtonText?: string;
  ctaIcon?: string;
}

interface PricingRow {
  audience: string;
  price: string;
}

interface BlogDetailContentProps {
  blog: BlogPost;
  blogData: BlogPost[];
}

function renderArticleBlock(block: string, index: number) {
  const lines = block.split("\n");
  const bulletLines = lines.every(
    (line) => line.startsWith("- ") || line.startsWith("* "),
  );
  const paragraphWithBulletLines =
    lines.length > 1 &&
    lines.slice(1).every((line) => line.startsWith("- ") || line.startsWith("* "));
  const articleHeadings = new Set([
    "Le vrai problème n'est pas seulement le manque de contenu",
    "La super efficacité de l'IA pour produire du contenu",
    "Ce que vous pouvez produire concrètement",
    "Ce que vous gagnez à vous former",
    "La formation Pepro",
    "Une formation animée par des ingénieurs diplômés",
    "Une formation adaptée à tous les niveaux",
    "Pourquoi agir maintenant",
    "Conclusion",
  ]);

  if (block.startsWith("## ")) {
    return (
      <h3 className="article-heading" key={index}>
        {block.replace(/^##\s+/, "")}
      </h3>
    );
  }

  if (block.startsWith("### ")) {
    return (
      <h4 className="article-subheading" key={index}>
        {block.replace(/^###\s+/, "")}
      </h4>
    );
  }

  if (bulletLines) {
    return (
      <ul className="article-list" key={index}>
        {lines.map((line) => (
          <li key={line}>{line.replace(/^[-*]\s+/, "")}</li>
        ))}
      </ul>
    );
  }

  if (paragraphWithBulletLines) {
    return (
      <div className="article-block" key={index}>
        <p className="article-paragraph">{lines[0]}</p>
        <ul className="article-list">
          {lines.slice(1).map((line) => (
            <li key={line}>{line.replace(/^[-*]\s+/, "")}</li>
          ))}
        </ul>
      </div>
    );
  }

  if (articleHeadings.has(block) || /^[0-9]+\. /.test(block)) {
    return (
      <h3 className="article-heading" key={index}>
        {block}
      </h3>
    );
  }

  return (
    <p className="article-paragraph" key={index}>
      {block}
    </p>
  );
}

export default function BlogDetailContent({
  blog,
  blogData,
}: BlogDetailContentProps) {
  const relatedBlogs = blogData
    .filter((b: BlogPost) => b.id !== blog.id && b.tag === blog.tag)
    .slice(0, 3);

  const blogContent =
    blog.content ||
    blog.text ||
    blog.excerpt ||
    "Le contenu de cet article n'est pas disponible.";
  const whatsappMessage =
    blog.ctaWhatsappText ||
    "Bonjour, je souhaite échanger avec un conseiller Pepro au sujet de la formation IA et SEO.";
  const ctaHref =
    blog.ctaHref ||
    `https://wa.me/33618663595?text=${encodeURIComponent(whatsappMessage)}`;
  const ctaButtonText =
    blog.ctaButtonText || "Je contacte un conseiller sur WhatsApp";
  const ctaIcon = blog.ctaIcon || "fab fa-whatsapp";

  return (
    <>
      <div className="smooth-scroll-container">
        <HeaderV1 />

        {/* Page Banner */}
        <div
          className="page-banner-area bg-gray compact-blog-detail-banner"
          style={{
            minHeight: 0,
            height: "auto",
            padding: "112px 0 52px",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12 text-center">
                <div
                  className="page-banner-content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                    minHeight: 0,
                    height: "auto",
                    padding: 0,
                  }}
                >
                  <h1
                    style={{
                      margin: 0,
                      maxWidth: 900,
                      fontSize: "clamp(34px, 4vw, 56px)",
                      lineHeight: 1.08,
                    }}
                  >
                    {blog.title}
                  </h1>
                  <nav
                    aria-label="breadcrumb"
                    style={{
                      position: "static",
                      display: "block",
                      margin: 0,
                      padding: 0,
                      transform: "none",
                    }}
                  >
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
                      className="blog-featured-img"
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
                    {blogContent.split("\n\n").map(renderArticleBlock)}
                    {blog.pricingRows && blog.pricingRows.length > 0 && (
                      <div className="pricing-table-section">
                        <h3>Grille tarifaire</h3>
                        <div className="pricing-table-wrap">
                          <table className="pricing-table">
                            <thead>
                              <tr>
                                <th>Participants</th>
                                <th>Tarif</th>
                              </tr>
                            </thead>
                            <tbody>
                              {blog.pricingRows.map((row) => (
                                <tr key={row.audience}>
                                  <td>{row.audience}</td>
                                  <td>{row.price}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="advisor-cta">
                    <div>
                      <h4>{blog.ctaTitle || "Besoin d'un avis sur votre site ?"}</h4>
                      <p>
                        {blog.ctaText ||
                          "Échangez avec un conseiller Pepro sur WhatsApp pour voir comment appliquer cette méthode à votre activité."}
                      </p>
                    </div>
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="advisor-cta-button"
                    >
                      <i className={ctaIcon} aria-hidden="true" />
                      {ctaButtonText}
                    </a>
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
          margin: 0 0 24px;
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
          margin: 24px 0 40px;
          line-height: 1.8;
        }

        .blog-article-content h2 {
          display: none;
          margin: 30px 0 20px;
          font-size: 28px;
          font-weight: 700;
        }

        .blog-article-content p {
          margin-bottom: 20px;
          color: #555;
        }

        .blog-article-content :global(.article-heading) {
          margin: 34px 0 16px;
          color: #1f2933;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.35;
        }

        .blog-article-content :global(.article-paragraph) {
          margin-bottom: 20px;
          color: #555;
        }

        .blog-article-content :global(.article-block) {
          margin-bottom: 24px;
        }

        .blog-article-content :global(.article-list) {
          margin: 0 0 24px 20px;
          padding: 0;
          color: #555;
        }

        .blog-article-content :global(.article-list li) {
          margin-bottom: 8px;
          line-height: 1.7;
        }

        .pricing-table-section {
          margin-top: 36px;
        }

        .pricing-table-wrap {
          overflow-x: auto;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
        }

        .pricing-table {
          width: 100%;
          min-width: 420px;
          border-collapse: collapse;
          background: #fff;
        }

        .pricing-table th,
        .pricing-table td {
          padding: 16px 18px;
          border-bottom: 1px solid #e5e7eb;
          color: #374151;
          text-align: left;
        }

        .pricing-table th {
          background: #f8fafc;
          color: #111827;
          font-weight: 700;
        }

        .pricing-table tr:last-child td {
          border-bottom: none;
        }

        .advisor-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin: 42px 0;
          padding: 26px;
          border-radius: 8px;
          background: linear-gradient(135deg, #0f766e 0%, #16a34a 100%);
          box-shadow: 0 18px 45px rgba(15, 118, 110, 0.18);
          color: #fff;
        }

        .advisor-cta h4 {
          margin: 0 0 8px;
          color: #fff;
          font-size: 22px;
          font-weight: 700;
        }

        .advisor-cta p {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        .advisor-cta-button {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          padding: 13px 22px;
          border-radius: 999px;
          background: #ffffff;
          color: #0f766e;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .advisor-cta-button i {
          font-size: 20px;
        }

        .advisor-cta-button:hover {
          color: #065f46;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22);
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

        :global(.bg-dark) .blog-detail-area {
          background: #0b0f14;
        }

        :global(.bg-dark) .blog-detail-content,
        :global(.bg-dark) .blog-article-content {
          color: #d8dee9;
        }

        :global(.bg-dark) .blog-article-content h2,
        :global(.bg-dark) .blog-article-content :global(.article-heading),
        :global(.bg-dark) .pricing-table-section h3,
        :global(.bg-dark) .blog-share-area h4,
        :global(.bg-dark) .sidebar-widget h4,
        :global(.bg-dark) .related-post-item h5 {
          color: #f8fafc;
        }

        :global(.bg-dark) .blog-article-content p,
        :global(.bg-dark) .blog-article-content :global(.article-paragraph),
        :global(.bg-dark) .blog-article-content :global(.article-list),
        :global(.bg-dark) .blog-article-content :global(.article-list li) {
          color: #d1d5db;
        }

        :global(.bg-dark) .blog-meta-info {
          color: #cbd5e1;
        }

        :global(.bg-dark) .blog-tag {
          background: #1f2937;
          color: #e5e7eb;
        }

        :global(.bg-dark) .pricing-table-wrap,
        :global(.bg-dark) .pricing-table th,
        :global(.bg-dark) .pricing-table td {
          border-color: #2f3a48;
        }

        :global(.bg-dark) .pricing-table {
          background: #111827;
        }

        :global(.bg-dark) .pricing-table th {
          background: #1f2937;
          color: #f9fafb;
        }

        :global(.bg-dark) .pricing-table td {
          color: #e5e7eb;
        }

        :global(.bg-dark) .blog-share-area,
        :global(.bg-dark) .sidebar-widget {
          background: #111827;
          border: 1px solid #273244;
        }

        :global(.bg-dark) .share-btn {
          background: #1f2937;
          border-color: #374151;
          color: #e5e7eb;
        }

        :global(.bg-dark) .share-btn:hover {
          background: #0ea5e9;
          border-color: #0ea5e9;
          color: #ffffff;
        }

        :global(.bg-dark) .blog-navigation {
          border-color: #273244;
        }

        :global(.bg-dark) .prev-blog,
        :global(.bg-dark) .next-blog,
        :global(.bg-dark) .category-list a,
        :global(.bg-dark) .recent-posts a {
          color: #e5e7eb;
        }

        :global(.bg-dark) .prev-blog:hover,
        :global(.bg-dark) .next-blog:hover,
        :global(.bg-dark) .category-list a:hover,
        :global(.bg-dark) .recent-posts a:hover {
          color: #38bdf8;
        }

        :global(.bg-dark) .recent-posts li {
          border-color: #273244;
        }

        :global(.bg-dark) .recent-posts span,
        :global(.bg-dark) .related-post-item span {
          color: #94a3b8;
        }

        :global(.bg-dark) .search-form input {
          background: #0b1220;
          border-color: #334155;
          color: #e5e7eb;
        }

        :global(.bg-dark) .search-form input::placeholder {
          color: #94a3b8;
        }

        :global(.bg-dark) .search-form button {
          color: #cbd5e1;
        }

        :global(.compact-blog-banner) {
          min-height: 360px !important;
          height: 360px !important;
          padding: 116px 0 54px !important;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        :global(nav.navbar.validnavs.no-background .desktop-nav .navbar-nav > li > a),
        :global(nav.navbar.validnavs.sticked .desktop-nav .navbar-nav > li > a) {
          color: #374151 !important;
          font-weight: 600;
        }

        :global(nav.navbar.validnavs.no-background .desktop-nav .navbar-nav > li > a:hover),
        :global(nav.navbar.validnavs.sticked .desktop-nav .navbar-nav > li > a:hover) {
          color: #0ea5e9 !important;
        }

        :global(.bg-dark nav.navbar.validnavs.no-background .desktop-nav .navbar-nav > li > a),
        :global(.bg-dark nav.navbar.validnavs.sticked .desktop-nav .navbar-nav > li > a) {
          color: #e5e7eb !important;
        }

        :global(.bg-dark nav.navbar.validnavs.no-background .desktop-nav .navbar-nav > li > a:hover),
        :global(.bg-dark nav.navbar.validnavs.sticked .desktop-nav .navbar-nav > li > a:hover) {
          color: #38bdf8 !important;
        }

        :global(.compact-blog-banner .page-banner-content) {
          padding: 0 20px;
        }

        :global(.compact-blog-banner .page-banner-content h1) {
          max-width: 920px;
          margin: 0 auto 18px;
          font-size: clamp(34px, 4vw, 56px);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: 0;
        }

        :global(.compact-blog-banner .page-banner-content p) {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }

        :global(.compact-blog-banner .breadcrumb) {
          background: none;
          padding: 0;
          margin: 0;
          justify-content: center;
          row-gap: 8px;
        }

        :global(.compact-blog-banner .breadcrumb-item + .breadcrumb-item::before) {
          content: " / ";
          margin: 0 5px;
        }

        :global(.compact-blog-banner .breadcrumb-item a) {
          color: #333;
          text-decoration: none;
        }

        :global(.compact-blog-banner .breadcrumb-item a:hover) {
          color: #007bff;
        }

        :global(.compact-blog-banner .breadcrumb-item.active) {
          color: #999;
        }

        @media (min-width: 768px) {
          .blog-detail-area {
            padding-top: 70px !important;
          }

          .blog-detail-content {
            padding-right: 18px;
          }

          .blog-featured-image :global(.blog-featured-img) {
            display: block;
            width: 100%;
            aspect-ratio: 16 / 9;
            height: auto;
            border-radius: 14px !important;
            box-shadow: 0 22px 58px rgba(15, 23, 42, 0.13);
          }

          .blog-meta-info {
            padding: 16px 0 0;
            border-top: 1px solid #eef0f2;
          }

          .blog-sidebar {
            position: sticky;
            top: 110px;
          }

          .sidebar-widget {
            border: 1px solid #edf0f2;
            border-radius: 14px;
            background: #ffffff;
            box-shadow: 0 16px 38px rgba(15, 23, 42, 0.045);
          }
        }

        @media (max-width: 767px) {
          .compact-blog-banner {
            display: none !important;
          }

          .blog-detail-area {
            padding: 22px 0 58px !important;
            background: #ffffff;
          }

          .blog-detail-content {
            max-width: 100%;
            overflow: hidden;
          }

          .blog-featured-image {
            margin: 0 0 20px;
          }

          .blog-featured-image :global(.blog-featured-img) {
            display: block;
            width: 100%;
            height: auto;
            aspect-ratio: 16 / 10.5;
            border-radius: 14px !important;
            box-shadow: 0 16px 42px rgba(15, 23, 42, 0.1);
          }

          .blog-meta-info {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px 12px;
            margin: 0 0 22px;
            color: #6b7280;
            font-size: 14px;
            line-height: 1.2;
          }

          .blog-meta-info span {
            display: inline-flex;
            align-items: center;
            margin: 0 !important;
            gap: 6px;
            white-space: nowrap;
          }

          .blog-tag {
            padding: 9px 14px;
            border-radius: 999px;
            background: #f2f4f5;
            color: #4b5563;
            font-size: 12px;
            line-height: 1;
          }

          .blog-article-content {
            margin: 0;
            line-height: 1.72;
          }

          .blog-article-content h2 {
            display: block;
            margin: 0 0 18px;
            color: #070611;
            font-size: clamp(31px, 9.2vw, 40px);
            line-height: 1.08;
            letter-spacing: 0;
          }

          .blog-article-content p,
          .blog-article-content :global(.article-paragraph) {
            margin-bottom: 18px;
            color: #4b5563;
            font-size: 18px;
            line-height: 1.72;
          }

          .blog-article-content :global(.article-heading) {
            margin: 30px 0 12px;
            color: #111827;
            font-size: 24px;
            line-height: 1.2;
          }

          .blog-article-content :global(.article-list) {
            margin: 0 0 24px;
            padding-left: 20px;
            color: #4b5563;
            font-size: 17px;
          }

          .pricing-table-section,
          .advisor-cta,
          .blog-share-area,
          .blog-navigation {
            margin-left: 0;
            margin-right: 0;
          }

          .advisor-cta {
            align-items: flex-start;
            flex-direction: column;
            margin: 32px 0;
            padding: 22px;
            border-radius: 16px;
          }

          .advisor-cta h4 {
            font-size: 21px;
            line-height: 1.25;
          }

          .advisor-cta-button {
            width: 100%;
            min-height: 52px;
            text-align: center;
          }

          .blog-share-area {
            padding: 18px;
            border-radius: 14px;
          }

          .blog-navigation {
            align-items: stretch;
            flex-direction: column;
            gap: 12px;
          }

          .prev-blog,
          .next-blog {
            display: flex;
            justify-content: center;
            padding: 14px 16px;
            border: 1px solid #e5e7eb;
            border-radius: 999px;
          }

          .blog-sidebar {
            display: none;
          }

          :global(.bg-dark) .blog-detail-area {
            background: #0b0f14;
          }

          :global(.floating-whatsapp) {
            display: none;
          }

          .page-banner-content {
            padding: 6px 0;
          }

          .page-banner-content h1 {
            font-size: 24px;
            line-height: 1.24;
          }

        }
      `}</style>
    </>
  );
}
