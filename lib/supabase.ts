import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://njvxgotcmxofsqqfrkbu.supabase.co'
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_mWBAZXTijqtwKAS2NVIHnw_wX9dm5cX'
export const supabase = createClient(url, key)
