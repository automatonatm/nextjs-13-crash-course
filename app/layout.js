import {Poppins, Inter} from "next/font/google";
import './globals.css'
import Header from "@/app/components/Header";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})




export const metadata = {
  title: 'Angle Tech',
  description: 'This is just AngleTech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header/>
      <main className="container">
        {children}
      </main>

      </body>
    </html>
  )
}
