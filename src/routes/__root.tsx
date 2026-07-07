import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const FONT_PRIMARY = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap";
const FONT_ICONS = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
const HERO_H1_SIZE_STYLE = "main > section:first-child h1{font-size:clamp(1.9875rem,4.8vw,4.65rem)!important;}@media(max-width:900px){main > section:first-child h1{font-size:clamp(1.875rem,9vw,3.1125rem)!important;}}";
const DIAGNOSIS_HEADING_STYLE = "main > section:nth-of-type(3) h2{max-width:64rem!important;font-size:clamp(2.2rem,5vw,4.5rem)!important;line-height:1.02!important;}main > section:nth-of-type(3) h2 span{white-space:nowrap;}@media(max-width:480px){main > section:nth-of-type(3) h2{font-size:clamp(1.85rem,10vw,2.6rem)!important;}}";
const SERVICES_ICON_STYLE = ".services-editorial__icon{display:inline-flex!important;color:var(--jch-accent)!important;font-family:'Material Symbols Outlined'!important;font-size:2.25rem!important;font-weight:400!important;font-style:normal!important;line-height:1!important;letter-spacing:normal!important;text-transform:none!important;font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 40;margin:2rem 0 0!important;}.services-editorial__icon + h3{margin-top:1.2rem!important;}";
const PAGE_ENHANCEMENT_SCRIPT = "document.addEventListener('DOMContentLoaded',function(){var select=document.querySelector('#contact-form select');if(select&&!select.hasAttribute('aria-label'))select.setAttribute('aria-label','¿Qué necesitas revisar?');var icons=['analytics','real_estate_agent','assured_workload','trending_up','family_restroom','domain'];document.querySelectorAll('.services-editorial__card').forEach(function(card,index){if(card.querySelector('.services-editorial__icon'))return;var title=card.querySelector('h3');if(!title)return;var icon=document.createElement('span');icon.className='material-symbols-outlined services-editorial__icon';icon.setAttribute('aria-hidden','true');icon.textContent=icons[index]||'check_circle';title.parentNode.insertBefore(icon,title);});});";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o se ha movido.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página no se ha podido cargar
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo ha fallado. Puedes actualizar la página o volver al inicio.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Intentarlo de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "José Carlos Hidalgo | Asesor Financiero e Hipotecario" },
      { name: "description", content: "Asesoramiento financiero e hipotecario para autónomos y familias en Alicante. Diagnóstico gratuito." },
      { property: "og:title", content: "José Carlos Hidalgo | Asesor Financiero e Hipotecario" },
      { name: "twitter:title", content: "José Carlos Hidalgo | Asesor Financiero e Hipotecario" },
      { property: "og:description", content: "Asesoramiento financiero e hipotecario para autónomos y familias en Alicante. Diagnóstico gratuito." },
      { name: "twitter:description", content: "Asesoramiento financiero e hipotecario para autónomos y familias en Alicante. Diagnóstico gratuito." },
      { property: "og:image", content: "https://josecarlos.hilolegal.es/6.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "es_ES" },
      { property: "og:site_name", content: "José Carlos Hidalgo | Asesor Financiero" },
      { name: "twitter:image", content: "https://josecarlos.hilolegal.es/6.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        as: "image",
        href: "/1.webp",
        type: "image/webp",
        fetchpriority: "high",
        imagesizes: "(max-width: 768px) 100vw, 50vw",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preload", as: "style", href: FONT_PRIMARY },
      { rel: "stylesheet", href: FONT_PRIMARY, media: "print", onload: "this.media='all'" },
      { rel: "preload", as: "style", href: FONT_ICONS },
      { rel: "stylesheet", href: FONT_ICONS, media: "print", onload: "this.media='all'" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        <style dangerouslySetInnerHTML={{ __html: HERO_H1_SIZE_STYLE }} />
        <style dangerouslySetInnerHTML={{ __html: DIAGNOSIS_HEADING_STYLE }} />
        <style dangerouslySetInnerHTML={{ __html: SERVICES_ICON_STYLE }} />
        <noscript>
          <link rel="stylesheet" href={FONT_PRIMARY} />
          <link rel="stylesheet" href={FONT_ICONS} />
        </noscript>
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: PAGE_ENHANCEMENT_SCRIPT }} />
        <Scripts />
        <script src="/herramientas-home.js" />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
