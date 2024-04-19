import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Link from 'next/link'
import Image from "next/image";
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ModeToggle } from '@/components/mode-toggle';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

let theme: any

function changeMode() {
  theme === 'dark' ? theme = 'light' : 'dark'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
            disableTransitionOnChange
        >
          <main className="flex min-h-screen flex-col items-center">
            <div className="z-10 w-full max-w-5xl items-center justify-between text-sm flex p-6">
              <Link href="/" className='flex justify-center'>
                <Image
                  src="/poke-logo.png"
                  alt='pokemon-logo'
                  priority
                  width={50}
                  height={50}
                  style={{ "objectFit": "contain" }}
                  className="transition-opacity duration-[2s]"
                />
              </Link>
              <div className="flex items-center space-x-2">
                <ModeToggle></ModeToggle>
              </div>
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
