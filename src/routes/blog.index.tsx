import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blogPosts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | José Carlos Hidalgo — Asesoramiento Financiero" },
      {
        name: "description",
        content:
          "Artículos sobre hipotecas, protección, ahorro, pensiones y planificación financiera para autónomos y familias en Altea, Benidorm y la Costa Blanca.",
      },
      { property: "og:title", content: "Blog | José Carlos Hidalgo" },
      {
        property: "og:description",
        content:
          "Hipotecas, protección, ahorro, pensiones y planificación financiera. Artículos prácticos sin tecnicismos.",
      },
      { property: "og:url", content: "https://josecarlos.hilolegal.es/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://josecarlos.hilolegal.es/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="bg-white text-[#1A1A1A] min-h-screen">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#E5E5E5]">
        <nav className="flex justify-between items-center w-full px-6 py-5 max-w-[1200px] mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-9 w-9 object-contain" />
            <span className="text-base md:text-lg font-bold tracking-tight uppercase">
              José Carlos Hidalgo
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-[#1A1A1A] hover:text-[#FF6B00] transition-colors"
          >
            ← Volver al inicio
          </Link>
        </nav>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-20">
        <div className="mb-16 space-y-6 max-w-3xl">
          <span className="text-[#FF6B00] font-bold text-xs uppercase tracking-widest">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Decisiones financieras claras, sin tecnicismos.
          </h1>
          <p className="text-xl text-[#4A4A4A] leading-relaxed">
            Artículos sobre hipotecas, protección, ahorro, pensiones y planificación
            financiera para autónomos y familias.
          </p>
          <div className="w-20 h-1 bg-[#FF6B00]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="bg-white p-10 group hover:bg-[#FF6B00] transition-colors block"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6B00] group-hover:text-white transition-colors">
                {post.category} · {post.readingTime}
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-snug group-hover:text-white transition-colors">
                {post.title}
              </h2>
              <p className="mt-4 text-[#4A4A4A] leading-relaxed group-hover:text-white/90 transition-colors">
                {post.excerpt}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:text-white transition-colors">
                Leer artículo →
              </span>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-[#1A1A1A] py-12 text-white mt-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center text-[10px] uppercase tracking-widest text-gray-500">
          © {new Date().getFullYear()} José Carlos Hidalgo. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
