import { NextResponse } from 'next/server'
const imageBase64 = 'PLACEHOLDER'
export function GET(){return new NextResponse(Buffer.from(imageBase64,'base64'),{headers:{'Content-Type':'image/jpeg','Cache-Control':'public, max-age=31536000, immutable'}})}
