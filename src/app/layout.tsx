import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
export const metadata: Metadata = { title: { default: "Piyush Giri — Developer, Builder & Explorer", template: "%s | Piyush Giri" }, description: "Portfolio of Piyush Giri — hardware, software, local AI, space science, projects and creative interests.", robots: { index: true, follow: true } };
const initialTheme = `try{document.documentElement.dataset.theme=localStorage.getItem('portfolio-theme')==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}`;
export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html: initialTheme}}/></head><body><Header/><main>{children}</main><Footer/></body></html>;
}
