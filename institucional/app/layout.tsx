import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Plotter Sul Informática | Assistência Técnica em Criciúma',description:'Assistência técnica em impressoras, plotters, fragmentadoras e equipamentos de escritório em Criciúma e Sul de Santa Catarina. Fale com a Plotter Sul.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
