import './globals.css'
import './store.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = { title: 'StarlinkBoliviaOnline', description: 'Tienda online de conectividad en Bolivia' }
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' }

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="es"><body>{children}</body></html>
}
