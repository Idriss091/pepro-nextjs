import type { Metadata } from "next";
import HeaderV1 from "@/components/header/HeaderV1";
import FooterV1 from "@/components/footer/FooterV1";
import ThemeDark from "@/components/switcher/ThemeDark";
import Link from "next/link";
import Image from "next/image";
import blogData from "@/assets/jsonData/blog/BlogPeproData.json";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog Pepro - Actualités et tendances technologiques",
  description:
    "Découvrez nos articles sur le développement logiciel, l'IA, la sécurité, DevOps et les dernières tendances technologiques.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog Pepro - Actualités et tendances technologiques",
    description:
      "Découvrez nos articles sur le développement logiciel, l'IA, la sécurité, DevOps et les dernières tendances technologiques.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

export default function BlogPage() {
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
                  <h1>Notre Blog</h1>
                  <p>Actualités, tendances et conseils en technologie</p>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Accueil</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Blog
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid-area default-padding">
          <div className="container">
            <div className="row">
              {blogData.map((blog: any) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 single-item"
                  key={blog.id}
                >
                  <div className="blog-style-one-item">
                    <div className="blog-thumb">
                      <Link href={`/blog/${blog.id}`}>
                        <Image
                          src={`/assets/img/blog/${blog.thumb}`}
                          alt={blog.title}
                          width={400}
                          height={300}
                          style={{ objectFit: "cover" }}
                        />
                      </Link>
                      <span className="blog-tag">{blog.tag}</span>
                    </div>
                    <div className="blog-content">
                      <div className="blog-meta">
                        <span>
                          <i className={blog.dateIcon} /> {blog.date}
                        </span>
                        <span>
                          <i className={blog.authorIcon} /> {blog.author}
                        </span>
                      </div>
                      <h4>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                      </h4>
                      <p>{blog.excerpt}</p>
                      <Link
                        className="btn-full"
                        href={`/blog/${blog.id}`}
                      >
                        Lire plus <i className={blog.btnIcon} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FooterV1 />
        <ThemeDark />
      </div>
    </>
  );
}
