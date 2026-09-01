'use client'
import {createContext,useContext,useEffect,useMemo,useState} from 'react'
export type CartItem={id:string;name:string;price:number;quantity:number;image?:string|null;stock?:number}
type Cart={items:CartItem[];add:(p:CartItem)=>void;remove:(id:string)=>void;setQty:(id:string,q:number)=>void;clear:()=>void;total:number}
const C=createContext<Cart|null>(null)
export function CartProvider({children}:{children:React.ReactNode}){const [items,setItems]=useState<CartItem[]>([]);useEffect(()=>{try{setItems(JSON.parse(localStorage.getItem('sbo-cart')||'[]'))}catch{}},[]);useEffect(()=>{localStorage.setItem('sbo-cart',JSON.stringify(items))},[items]);const api=useMemo(()=>({items,add:(p:CartItem)=>setItems(a=>{const x=a.find(i=>i.id===p.id);return x?a.map(i=>i.id===p.id?{...i,quantity:Math.min(i.quantity+1,i.stock||999)}:i):[...a,{...p,quantity:1}]}),remove:(id:string)=>setItems(a=>a.filter(i=>i.id!==id)),setQty:(id:string,q:number)=>setItems(a=>a.map(i=>i.id===id?{...i,quantity:Math.max(1,Math.min(q,i.stock||999))}:i)),clear:()=>setItems([]),total:items.reduce((s,i)=>s+i.price*i.quantity,0)}),[items]);return <C.Provider value={api}>{children}</C.Provider>}
export function useCart(){const v=useContext(C);if(!v)throw new Error('useCart must be inside CartProvider');return v}
