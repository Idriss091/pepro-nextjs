import SplitText from "../animation/SplitText.jsx";
import Link from "next/link";
import Image from "next/image";
import blogData from "@/assets/jsonData/blog/BlogPeproData.json";

interface DataType {
  hasTitle?: boolean;
  sectionClass?: string;
  limit?: number;
}

const BlogV1 = ({ hasTitle, sectionClass, limit = 3 }: DataType) => {
  const displayedBlogs = limit ? blogData.slice(0, limit) : blogData;

  return (
    <>
      <div
        className={`blog-style-one-area ${sectionClass ? sectionClass : ""}`}
      >
        {/* Blog Title */}
        {hasTitle && (
          <div className="blog-style-one-heading">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2 text-center">
                  <div className="site-heading">
                    <h4 className="sub-title">Notre blog</h4>
                    <h2 className="title split-text">
                      <SplitText
                        delay={40}
                        animationFrom={{
                          opacity: 0,
                          transform: "translate3d(0,50px,0)",
                        }}
                        animationTo={{
                          opacity: 1,
                          transform: "translate3d(0,0,0)",
                        }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                      >
                        Actualités et tendances technologiques
                      </SplitText>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          <div className="blog-style-one-items">
            <div className="row">
              {displayedBlogs.map((blog: any) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 single-item"
                  key={blog.id}
                  style={{
                    animationDelay: blog.animationDelay,
                  }}
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
                        {blog.btnText} <i className={blog.btnIcon} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogV1;
