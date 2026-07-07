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
const CONTACT_SELECT_LABEL_SCRIPT = "document.addEventListener('DOMContentLoaded',function(){var select=document.querySelector('#contact-form select');if(select&&!select.hasAttribute('aria-label'))select.setAttribute('aria-label','¿Qué necesitas revisar?');});";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
    <html lang="en">
      <head>
        <HeadContent />
        <style dangerouslySetInnerHTML={{ __html: HERO_H1_SIZE_STYLE }} />
        <noscript>
          <link rel="stylesheet" href={FONT_PRIMARY} />
          <link rel="stylesheet" href={FONT_ICONS} />
        </noscript>
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: CONTACT_SELECT_LABEL_SCRIPT }} />
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
