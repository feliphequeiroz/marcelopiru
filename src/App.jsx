const WHATSAPP = "https://wa.me/5511984365477";
const EMAIL = "contato@marcelopiru.com.br";

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-black px-4 py-8 text-zinc-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-300">
            MVP React + Vite + Tailwind
          </span>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            Marcelo Piru
          </h1>

          <p className="mt-4 max-w-3xl text-lg text-zinc-300 sm:text-xl">
            Um ponto de entrada simples e forte para transformar audiência em{" "}
            <strong className="text-zinc-100">
              parcerias, negócios e oportunidades reais
            </strong>
            .
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-5 font-bold text-zinc-950 transition hover:-translate-y-0.5"
              href={`${WHATSAPP}?text=Ol%C3%A1%2C+quero+falar+sobre+parceria+com+Marcelo+Piru`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 font-bold"
              href="#frentes"
            >
              Ver frentes de negócio
            </a>
          </div>
        </section>

        <section id="frentes" className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">
              Comercial
            </p>
            <h2 className="mt-2 text-2xl font-bold">Parcerias e patrocínio</h2>
            <p className="mt-3 text-zinc-300">
              Marcas, empresas e iniciativas que queiram construir ações
              comerciais, ativações e presença com contexto certo.
            </p>
            <a
              className="mt-4 inline-flex font-bold"
              href={`${WHATSAPP}?text=Quero+falar+sobre+parceria+comercial+com+Marcelo+Piru`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir conversa
            </a>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">
              Mídia
            </p>
            <h2 className="mt-2 text-2xl font-bold">Conteúdo e divulgação</h2>
            <p className="mt-3 text-zinc-300">
              Espaço para publis, collabs, participações, entrevistas e formatos
              que façam sentido para a audiência.
            </p>
            <a
              className="mt-4 inline-flex font-bold"
              href={`mailto:${EMAIL}?subject=M%C3%ADdia%20e%20Divulga%C3%A7%C3%A3o`}
            >
              Enviar e-mail
            </a>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-extrabold uppercase tracking-wider text-zinc-400">
              Projetos
            </p>
            <h2 className="mt-2 text-2xl font-bold">Negócios e operações</h2>
            <p className="mt-3 text-zinc-300">
              Projetos com foco em resultado, retenção, aquisição e construção de
              novas alavancas de receita.
            </p>
            <a
              className="mt-4 inline-flex font-bold"
              href={`${WHATSAPP}?text=Quero+falar+sobre+projeto+ou+opera%C3%A7%C3%A3o+com+Marcelo+Piru`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar agora
            </a>
          </article>
        </section>
      </div>
    </main>
  );
}
