import Link from 'next/link'

const products=[
 {name:'Kit de conectividad',price:'Consultar',tag:'DESTACADO'},
 {name:'Terminal residencial',price:'Consultar',tag:'HOGAR'},
 {name:'Accesorios',price:'Consultar',tag:'EQUIPOS'},
]
export default function Products(){return <main className="productsPage"><nav className="nav dark"><Link className="brand" href="/">STARLINKBOLIVIAONLINE</Link><div className="links"><Link href="/">Inicio</Link><Link href="/carrito">Carrito</Link></div><Link className="navButton" href="/admin">ADMIN</Link></nav><header className="catalogHead"><p className="eyebrow">CATÁLOGO</p><h1>Productos para<br/>mantenerte conectado.</h1><p>Explora nuestra selección de equipos y soluciones de conectividad.</p></header><section className="productGrid">{products.map(p=><article className="productCard" key={p.name}><div className="productVisual"><span>{p.tag}</span><div className="productShape"/></div><div className="productInfo"><div><h2>{p.name}</h2><p>{p.price}</p></div><Link href="/carrito">AGREGAR +</Link></div></article>)}</section></main>}
