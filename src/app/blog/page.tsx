import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, UserRound } from "lucide-react";
import { Manrope, Syne } from "next/font/google";
import blogData from "@/assets/jsonData/blog/BlogPeproData.json";
import V2Footer from "@/components/v2/V2Footer";
import V2Header from "@/components/v2/V2Header";
import { compareBlogPostsByDateDesc } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";
import styles from "./blog.module.css";

const display = Syne({ subsets: ["latin"], variable: "--v2-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--v2-body", display: "swap" });

export const metadata: Metadata = {
  title: "Blog Pepro — Guides numériques et ingénierie",
  description: "Guides pratiques sur les sites web, le SEO, l’intelligence artificielle, les logiciels métier et l’ingénierie.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Blog Pepro — Guides numériques et ingénierie", description: "Guides pratiques et retours d’expérience pour vos projets numériques.", url: `${SITE_URL}/blog`, type: "website" },
};

export default function BlogPage() {
  const posts = [...blogData].sort(compareBlogPostsByDateDesc);
  return <main className={`${styles.root} ${display.variable} ${body.variable}`}><V2Header/>
    <header className={styles.hero}><p><span/>Conseils & ressources</p><h1>Des idées utiles pour mieux construire.</h1><div>SEO, IA, logiciels et ingénierie expliqués à partir de situations concrètes.</div></header>
    <section className={styles.list} aria-label="Articles Pepro">{posts.map((post,index)=><article className={styles.card} key={post.id}>
      <Link className={styles.cardImage} href={`/blog/${post.id}`}><Image src={`/assets/img/blog/${post.thumb}`} alt={post.title} fill priority={index===0} sizes="(max-width: 760px) 100vw, 48vw"/></Link>
      <div className={styles.cardBody}><p className={styles.tag}>{post.tag}</p><h2><Link href={`/blog/${post.id}`}>{post.title}</Link></h2><p className={styles.excerpt}>{post.excerpt}</p><div className={styles.meta}><span><CalendarDays aria-hidden="true"/>{post.date}</span><span><UserRound aria-hidden="true"/>{post.author}</span></div><Link className={styles.readLink} href={`/blog/${post.id}`}>Lire l’article <ArrowUpRight aria-hidden="true"/></Link></div>
    </article>)}</section><V2Footer/></main>;
}
