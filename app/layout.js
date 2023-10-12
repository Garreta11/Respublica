import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'respublica *  xmas-basteln *',
  description: 'Zu Weihnachten möchten wir Ihnen zeigen, wie Sie einen Origami-Weihnachtsbaum basteln',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}    
      </body>
    </html>
  )
}
