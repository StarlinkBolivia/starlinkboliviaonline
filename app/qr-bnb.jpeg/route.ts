import { NextResponse } from 'next/server'
const imageBase64 = ' /9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCw' 
export function GET(){return new NextResponse(Buffer.from(imageBase64.trim(),'base64'),{headers:{'Content-Type':'image/jpeg','Cache-Control':'public, max-age=31536000, immutable'}})}
