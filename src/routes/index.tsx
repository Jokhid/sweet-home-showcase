import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "José Carlos Hidalgo | Asesor Financiero e Hipotecario" },
      { name: "description", content: "Asesoramiento financiero e hipotecario para autónomos y familias. Protege tus ingresos, tu vivienda y tu futuro. Diagnóstico gratuito en Alicante." },
      { property: "og:title", content: "José Carlos Hidalgo | Asesor Financiero" },
      { property: "og:description", content: "Protege tus ingresos, tu vivienda y tu futuro financiero." },
    ],
  }),
  component: Index,
});

const HERO_IMG = "https://lh3.googleusercontent.com/aida/ADBb0ug-vCT7SVs3QtBoux8QXfErk-XR9Y_RCTcxZ3Gv3XnTsBxiEYWU8u92yXMAgslpgIXS1D1i54f1gZRcswk2BGGOLYLzl97JzOXgL5PVTv7M7wVvNpxV5YajAQCr15a7n2GW-MKjQ4_97Fdvo5vM15cqbaInz4D7v3pQRgrg_mrYrEoTKZYz-sh0T2kllDRzPVab7oZc9mcuUMkVN5uSKO5KzZH8QufU7m0Up1fRoHdpaW2hfC2f0yBjwIGc";
const ABOUT_IMG = "https://lh3.googleusercontent.com/aida/ADBb0uhMA4Jivhq7ZDDARdEwtIWCcEAnX-m0NGbk-n9CkgPR2H6GDLP-IuPjkr4ko57cImINfzMkPmFajplWAtIqQ-pIDV8sZ-2lU0U1kJtzfVtFjKEfHK-hOSoZzlINnFqraObdf4CFUsI_nGDatp4mfICoFRXWAvb-kROLwFIDpBAUOJQvCCZ_i779kegbItC0dMWB5htJwjjsEYIxAtfVYP_j0eUiqtq_DpIaYjzNoit_5RpZlMginIoam634";

const Icon = ({ name, className = "" }: { name: string; className?: string }) => (
  <span className={`material-symbols-outlined ${className}`}>{name}</span>
);

const services = [
  { icon: "analytics", title: "Planificación financiera personal", text: "Análisis completo de flujos de caja y objetivos vitales para diseñar una hoja de ruta a medida." },
  { icon: "real_estate_agent", title: "Hipotecas en Alicante", text: "Búsqueda y negociación de las mejores condiciones del mercado para tu vivienda en la zona." },
  { icon: "assured_workload", title: "Protección de ingresos", text: "Seguros de baja laboral y contingencias diseñados específicamente para el perfil autónomo." },
  { icon: "trending_up", title: "Ahorro e inversión", text: "Vehículos eficientes para que tus ahorros batan a la inflación con el riesgo bajo control." },
  { icon: "family_restroom", title: "Salud y protección familiar", text: "Cobertura médica privada y seguros de vida para garantizar la tranquilidad de los tuyos." },
  { icon: "domain", title: "Administración de fincas", text: "Gestión profesional de comunidades, optimizando costes y garantizando la convivencia." },
];

const errors = [
  { n: "01", title: "Piden la hipoteca sin preparar su perfil", text: "Llegan al banco con prisas y sin saber que una preparación de 6 meses ahorra miles en intereses." },
  { n: "02", title: "Confían todo a sus ingresos actuales", text: "Especialmente autónomos. El bienestar de hoy no garantiza la seguridad de mañana sin un plan B real." },
  { n: "03", title: "Preparan la jubilación demasiado tarde", text: "El interés compuesto necesita tiempo. Cada año que esperas, el coste de oportunidad es mayor." },
];

const method = [
  { n: "01.", title: "Analizo tu punto de partida", text: "Sin juicios. Recopilamos datos reales de tu economía actual para tener una base sólida sobre la que construir." },
  { n: "02.", title: "Detecto riesgos y oportunidades", text: "Puntos ciegos donde estás perdiendo dinero o asumiendo un riesgo que no conocías." },
  { n: "03.", title: "Diseño un plan accionable", text: "Recibirás recomendaciones claras y pasos a seguir que tú decides si ejecutar o no." },
];

const faqs = [
  { q: "¿Realmente es gratuito el primer diagnóstico?", a: "Sí, totalmente. Mi objetivo en esta primera toma de contacto es entender si puedo ayudarte. Tú obtienes claridad sobre tu situación y yo entiendo el reto. Sin compromisos." },
  { q: "¿Trabajas con todos los bancos para las hipotecas?", a: "Trabajo con las principales entidades nacionales e internacionales para asegurar que la oferta que te presento es la más competitiva para tu perfil específico." },
  { q: "¿Cuál es la diferencia entre un asesor y el banco?", a: "El director del banco es un empleado de su entidad y vende sus productos. Yo soy un asesor independiente que busca el producto que mejor encaja contigo entre todo el mercado." },
  { q: "¿Atiendes presencialmente en Alicante?", a: "Atiendo presencialmente en toda la zona de Alicante, Altea y Marina Baixa. Si estás fuera, realizo consultas por videollamada con la misma eficacia." },
];

function Index() {
  return (
    <div className="bg-white text-[#1A1A1A]">
      {/* Header */}
      <header className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E5E5]">
        <nav className="flex justify-between items-center w-full px-6 py-6 max-w-[1200px] mx-auto">
          <a className="text-xl font-bold tracking-tighter uppercase" href="#">José Carlos Hidalgo</a>
          <div className="hidden md:flex items-center gap-10">
            {[["Servicios", "#services"], ["Método", "#method"], ["Sobre mí", "#about"], ["FAQ", "#faq"], ["Contacto", "#contact"]].map(([l, h]) => (
              <a key={h} className="text-sm font-medium hover:text-[#FF6B00] transition-colors" href={h}>{l}</a>
            ))}
          </div>
          <a className="bg-[#1A1A1A] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#FF6B00] transition-all" href="https://wa.me/34647506040">WhatsApp</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative pt-20 pb-32 overflow-hidden border-b border-[#E5E5E5]">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center gap-2 text-[#FF6B00] font-bold text-xs uppercase tracking-widest">
                <span className="w-8 h-[2px] bg-[#FF6B00]" />
                ASESORÍA FINANCIERA E HIPOTECARIA
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance">
                Protege tus ingresos, tu vivienda y tu futuro financiero
              </h1>
              <p className="text-xl text-[#4A4A4A] max-w-xl leading-relaxed">
                Asesoramiento financiero e hipotecario para autónomos y familias que quieren tomar decisiones importantes sin improvisar. Analizo tu situación, detecto riesgos y te propongo un plan claro para proteger lo que has construido.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <a className="bg-[#FF6B00] text-white px-10 py-5 font-bold uppercase text-xs tracking-widest hover:bg-[#1A1A1A] transition-all shadow-xl shadow-[#FF6B00]/10" href="#contact">Solicitar diagnóstico gratuito</a>
                <a className="border border-[#1A1A1A] text-[#1A1A1A] px-10 py-5 font-bold uppercase text-xs tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all" href="#services">Ver servicios</a>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-4 border border-[#E5E5E5] -z-10 group-hover:border-[#FF6B00] transition-colors" />
                <img alt="Mortgage planning" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" src={HERO_IMG} />
              </div>
            </div>
          </div>
        </section>

        {/* Trust stats */}
        <section className="py-16 border-b border-[#E5E5E5]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
              {[
                { i: "visibility", t: "360º visión financiera y patrimonial" },
                { i: "map", t: "1 plan claro antes de contratar" },
                { i: "medical_services", t: "0€ diagnóstico inicial" },
              ].map((s, idx) => (
                <div key={s.i} className={`flex flex-col items-center md:items-start gap-4 ${idx === 0 ? "md:pl-0" : "md:pl-12"}`}>
                  <Icon name={s.i} className="text-[#FF6B00] text-4xl" />
                  <p className="text-sm font-bold uppercase tracking-wider">{s.t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Initial Diagnosis */}
        <section className="py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-24 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Antes de decidir, mira bien dónde estás expuesto</h2>
              <div className="w-20 h-2 bg-[#FF6B00]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { n: "01", t: "Ingresos y estabilidad", d: "¿Qué pasaría si mañana no pudieras facturar? Aseguramos tu motor financiero principal." },
                { n: "02", t: "Hipoteca y endeudamiento", d: "Revisión de condiciones y viabilidad para que tu casa sea un activo, no una carga." },
                { n: "03", t: "Ahorro, pensión y protección", d: "Estrategias de largo plazo para que tu nivel de vida no dependa solo de tu trabajo actual." },
              ].map((x) => (
                <div key={x.n} className="space-y-8">
                  <div className="text-[#FF6B00] font-black text-6xl opacity-20">{x.n}</div>
                  <h3 className="text-2xl font-bold">{x.t}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-[100px] bg-[#1A1A1A] text-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="lg:sticky lg:top-32 space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">La mayoría toma decisiones financieras demasiado tarde</h2>
                <p className="text-xl text-gray-400">Evitar los errores comunes es el primer paso para una economía sana. Mi trabajo es anticiparme a ellos.</p>
              </div>
              <div className="space-y-12">
                {errors.map((e) => (
                  <div key={e.n} className="p-10 border border-white/10 hover:border-[#FF6B00] transition-colors">
                    <span className="text-[#FF6B00] font-bold text-xs uppercase tracking-[0.2em] mb-6 block">Error Común {e.n}</span>
                    <h4 className="text-2xl font-bold mb-4">{e.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{e.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-24 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Soluciones para proteger tu economía</h2>
              <p className="text-xl text-[#4A4A4A] max-w-2xl">Un enfoque integral para que todas las piezas de tu puzzle financiero encajen a la perfección.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5]">
              {services.map((s) => (
                <div key={s.title} className="bg-white p-12 hover:bg-[#FF6B00] group transition-colors">
                  <Icon name={s.icon} className="text-[#FF6B00] text-4xl mb-8 group-hover:text-white transition-colors" />
                  <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-[#4A4A4A] mb-10 group-hover:text-white/80 transition-colors">{s.text}</p>
                  <a className="text-xs font-black uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors" href="#contact">
                    Saber más <Icon name="arrow_forward" className="text-sm" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Method */}
        <section id="method" className="py-[100px] border-y border-[#E5E5E5]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div className="space-y-12">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Decidir bien empieza por entender tu situación</h2>
                <div className="space-y-12">
                  {method.map((m) => (
                    <div key={m.n} className="flex gap-8">
                      <span className="text-3xl font-black text-[#FF6B00]">{m.n}</span>
                      <div>
                        <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">{m.title}</h4>
                        <p className="text-[#4A4A4A] leading-relaxed">{m.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-full aspect-square border border-[#E5E5E5] rounded-full flex items-center justify-center p-12">
                  <div className="w-full h-full border border-[#FF6B00] flex items-center justify-center rounded-full">
                    <div className="text-center space-y-2">
                      <Icon name="balance" className="text-[#FF6B00] text-6xl" />
                      <p className="font-bold uppercase tracking-widest text-xs">Equilibrio Financiero</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="absolute inset-0 border border-[#FF6B00] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                  <img alt="José Carlos Hidalgo" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" src={ABOUT_IMG} />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-4">
                  <span className="text-[#FF6B00] font-bold text-xs uppercase tracking-widest">SOBRE MÍ</span>
                  <h2 className="text-5xl font-bold tracking-tight">José Carlos Hidalgo Ortega</h2>
                  <p className="text-2xl font-medium text-[#FF6B00] italic">Tu compañero de viaje hacia la tranquilidad económica.</p>
                </div>
                <div className="space-y-6 text-xl text-[#4A4A4A] leading-relaxed">
                  <p>Soy asesor financiero, gestor hipotecario y administrador de fincas. Mi enfoque no es vender productos, sino gestionar personas y sus miedos financieros.</p>
                  <p>He visto a demasiadas familias sufrir por decisiones tomadas sin información. Mi misión es que tú seas el dueño de tus números, y no al revés.</p>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["Autónomos", "Familias", "Hipotecas", "Protección"].map((t) => (
                    <span key={t} className="border border-[#E5E5E5] px-6 py-2 text-xs font-bold uppercase tracking-widest">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-[#1A1A1A] font-bold">
                  <Icon name="location_on" className="text-[#FF6B00]" />
                  <span className="text-sm uppercase tracking-widest">Alicante · Altea · Marina Baixa · Online</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-[100px] bg-[#F5F5F5]">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl font-bold tracking-tight text-center mb-20 uppercase">Preguntas Frecuentes</h2>
            <div className="space-y-px bg-[#E5E5E5]">
              {faqs.map((f) => (
                <details key={f.q} className="group bg-white">
                  <summary className="flex justify-between items-center cursor-pointer p-8 list-none text-lg font-bold uppercase tracking-tight">
                    <span>{f.q}</span>
                    <Icon name="expand_more" className="group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-8 pb-8 text-[#4A4A4A] leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-[100px]">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">Hablemos de tu tranquilidad financiera</h2>
              <p className="text-xl text-[#4A4A4A] leading-relaxed">Rellena el formulario y me pondré en contacto contigo en menos de 24 horas para agendar tu diagnóstico gratuito.</p>
              <div className="space-y-10 pt-10 border-t border-[#E5E5E5]">
                {[
                  { i: "call", label: "Llámanos", v: "647 50 60 40" },
                  { i: "mail", label: "Email", v: "jose.hidalgo@nnespana.es" },
                ].map((c) => (
                  <div key={c.i} className="flex items-center gap-8 group">
                    <div className="w-16 h-16 bg-[#1A1A1A] flex items-center justify-center text-white group-hover:bg-[#FF6B00] transition-colors">
                      <Icon name={c.i} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">{c.label}</p>
                      <p className="text-2xl font-bold">{c.v}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Field label="Nombre" type="text" placeholder="Tu nombre" />
                  <Field label="Teléfono" type="tel" placeholder="Tu número" />
                </div>
                <Field label="Email" type="email" placeholder="tu@email.com" />
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em]">¿Qué necesitas revisar?</label>
                  <select className="w-full bg-transparent border-0 border-b border-[#E5E5E5] px-0 py-4 focus:ring-0 focus:border-[#FF6B00] transition-all outline-none">
                    <option>Diagnóstico General</option>
                    <option>Nueva Hipoteca</option>
                    <option>Protección (Autónomos)</option>
                    <option>Plan de Jubilación</option>
                    <option>Administración de Fincas</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em]">Mensaje</label>
                  <textarea rows={4} placeholder="Cuéntanos tu situación" className="w-full bg-transparent border-0 border-b border-[#E5E5E5] px-0 py-4 focus:ring-0 focus:border-[#FF6B00] transition-all outline-none placeholder:text-gray-300" />
                </div>
                <button type="submit" className="w-full bg-[#FF6B00] text-white py-6 font-black uppercase text-xs tracking-[0.3em] hover:bg-[#1A1A1A] transition-all shadow-2xl shadow-[#FF6B00]/20">
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] py-24 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="space-y-6 text-center md:text-left">
              <div className="text-2xl font-black tracking-tighter uppercase">José Carlos Hidalgo</div>
              <p className="text-gray-500 text-sm tracking-widest uppercase">Professional Financial &amp; Mortgage Advisory.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {["Privacidad", "Legal", "Cookies", "LinkedIn"].map((l) => (
                <a key={l} className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-[#FF6B00] transition-colors" href="#">{l}</a>
              ))}
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 text-center text-[10px] text-gray-600 uppercase tracking-widest">
            © 2024 JOSÉ CARLOS HIDALGO. TODOS LOS DERECHOS RESERVADOS.
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase tracking-[0.2em]">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full bg-transparent border-0 border-b border-[#E5E5E5] px-0 py-4 focus:ring-0 focus:border-[#FF6B00] transition-all outline-none placeholder:text-gray-300" />
    </div>
  );
}
