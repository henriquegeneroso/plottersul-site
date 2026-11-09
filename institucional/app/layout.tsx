import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Plotter Sul Informática | Assistência Técnica em Criciúma',description:'Assistência técnica em impressoras, plotters, fragmentadoras e equipamentos de escritório em Criciúma e Sul de Santa Catarina. Fale com a Plotter Sul.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html: `(()=>{let theme;try{theme=localStorage.getItem("plottersul-theme")}catch{}document.documentElement.dataset.theme=theme==="dark"||theme==="light"?theme:typeof matchMedia==="function"&&matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"})()`}} /></head><body>{children}</body></html>}
