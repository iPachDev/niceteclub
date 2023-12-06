import { Poppins } from 'next/font/google'
import './globals.css'
import {Providers} from "./providers";

const inter = Poppins({ subsets: ['latin'], weight: ["100","200","300","400", "500", "600", "700", "800", "900"] });

import TopBar from '@/components/TopBar';

export const metadata = {
  title: 'Nicté Club',
  description: 'De las mejores manos a las mejores manos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <Providers>
                <TopBar />
                {children}
            </Providers>
        </body>
    </html>
  )
}
