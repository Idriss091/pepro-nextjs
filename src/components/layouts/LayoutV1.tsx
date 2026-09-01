import { Manrope, Syne } from "next/font/google";
import V2Footer from "@/components/v2/V2Footer";
import V2Header from "@/components/v2/V2Header";
import styles from "./LayoutV1.module.css";

const display = Syne({ subsets: ["latin"], variable: "--v2-display", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--v2-body", display: "swap" });

interface LayoutProps {
  children?: React.ReactNode;
}

export default function LayoutV1({ children }: LayoutProps) {
  return (
    <main className={`${styles.root} ${display.variable} ${body.variable}`}>
      <V2Header />
      {children}
      <V2Footer />
    </main>
  );
}
