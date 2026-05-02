import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [openBio, setOpenBio] = useState(false);

  const [mix, setMix] = useState(false);
  const [comp, setComp] = useState(false);
  const [feat, setFeat] = useState(false);
  const [indicacao, setIndicacao] = useState("");
  const [total, setTotal] = useState(0);
  const [erro, setErro] = useState("");

  const calcularTotal = () => {
    let t = 0;
    setErro("");

    if (mix) t += 100;
    if (comp) t += 50;
    if (feat) t += 100;

    const validos = ["vitin music", "vnoficial", "m4caiba", "shinosz"];

    if (indicacao.trim()) {
      if (validos.includes(indicacao.trim().toLowerCase())) {
        t = t * 0.8;
      } else {
        setErro("Indicação inválida");
      }
    }

    setTotal(t);
  };

  const podeFechar = total > 0;

  const gerarLinkWhats = () => {
    const mensagem = `🔥 NOVO PEDIDO - SITE 🔥

🎚 Mixagem + Master: ${mix ? "✅" : "❌"}
✍ Composição: ${comp ? "✅" : "❌"}
🎤 Feat: ${feat ? "✅" : "❌"}

💰 Total estimado: R$ ${total}

Quero fechar contigo! Como funciona o envio do material?`;

    return `https://wa.me/5585996084255?text=${encodeURIComponent(
      mensagem
    )}`;
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans bg-gradient-to-b from-black via-zinc-950 to-purple-950">

      {/* HEADER */}
      <header className="p-8 border-b border-zinc-800 flex justify-between items-center sticky top-0 backdrop-blur-md bg-black/50 z-50">
        <div className="flex items-center gap-4">
<button
  onClick={() => setOpenBio(!openBio)}
  className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg shadow-purple-500/40 hover:shadow-purple-500/70 hover:scale-105 transition duration-300"
>
  <img
    src="/markyzin.png"
    className="w-full h-full object-cover object-center"
    alt="MarkyZin"
  />
</button>
          <h1 className="text-3xl font-bold text-purple-400">MarkyZin</h1>
        </div>

        <a
          href="https://wa.me/5585996084255"
          className="px-4 py-2 bg-purple-500 hover:bg-purple-400 transition text-white rounded-2xl"
        >
          WhatsApp
        </a>
      </header>

      {openBio && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-24 left-6 z-50 w-80 bg-zinc-950/95 border border-purple-500/30 rounded-3xl p-6 shadow-2xl"
        >
          <h3 className="text-xl font-bold mb-2">MarkyZin</h3>
          <p className="text-zinc-400 text-sm mb-3">Produtor Musical</p>
          <p className="text-zinc-300 text-sm leading-6">
            Produtor musical, compositor e artista independente.
            Especialista em mixagem, masterização, composição e feats.
          </p>
        </motion.div>
      )}

      {/* HERO */}
      <section className="p-10">
  <h3 className="text-3xl font-bold mb-6 text-purple-400">
    Projetos
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projetos.map((p, i) => (
      <a
        key={i}
        href={p.link}
        target="_blank"
        rel="noreferrer"
        className="bg-zinc-900/80 border border-purple-500/20 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
      >
        <img
          src={`https://img.youtube.com/vi/${p.id}/hqdefault.jpg`}
          alt={p.nome}
          className="w-full h-40 object-cover"
        />

        <div className="p-4">
          <p className="text-xs text-purple-400 mb-1">YouTube</p>
          <h4 className="font-bold text-sm">{p.nome}</h4>
          <p className="text-zinc-400 text-xs mt-1">{p.artista}</p>
        </div>
      </a>
    ))}
  </div>
</section>
      <section className="p-10 grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Seu som no <span className="text-purple-400">próximo nível</span>
          </h2>
          <p className="text-zinc-400 mb-6 text-lg">
            Mixagem, masterização, composição e feat profissional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-zinc-900/70 border border-purple-500/30 rounded-3xl p-8 shadow-2xl"
        >
          <p className="text-zinc-400">Disponível para jobs</p>
          <p className="text-2xl font-semibold mt-2">
            Trap • Funk • Drill • R&B
          </p>
          <p className="mt-4 text-purple-400">
            Contato rápido e entrega profissional
          </p>
        </motion.div>
      </section>

      {/* CARRINHO */}
      <section className="p-10">
        <h3 className="text-3xl font-bold mb-6 text-purple-400">Carrinho</h3>

        <p className="text-zinc-400 mb-6 max-w-xl">
          Escolha o serviço desejado, calcule o valor e fale direto comigo no WhatsApp.
          Atendimento rápido e suporte completo até a entrega final.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-zinc-900/80 border border-purple-500/20 rounded-2xl p-6 space-y-4">

            <label className="flex justify-between">
              <span>
                <input type="checkbox" checked={mix} onChange={() => setMix(!mix)} /> Mixagem + Master
              </span>
              <span>R$100</span>
            </label>

            <label className="flex justify-between">
              <span>
                <input type="checkbox" checked={comp} onChange={() => setComp(!comp)} /> Composição
              </span>
              <span>R$50</span>
            </label>

            <label className="flex justify-between">
              <span>
                <input type="checkbox" checked={feat} onChange={() => setFeat(!feat)} /> Feat
              </span>
              <span>R$100</span>
            </label>

            <input
              value={indicacao}
              onChange={(e) => setIndicacao(e.target.value)}
              placeholder="Nome de quem indicou"
              className="w-full mt-4 p-3 rounded-xl bg-black border border-zinc-700"
            />
          </div>

          <div className="bg-zinc-900/80 border border-purple-500/20 rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4">Resumo</h4>

            <motion.p
              key={total}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-zinc-300"
            >
              Total: R$ {total}
            </motion.p>

            {erro && (
              <p className="text-red-500 text-sm mt-2">{erro}</p>
            )}

            <button
              onClick={calcularTotal}
              className="mt-6 w-full py-3 bg-purple-500 hover:bg-purple-400 transition rounded-2xl"
            >
              Calcular Total
            </button>

            <a
              href={podeFechar ? gerarLinkWhats() : "#"}
              target="_blank"
              rel="noreferrer"
              className={`block mt-4 text-center w-full py-3 border rounded-2xl transition ${
                podeFechar
                  ? "border-purple-500 hover:bg-purple-500/10"
                  : "border-zinc-700 text-zinc-500 cursor-not-allowed"
              }`}
              onClick={(e) => {
                if (!podeFechar) e.preventDefault();
              }}
            >
              {podeFechar ? "Fechar Pedido no WhatsApp" : "Selecione um serviço"}
            </a>

          </div>
        </div>
      </section>

      <footer className="p-10 border-t border-zinc-800 text-zinc-400 text-center">
        © 2026 MarkyZin • Instagram @markyzin_ml
      </footer>
    </div>
  );
}
const projetos = [
  {
    nome: "Toji Fushiguro (Jujutsu Kaisen) - Pagamento",
    artista: "Vitin Music",
    link: "https://youtu.be/Pe1_zO7k--M",
    id: "Pe1_zO7k--M"
  },
  {
    nome: "YUUKA! (Jujutsu Kaisen Módulo)",
    artista: "VnOficial",
    link: "https://youtu.be/MQUP-C0rPgA",
    id: "MQUP-C0rPgA"
  },
  {
    nome: "Confesso",
    artista: "M4CAIBA",
    link: "https://youtu.be/MaF-sEPlR2E",
    id: "MaF-sEPlR2E"
  },
  {
    nome: "Amanhecer 💔 | (Frieren e Himmel)",
    artista: "Shinosz Feat. Giuly",
    link: "https://youtu.be/kTy0fIOBnko",
    id: "kTy0fIOBnko"
  },
  {
    nome: "Flow Isagi e Bachira ⚽️ 🧩 | (Blue Lock)",
    artista: "LKBBEAT",
    link: "https://youtu.be/0qcbvwHvCIs",
    id: "0qcbvwHvCIs"
  }
];