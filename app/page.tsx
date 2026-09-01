import Link from 'next/link'

const categories = [
  ['Internet Residencial','Conectividad confiable para tu hogar'],
  ['Internet Rural','Conectividad para localidades y comunidades'],
  ['Empresas','Soluciones para negocios y organizaciones'],
  ['Equipos','Terminales y equipos de conectividad'],
]

export default function Home() {
  return (
    <main className="site">
      <nav className="nav">
        <Link className="brand" href="/">STARLINKBOLIVIAONLINE</Link>
        <div className="links"><Link href="/productos">Productos</Link><Link href="/categorias">Servicios</Link><Link href="/carrito">Carrito</Link></div>
        <Link className="navButton" href="/productos">COMPRAR</Link>
      </nav>
      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">CONECTIVIDAD EN BOLIVIA</p>
          <h1>Internet donde<br/>lo necesitas.</h1>
          <p className="lead">Equipos y soluciones de conectividad para hogares, empresas y zonas rurales.</p>
          <div className="actions"><Link className="primary" href="/productos">COMPRAR AHORA</Link><Link className="secondary" href="/productos">VER PRODUCTOS</Link></div>
        </div>
        <div className="scroll">DESPLAZAR PARA EXPLORAR ↓</div>
      </section>
      <section className="intro"><p className="eyebrow">STARLINKBOLIVIAONLINE</p><h2>Conectividad de nueva generación.</h2><p>Descubre equipos y soluciones diseñados para mantenerte conectado, estés donde estés.</p></section>
      <section className="categories"><div className="sectionTitle"><span>01</span><h2>Encuentra tu solución</h2></div><div className="grid">{categories.map(([title,text],i)=><Link className="category" href="/productos" key={title}><div className="categoryImage">0{i+1}</div><div><h3>{title}</h3><p>{text}</p></div><span>→</span></Link>)}</div></section>
      <section className="cta"><p className="eyebrow">LISTO PARA COMENZAR</p><h2>Conecta tu próximo proyecto.</h2><Link className="primary" href="/productos">EXPLORAR TIENDA</Link></section>
      <footer><strong>STARLINKBOLIVIAONLINE</strong><span>© 2026 StarlinkBoliviaOnline</span><Link href="/admin">Administración</Link></footer>
    </main>
  )
}
