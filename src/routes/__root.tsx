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
const HERO_H1_SIZE_STYLE = "main > section:first-child h1{font-size:clamp(1.9875rem,4.8vw,4.65rem)!important;}@media(max-width:900px){main > section:first-child h1{font-size:clamp(1.875rem,9vw,3.1125rem)!important;}}";
const DIAGNOSIS_HEADING_STYLE = "main > section:nth-of-type(3) h2{max-width:64rem!important;font-size:clamp(2.2rem,5vw,4.5rem)!important;line-height:1.02!important;}main > section:nth-of-type(3) h2 span{white-space:nowrap;}@media(max-width:480px){main > section:nth-of-type(3) h2{font-size:clamp(1.85rem,10vw,2.6rem)!important;}}";
const DIAGNOSIS_IMAGE_STYLE = "main > section:nth-of-type(3) article > div.relative.overflow-hidden{aspect-ratio:1/1!important;width:100%!important;}main > section:nth-of-type(3) article > div.relative.overflow-hidden img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important;}";
const SERVICES_ICON_STYLE = ".services-editorial__icon{display:inline-flex!important;color:var(--jch-accent)!important;font-size:2.25rem!important;line-height:1!important;margin:2rem 0 0!important;}.services-editorial__icon + h3{margin-top:1.2rem!important;}.jch-svg-icon{display:inline-block;width:1em;height:1em;vertical-align:-0.125em;overflow:visible;}.material-symbols-outlined:has(.jch-svg-icon){font-family:inherit!important;font-size:inherit!important;letter-spacing:0!important;text-transform:none!important;}";
const PAGE_ENHANCEMENT_SCRIPT = "document.addEventListener('DOMContentLoaded',function(){var select=document.querySelector('#contact-form select');if(select&&!select.hasAttribute('aria-label'))select.setAttribute('aria-label','¿Qué necesitas revisar?');var serviceIcons=['analytics','real_estate_agent','assured_workload','trending_up','family_restroom','domain'];document.querySelectorAll('.services-editorial__card').forEach(function(card,index){if(card.querySelector('.services-editorial__icon'))return;var title=card.querySelector('h3');if(!title)return;var icon=document.createElement('span');icon.className='material-symbols-outlined services-editorial__icon';icon.setAttribute('aria-hidden','true');icon.textContent=serviceIcons[index]||'check_circle';title.parentNode.insertBefore(icon,title);});var svg={visibility:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>',map:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z\"/><path d=\"M9 3v15\"/><path d=\"M15 6v15\"/></svg>',medical_services:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1\"/><rect x=\"3\" y=\"6\" width=\"18\" height=\"15\" rx=\"2\"/><path d=\"M12 10v7\"/><path d=\"M8.5 13.5h7\"/></svg>',balance:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3v18\"/><path d=\"M5 21h14\"/><path d=\"M3 7h18\"/><path d=\"M7 7 3 14h8L7 7Z\"/><path d=\"m17 7-4 7h8l-4-7Z\"/></svg>',location_on:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></svg>',travel_explore:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m21 21-4.3-4.3\"/><path d=\"M11 4a10 10 0 0 1 0 14\"/><path d=\"M11 4a10 10 0 0 0 0 14\"/><path d=\"M4 11h14\"/></svg>',expand_more:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6 9 6 6 6-6\"/></svg>',arrow_forward:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12h14\"/><path d=\"m13 6 6 6-6 6\"/></svg>',analytics:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 19V5\"/><path d=\"M4 19h16\"/><path d=\"M8 16v-5\"/><path d=\"M12 16V8\"/><path d=\"M16 16v-3\"/></svg>',real_estate_agent:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3 11 9-8 9 8\"/><path d=\"M5 10v10h14V10\"/><path d=\"M9 20v-6h6v6\"/></svg>',assured_workload:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 10h16\"/><path d=\"M5 10l7-5 7 5\"/><path d=\"M6 10v9\"/><path d=\"M10 10v9\"/><path d=\"M14 10v9\"/><path d=\"M18 10v9\"/><path d=\"M4 19h16\"/></svg>',trending_up:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m3 17 6-6 4 4 7-7\"/><path d=\"M14 8h6v6\"/></svg>',family_restroom:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"8\" cy=\"5\" r=\"2\"/><circle cx=\"16\" cy=\"5\" r=\"2\"/><path d=\"M8 8v13\"/><path d=\"M5 13h6\"/><path d=\"M16 8v13\"/><path d=\"M13 13h6\"/></svg>',domain:'<svg class=\"jch-svg-icon\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"1\"/><path d=\"M8 7h2\"/><path d=\"M14 7h2\"/><path d=\"M8 11h2\"/><path d=\"M14 11h2\"/><path d=\"M8 15h2\"/><path d=\"M14 15h2\"/></svg>'};function replaceIcons(){document.querySelectorAll('.material-symbols-outlined').forEach(function(el){var key=(el.textContent||'').trim();if(!svg[key]||el.querySelector('svg'))return;el.innerHTML=svg[key];el.setAttribute('aria-hidden','true');});}replaceIcons();setTimeout(replaceIcons,250);setTimeout(replaceIcons,1000);new MutationObserver(replaceIcons).observe(document.body,{childList:true,subtree:true});});";

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
        <style dangerouslySetInnerHTML={{ __html: DIAGNOSIS_IMAGE_STYLE }} />
        <style dangerouslySetInnerHTML={{ __html: SERVICES_ICON_STYLE }} />
        <noscript>
          <link rel="stylesheet" href={FONT_PRIMARY} />
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
