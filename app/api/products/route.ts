import {NextResponse} from 'next/server'
import {createClient} from '@supabase/supabase-js'
export async function GET(){const url=process.env.NEXT_PUBLIC_SUPABASE_URL;const key=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;if(!url||!key)return NextResponse.json([]);const supabase=createClient(url,key);const {data,error}=await supabase.from('products').select('id,name,description,price,stock,image_url').eq('active',true).order('created_at',{ascending:false});if(error)return NextResponse.json({error:error.message},{status:500});return NextResponse.json(data||[])}
