import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, ExternalLink, UserRound } from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import V2Footer from "@/components/v2/V2Footer";
import V2Header from "@/components/v2/V2Header";
import { compareBlogPostsByDateDesc } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import styles from "../blog.module.css";

interface PricingRow { audience: string; price: string; }
interface BlogPost { id:number; date:string; author:string; tag:string; title:string; text:string; excerpt:string; thumbFull:string; thumb:string; content?:string; pricingRows?:PricingRow[]; ctaTitle?:string; ctaText?:string; ctaWhatsappText?:string; ctaHref?:string; ctaButtonText?:string; }
interface Props { blog:BlogPost; blogData:BlogPost[]; }

function renderArticleBlock(block:string,index:number){
  const lines=block.split("\n");
  const bullets=lines.every(line=>/^[-*] /.test(line));
  const paragraphWithBullets=lines.length>1&&lines.slice(1).every(line=>/^[-*] /.test(line));
  if(block.startsWith("## "))return <h2 className={styles.articleHeading} key={index}>{block.replace(/^##\s+/,"")}</h2>;
  if(block.startsWith("### "))return <h3 className={styles.articleSubheading} key={index}>{block.replace(/^###\s+/,"")}</h3>;
  if(bullets)return <ul className={styles.articleList} key={index}>{lines.map(line=><li key={line}>{line.replace(/^[-*]\s+/,"")}</li>)}</ul>;
  if(paragraphWithBullets)return <div key={index}><p>{lines[0]}</p><ul className={styles.articleList}>{lines.slice(1).map(line=><li key={line}>{line.replace(/^[-*]\s+/,"")}</li>)}</ul></div>;
  if(/^[0-9]+\. /.test(block))return <h2 className={styles.articleHeading} key={index}>{block}</h2>;
  return <p key={index}>{block}</p>;
}

const display=Syne({subsets:["latin"],variable:"--v2-display",display:"swap"});
const body=Manrope({subsets:["latin"],variable:"--v2-body",display:"swap"});

export default function BlogDetailContent({blog,blogData}:Props){
  const ordered=[...blogData].sort(compareBlogPostsByDateDesc);
  const currentIndex=ordered.findIndex(item=>item.id===blog.id);
  const previous=ordered[currentIndex-1]; const next=ordered[currentIndex+1];
  const content=blog.content||blog.text||blog.excerpt;
  const whatsapp=blog.ctaWhatsappText||"Bonjour, je souhaite échanger avec Pepro au sujet de cet article.";
  const ctaHref=blog.ctaHref||`https://wa.me/33781911992?text=${encodeURIComponent(whatsapp)}`;
  return <main className={`${styles.root} ${display.variable} ${body.variable}`}><V2Header/>
    <header className={`${styles.hero} ${styles.articleHero}`}><Link className={styles.back} href="/blog"><ArrowLeft aria-hidden="true"/>Tous les articles</Link><p><span/>{blog.tag}</p><h1>{blog.title}</h1><div className={styles.meta}><span><CalendarDays aria-hidden="true"/>{blog.date}</span><span><UserRound aria-hidden="true"/>{blog.author}</span></div></header>
    <article className={styles.article}><div className={styles.featured}><Image src={`/assets/img/blog/${blog.thumbFull}`} alt={blog.title} fill priority sizes="(max-width: 900px) 100vw, 900px"/></div>
      <div className={styles.articleBody}>{content.split("\n\n").map(renderArticleBlock)}
      {blog.pricingRows?.length?<section className={styles.pricing}><h2>Grille tarifaire</h2><div>{blog.pricingRows.map(row=><p key={row.audience}><span>{row.audience}</span><strong>{row.price}</strong></p>)}</div></section>:null}
      <aside className={styles.articleCta}><div><h2>{blog.ctaTitle||"Un projet à clarifier ?"}</h2><p>{blog.ctaText||"Présentez-nous votre contexte : nous vous répondrons avec une première direction concrète."}</p></div><a href={ctaHref} target="_blank" rel="noopener noreferrer">{blog.ctaButtonText||"Échanger avec Pepro"}<ExternalLink aria-hidden="true"/></a></aside>
      <div className={styles.share}><span>Partager :</span><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${SITE_URL}/blog/${blog.id}`} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={`https://twitter.com/intent/tweet?url=${SITE_URL}/blog/${blog.id}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer">X</a></div>
      <nav className={styles.articleNav} aria-label="Articles adjacents">{previous?<Link href={`/blog/${previous.id}`}><ArrowLeft aria-hidden="true"/>Article précédent</Link>:<span/>}{next?<Link href={`/blog/${next.id}`}>Article suivant<ArrowRight aria-hidden="true"/></Link>:null}</nav>
      </div></article><V2Footer/></main>;
}
