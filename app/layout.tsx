import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'StarlinkBoliviaOnline', description: 'Tienda online de conectividad en Bolivia' }
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
