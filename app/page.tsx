import Link from 'next/link'

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
      <section className="intro"><p className="eyebrow">STARLINKBOLIVIAONLINE</p><h2>Conectividad de nueva generación.</h2><p>Descubre equipos y soluciones diseñados para mantenerte conectado, estés donde estés.</p><p className="importerName">GHOSTFAST · Importador de Starlink en Bolivia</p></section>
      <section className="cta"><p className="eyebrow">LISTO PARA COMENZAR</p><h2>Conecta tu próximo proyecto.</h2><Link className="primary" href="/productos">EXPLORAR TIENDA</Link></section>
      <footer><strong>STARLINKBOLIVIAONLINE</strong><span>GHOSTFAST · Importador de Starlink en Bolivia</span><span>© 2026 StarlinkBoliviaOnline</span><Link href="/admin">Administración</Link></footer>
    </main>
  )
}
