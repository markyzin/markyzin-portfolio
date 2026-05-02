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
  const [canal, setCanal] = useState("whats");

  const projetos = [
    {
      nome: "Toji Fushiguro (Jujutsu Kaisen) - Pagamento",
      artista: "Vitin Music",
      link: "https://youtu.be/Pe1_zO7k--M",
      id: "Pe1_zO7k--M",
    },
    {
      nome: "YUUKA! (Jujutsu Kaisen Módulo)",
      artista: "VnOficial",
      link: "https://youtu.be/MQUP-C0rPgA",
      id: "MQUP-C0rPgA",
    },
    {
      nome: "Confesso",
      artista: "M4CAIBA",
      link: "https://youtu.be/MaF-sEPlR2E",
      id: "MaF-sEPlR2E",
    },
    {
      nome: "Amanhecer 💔 | (Frieren e Himmel)",
      artista: "Shinosz Feat. Giuly",
      link: "https://youtu.be/kTy0fIOBnko",
      id: "kTy0fIOBnko",
    },
    {
      nome: "Flow Isagi e Bachira ⚽️ 🧩 | (Blue Lock)",
      artista: "LKBBEAT",
      link: "https://youtu.be/0qcbvwHvCIs",
      id: "0qcbvwHvCIs",
    },
  ];

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

 const gerarMensagem = () => {
  return `NOVO PEDIDO PELO SITE

Mixagem + Master: ${mix ? "(sim)" : "(não)"}
Composição: ${comp ? "(sim)" : "(não)"}
Feat: ${feat ? "(sim)" : "(não)"}

Total estimado: R$ ${total}
Indicação: ${indicacao.trim() || "Nenhuma"}

Quero fechar contigo! Como envio o material?`;
};

  const gerarLinkContato = () => {
    const mensagem = encodeURIComponent(gerarMensagem());

    if (canal === "whats") {
      return `https://wa.me/5585996084255?text=${mensagem}`;
    }

    if (canal === "insta") {
      return `https://instagram.com/markyzin_ml`;
    }

    if (canal === "discord") {
      return `https://discord.com/users/markytwo`;
    }

    return "#";
  };

    return (
    <div
      className="min-h-screen text-white font-sans bg-gradient-to-b from-black/80 via-black/90 to-purple-950 relative"
      style={{
        backgroundImage: "url('/banner-markyzin.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 15%",
        backgroundAttachment: "fixed",
      }}
    >
      {/* overlay escuro por cima do banner */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/85 to-purple-950/95 pointer-events-none"></div>

      {/* conteúdo do site */}
      <div className="relative z-10">
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
          >
          
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
              Produtor musical, compositor e artista independente diretamente de Fortaleza.
            </p>
          </motion.div>
        )}

        {/* HERO */}
        <section className="p-10 grid md:grid-cols-2 gap-8 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
            <p className="text-zinc-400">Disponível para trabalhos de:</p>
            <p className="text-2xl font-semibold mt-2">
              Trap • Funk • Drill • R&B • Jersey • Afro • Reggaeton • Hard •
            </p>
            <p className="mt-4 text-purple-400">
              Entre outros estilos musicais !
            </p>
          </motion.div>
        </section>

        {/* PROJETOS */}
        <section className="p-10">
          <h3 className="text-3xl font-bold mb-6 text-purple-400">
            Projetos de Mixagem e Masterização!
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetos.map((p, i) => (
              <a
                key={i}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="bg-zinc-900/80 border border-purple-500/20 rounded-2xl overflow-hidden 
                           hover:-translate-y-2 hover:scale-[1.03] hover:border-purple-400/40 
                           hover:shadow-lg hover:shadow-purple-900/40 
                           transition-transform transition-colors duration-300"
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

        {/* CARRINHO */}
        <section className="p-10">
          <h3 className="text-3xl font-bold mb-6 text-purple-400">Carrinho</h3>

          <p className="text-zinc-400 mb-6 max-w-xl">
            Escolha o serviço desejado, calcule o valor e fale diretamente comigo.
            Atendimento rápido e suporte completo até a entrega final.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* COLUNA ESQUERDA - SERVIÇOS */}
            <div className="bg-zinc-900/80 border border-purple-500/20 rounded-2xl p-6 space-y-4
                            hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-900/40
                            transition duration-300">
              <label className="flex justify-between items-center hover:text-purple-200 transition-colors">
                <span>
                  <input
                    type="checkbox"
                    checked={mix}
                    onChange={() => setMix(!mix)}
                    className="mr-2"
                  />
                  Mixagem + Master
                </span>
                <span>R$100</span>
              </label>

              <label className="flex justify-between items-center hover:text-purple-200 transition-colors">
                <span>
                  <input
                    type="checkbox"
                    checked={comp}
                    onChange={() => setComp(!comp)}
                    className="mr-2"
                  />
                  Composição
                </span>
                <span>R$50</span>
              </label>

              <label className="flex justify-between items-center hover:text-purple-200 transition-colors">
                <span>
                  <input
                    type="checkbox"
                    checked={feat}
                    onChange={() => setFeat(!feat)}
                    className="mr-2"
                  />
                  Feat
                </span>
                <span>R$100</span>
              </label>

              <input
                value={indicacao}
                onChange={(e) => setIndicacao(e.target.value)}
                placeholder="Nome de quem indicou"
                className="w-full mt-4 p-3 rounded-xl bg-black border border-zinc-700 text-sm"
              />
            </div>

            {/* COLUNA DIREITA - RESUMO */}
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

              {erro && <p className="text-red-500 text-sm mt-2">{erro}</p>}

              <button
                onClick={calcularTotal}
                className="mt-6 w-full py-3 bg-purple-500 hover:bg-purple-400 rounded-2xl
                           shadow-md shadow-purple-900/40 hover:shadow-purple-700/60
                           transition duration-200"
              >
                Calcular Total
              </button>

              <div className="mt-6 space-y-2">
                <p className="text-sm text-zinc-400">
                  Escolha onde você quer falar comigo:
                </p>

                <select
                  value={canal}
                  onChange={(e) => setCanal(e.target.value)}
                  className="w-full p-3 rounded-xl bg-black border border-zinc-700 text-sm"
                >
                  <option value="whats">WhatsApp (mais rápido)</option>
                  <option value="discord">Discord (mais rápido)</option>
                  <option value="insta">Instagram</option>
                </select>
              </div>

              <a
                href={podeFechar ? gerarLinkContato() : "#"}
                target="_blank"
                rel="noreferrer"
                className={`block mt-3 text-center w-full py-3 rounded-2xl transition font-semibold ${
                  podeFechar
                    ? "bg-purple-500 hover:bg-purple-400 shadow-md shadow-purple-900/40 hover:shadow-purple-700/60"
                    : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                }`}
                onClick={(e) => {
                  if (!podeFechar) e.preventDefault();
                }}
              >
                {podeFechar
                  ? "Fechar Pedido"
                  : "Selecione a forma mais que mais agradar para fechar"}
              </a>

              <p className="text-xs text-zinc-500 mt-2">
                A mensagem já vai preenchida com os serviços que você escolheu.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="p-10 border-t border-zinc-800 text-zinc-400 text-center">
          © 2026 MarkyZin
        </footer>
      </div>
    </div>
  );
}