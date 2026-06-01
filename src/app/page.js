"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  // Navigation State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Settings: Currency & Language
  const [currency, setCurrency] = useState("BRL");
  const [lang, setLang] = useState("PT");

  // Domain search state
  const [domain, setDomain] = useState("");
  const [searchState, setSearchState] = useState("idle"); // idle, searching, success
  const [searchSteps, setSearchSteps] = useState([]);
  const [searchResult, setSearchResult] = useState("");

  // Timeline (Wayback Machine to 2150) state
  const [activeYear, setActiveYear] = useState(2150);

  // Live stats state (dynamic counters)
  const [activeTunnels, setActiveTunnels] = useState(5);
  const [bandwidth, setBandwidth] = useState(3.4);
  const [ddosBlocked, setDdosBlocked] = useState(1420);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Mock live telemetry variation
  useEffect(() => {
    const interval = setInterval(() => {
      setBandwidth(parseFloat((3.2 + Math.random() * 0.6).toFixed(2)));
      setDdosBlocked(prev => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Domain checker simulation
  const handleDomainSearch = (e) => {
    e.preventDefault();
    if (!domain) return;
    
    // Clean domain input
    let cleanDomain = domain.trim().toLowerCase();
    if (!cleanDomain.includes(".")) {
      cleanDomain += ".ghz";
    }

    setSearchState("searching");
    setSearchSteps([]);
    setSearchResult("");

    const steps = [
      "INICIALIZANDO VARREDURA NEURAL NO GRID CLOUDFLARE...",
      "REQUISITANDO STATUS DOS 255 EDGE NODES REGIONAIS...",
      "ANALISANDO PROTOCOLOS DE SEGURANÇA ANTIGOS (2020-2025)...",
      "CONSULTANDO SERVIDORES DE NOMES DE PRÓXIMA GERAÇÃO (ANO 2150)...",
      "VARREDURA CONCLUÍDA COM SUCESSO."
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setSearchSteps(prev => [...prev, step]);
        if (index === steps.length - 1) {
          setSearchState("success");
          setSearchResult(cleanDomain);
        }
      }, (index + 1) * 450);
    });
  };

  // Pricing based on selected Currency
  const getPrice = (plan) => {
    if (currency === "USD") {
      switch (plan) {
        case "nebula": return { val: "1", cents: ",90", period: "/mo", symbol: "$" };
        case "quantum": return { val: "5", cents: ",90", period: "/mo", symbol: "$" };
        case "hyperion": return { val: "19", cents: ",90", period: "/mo", symbol: "$" };
        default: return {};
      }
    } else if (currency === "EUR") {
      switch (plan) {
        case "nebula": return { val: "1", cents: ",70", period: "/mês", symbol: "€" };
        case "quantum": return { val: "5", cents: ",40", period: "/mês", symbol: "€" };
        case "hyperion": return { val: "18", cents: ",20", period: "/mês", symbol: "€" };
        default: return {};
      }
    } else {
      // BRL
      switch (plan) {
        case "nebula": return { val: "9", cents: ",90", period: "/mês", symbol: "R$" };
        case "quantum": return { val: "29", cents: ",90", period: "/mês", symbol: "R$" };
        case "hyperion": return { val: "99", cents: ",90", period: "/mês", symbol: "R$" };
        default: return {};
      }
    }
  };

  return (
    <>
      {/* ===== GLOBAL ENTERPRISE TOP BAR ===== */}
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <div className={styles.telemetryMini}>
            <span className="pulse-dot" />
            <span className={styles.telemetryText}>
              BANDA: <strong>{bandwidth} TB/s</strong> | DDOS BLOCKED: <strong>{ddosBlocked}</strong> | NODES: <strong>255/255</strong>
            </span>
          </div>
          <div className={styles.selectors}>
            {/* Language Selector */}
            <div className={styles.selectorGroup}>
              <span className={styles.selectorLabel}>IDIOMA:</span>
              <button 
                className={`${styles.selectorBtn} ${lang === "PT" ? styles.active : ""}`}
                onClick={() => setLang("PT")}
              >
                PT-BR
              </button>
              <button 
                className={`${styles.selectorBtn} ${lang === "EN" ? styles.active : ""}`}
                onClick={() => setLang("EN")}
              >
                EN
              </button>
              <button 
                className={`${styles.selectorBtn} ${lang === "ES" ? styles.active : ""}`}
                onClick={() => setLang("ES")}
              >
                ES
              </button>
            </div>

            {/* Currency Selector */}
            <div className={styles.selectorGroup}>
              <span className={styles.selectorLabel}>MOEDA:</span>
              <button 
                className={`${styles.selectorBtn} ${currency === "BRL" ? styles.active : ""}`}
                onClick={() => setCurrency("BRL")}
              >
                BRL (R$)
              </button>
              <button 
                className={`${styles.selectorBtn} ${currency === "USD" ? styles.active : ""}`}
                onClick={() => setCurrency("USD")}
              >
                USD ($)
              </button>
              <button 
                className={`${styles.selectorBtn} ${currency === "EUR" ? styles.active : ""}`}
                onClick={() => setCurrency("EUR")}
              >
                EUR (€)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="#" className={styles.navBrand}>
            <img src="/img/logo.png" alt="GhzHost Logo" className={styles.navLogo} />
            <span className={styles.navName}>GHZHOST</span>
          </a>

          <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksActive : ""}`}>
            <li><a href="#rede" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Rede</a></li>
            <li><a href="#servicos" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Serviços</a></li>
            <li><a href="#precos" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Preços</a></li>
            <li><a href="#linha-tempo" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Histórico</a></li>
            <li><a href="#status" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Status</a></li>
            <li><a href="#contato" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Contato</a></li>
            <li className={styles.mobileOnlyCta}>
              <a href="#precos" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Área do Cliente</a>
            </li>
          </ul>

          <div className={styles.navActions}>
            <a href="#precos" className={`btn btn-primary ${styles.navCta}`}>
              Área do Cliente
            </a>

            <button 
              className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.active : ""}`} 
              onClick={toggleMenu} 
              aria-label="Menu de Navegação"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION WITH INTEGRATED DOMAIN CHECKER ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="/img/hero-bg.png"
            alt=""
            className={styles.heroBgImage}
            aria-hidden="true"
          />
          <div className={styles.heroBgOverlay} />
        </div>

        {/* Floating particles */}
        <div className={styles.particles} aria-hidden="true">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 12}s`,
                animationDelay: `${Math.random() * 10}s`,
                width: `${1 + Math.random() * 3}px`,
                height: `${1 + Math.random() * 3}px`,
              }}
            />
          ))}
        </div>

        {/* Scan line */}
        <div className={styles.scanLine} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className="holo-badge">
            <span className="pulse-dot" />
            TODOS OS SISTEMAS ONLINE — ANO 2150
          </span>

          <h1 className={styles.heroTitle}>
            Hospedagem do Futuro
          </h1>

          <p className={styles.heroSubtitle}>
            Desde 2020 decolando as maiores aplicações da web. Voe com a melhor: infraestrutura de hospedagem quântica, cloud neural e edge de latência zero.
          </p>

          {/* ===== DOMAIN SEARCH BAR (Wayback Feature) ===== */}
          <div className={`${styles.domainSearchWrapper} glass-card`}>
            <div className={styles.domainSearchInner}>
              <form onSubmit={handleDomainSearch} className={styles.domainForm}>
                <div className={styles.domainInputGroup}>
                  <span className={styles.domainSearchIcon}>🌐</span>
                  <input
                    type="text"
                    placeholder="Busque seu endereço quântico (.com, .net, .ghz...)"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className={styles.domainInput}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Checar Registro
                </button>
              </form>
            </div>

            {searchState === "searching" && (
              <div className={styles.domainConsole}>
                <div className={styles.consoleHeader}>
                  <span className={styles.consoleTitle}>TERMINAL DE VARREDURA GHZ</span>
                  <span className={styles.pulseText}>ESCANEANDO...</span>
                </div>
                <div className={styles.consoleLogs}>
                  {searchSteps.map((step, idx) => (
                    <div key={idx} className={styles.consoleLine}>
                      <span className={styles.consolePrompt}>&gt;</span> {step}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {searchState === "success" && (
              <div className={styles.domainResultCard}>
                <div className={styles.resultDetails}>
                  <span className={styles.resultCheck}>✓</span>
                  <div>
                    <h4 className={styles.resultTitle}>{searchResult}</h4>
                    <p className={styles.resultDesc}>Disponível para provisionamento automático imediato com proteção Cloudflare Enterprise.</p>
                  </div>
                </div>
                <a href="#precos" className="btn btn-primary btn-sm">Provisionar Agora</a>
              </div>
            )}
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div className={styles.heroStatValue}>99.999%</div>
              <div className={styles.heroStatLabel}>Uptime Histórico</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatValue}>&lt;0.5ms</div>
              <div className={styles.heroStatLabel}>Latência Edge</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatValue}>255</div>
              <div className={styles.heroStatLabel}>Nós Cloudflare</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatValue}>24/7/365</div>
              <div className={styles.heroStatLabel}>Suporte Autônomo</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GLOBAL EDGE NETWORK SECTION (Country Subdomains Showcase) ===== */}
      <section id="rede" className={styles.edgeSection}>
        <div className="container">
          <h2 className="section-title">Rede Global Autônoma</h2>
          <p className="section-subtitle">
            Nossa arquitetura conta com roteamento inteligente distribuído em subdomínios locais para 255 países e territórios. Servindo sua aplicação instantaneamente em qualquer lugar.
          </p>

          <div className={styles.edgeGrid}>
            <div className={`glass-card ${styles.edgeCard} ${styles.mapCard}`}>
              <div className={styles.mapContainer}>
                {/* Visual grid representing the global presence */}
                <div className={styles.gridOverlay}>
                  <div className={`${styles.nodeDot} ${styles.active}`} style={{ top: "35%", left: "20%" }} title="US Node"><span className={styles.nodeRipple} />US</div>
                  <div className={`${styles.nodeDot} ${styles.active}`} style={{ top: "70%", left: "30%" }} title="BR Node (Hub)"><span className={styles.nodeRipple} />BR</div>
                  <div className={`${styles.nodeDot} ${styles.active}`} style={{ top: "25%", left: "50%" }} title="DE Node"><span className={styles.nodeRipple} />DE</div>
                  <div className={`${styles.nodeDot} ${styles.active}`} style={{ top: "35%", left: "75%" }} title="JP Node"><span className={styles.nodeRipple} />JP</div>
                  <div className={`${styles.nodeDot} ${styles.active}`} style={{ top: "65%", left: "80%" }} title="AU Node"><span className={styles.nodeRipple} />AU</div>
                </div>
              </div>
            </div>

            <div className={styles.edgeDetails}>
              <h3 className={styles.edgeDetailsTitle}>255 Subdomínios de Resolução Rápida</h3>
              <p className={styles.edgeDetailsDesc}>
                Através de nossa infraestrutura integrada ao Cloudflare Edge, geramos túneis de borda criptografados dedicados por país. Cada requisição é resolvida a milissegundos do seu usuário final.
              </p>
              <div className={styles.edgeSubdomainsTrack}>
                {["br.ghzhost.com", "us.ghzhost.com", "de.ghzhost.com", "jp.ghzhost.com", "uk.ghzhost.com", "ca.ghzhost.com", "fr.ghzhost.com", "es.ghzhost.com", "cn.ghzhost.com", "ar.ghzhost.com"].map((sub, i) => (
                  <span key={i} className={styles.subdomainPill}>
                    <span className={styles.subdomainDot} />
                    {sub}
                  </span>
                ))}
                <span className={styles.subdomainPillMore}>+245 subdomínios nacionais ativos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES BENTO GRID ===== */}
      <section id="servicos" className={styles.services}>
        <div className="container">
          <h2 className="section-title">Soluções Corporativas</h2>
          <p className="section-subtitle">
            Infraestrutura de grande escala construída ao longo de 5 anos de evolução constante. Desempenho definitivo.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Card 1 — Cloud VPS (Large) */}
          <div className={`glass-card hud-corners ${styles.bentoCard} ${styles.large}`}>
            <div className={styles.bentoCardGlow} style={{ background: 'var(--cyan)', top: '-50px', right: '-50px' }} />
            <div className={`${styles.bentoCardIcon} ${styles.cyan}`}>⚡</div>
            <span className="tag">Recomendado</span>
            <h3 className={styles.bentoCardTitle}>Cloud VPS Neural</h3>
            <p className={styles.bentoCardDesc}>
              Instâncias de processamento inteligente com hypervisors redundantes. Redes internas isoladas por túneis Cloudflare, garantindo que o seu servidor privado permaneça oculto e seguro contra invasões de qualquer escala.
            </p>
            <ul className={styles.bentoCardFeatures}>
              <li>Processadores AMD EPYC de última geração</li>
              <li>Virtualização KVM nativa com performance de hardware real</li>
              <li>Conexão de rede Gigabit isolada com DDoS proteção de 2 Tbps</li>
              <li>Redundância de armazenamento por RAID 10 distribuído</li>
              <li>Console HTML5 e API administrativa completa</li>
            </ul>

            {/* Terminal preview */}
            <div className={styles.terminalPreview}>
              <div className={styles.terminalHeader}>
                <span className={`${styles.terminalDot} ${styles.red}`} />
                <span className={`${styles.terminalDot} ${styles.yellow}`} />
                <span className={`${styles.terminalDot} ${styles.green}`} />
                <span className={styles.terminalTitle}>ghz-node-terminal</span>
              </div>
              <div className={styles.terminalBody}>
                <span className={styles.terminalLine}>
                  <span className={styles.terminalPrompt}>ghzhost@cluster</span>
                  <span className={styles.terminalCmd}> $ status --all-tunnels</span>
                </span>
                <span className={styles.terminalLine}>
                  <span className={styles.terminalOutput}>▶ GHZ-INTRANET (10 Serviços Ativos) : ONLINE [Uptime: 100%]</span>
                </span>
                <span className={styles.terminalLine}>
                  <span className={styles.terminalOutput}>▶ GHZ-INFRA (Hub Central)         : ONLINE [Uptime: 99.99%]</span>
                </span>
                <span className={styles.terminalLine}>
                  <span className={styles.terminalSuccess}>✓ Todos os túneis de rede operando perfeitamente.</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 — Hosting */}
          <div className={`glass-card hud-corners ${styles.bentoCard}`}>
            <div className={styles.bentoCardGlow} style={{ background: 'var(--green)', top: '-30px', right: '-30px' }} />
            <div className={`${styles.bentoCardIcon} ${styles.green}`}>🌐</div>
            <span className="tag green">Essencial</span>
            <h3 className={styles.bentoCardTitle}>Hospedagem Web</h3>
            <p className={styles.bentoCardDesc}>
              Aplicações web clássicas, sites corporativos e blogs com painel intuitivo e otimização avançada de cache em nível de servidor.
            </p>
            <ul className={styles.bentoCardFeatures}>
              <li>SSL ilimitado com renovação automática</li>
              <li>Bancos de dados MySQL/PostgreSQL de alto IOPS</li>
              <li>Migração gratuita e assistida da sua hospedagem</li>
              <li>Painel intuitivo de controle multi-linguagem</li>
            </ul>
          </div>

          {/* Card 3 — Gaming */}
          <div className={`glass-card hud-corners ${styles.bentoCard}`}>
            <div className={styles.bentoCardGlow} style={{ background: 'var(--purple)', top: '-30px', left: '-30px' }} />
            <div className={`${styles.bentoCardIcon} ${styles.purple}`}>🎮</div>
            <span className="tag purple">Gaming</span>
            <h3 className={styles.bentoCardTitle}>Servidores de Jogos</h3>
            <p className={styles.bentoCardDesc}>
              A hospedagem gamer que consagrou a GhzHost. Hospede Minecraft, FiveM, CS2 e outros títulos com latência baixíssima no Brasil.
            </p>
            <ul className={styles.bentoCardFeatures}>
              <li>Processadores Intel Core i9 de altíssima frequência</li>
              <li>Proteção DDoS direcionada a protocolos de jogos</li>
              <li>Painel Pterodactyl simplificado e completo</li>
              <li>Instalador de plugins e mods de 1-clique</li>
            </ul>
          </div>

          {/* Card 4 — Revenda */}
          <div className={`glass-card hud-corners ${styles.bentoCard}`}>
            <div className={styles.bentoCardGlow} style={{ background: 'var(--pink)', bottom: '-30px', left: '-30px' }} />
            <div className={`${styles.bentoCardIcon} ${styles.pink}`}>🏢</div>
            <span className="tag pink">Revenda</span>
            <h3 className={styles.bentoCardTitle}>Revenda White-Label</h3>
            <p className={styles.bentoCardDesc}>
              Ideal para agências de design, programadores e revendedores. Monte sua própria hospedagem com a nossa marca oculta.
            </p>
            <ul className={styles.bentoCardFeatures}>
              <li>Painel administrativo de controle de contas</li>
              <li>Branding 100% customizado com sua logo</li>
              <li>Servidores de nomes (DNS) privados</li>
              <li>Instalação fácil via WHMCS com faturamento local</li>
            </ul>
          </div>

          {/* Card 5 — Dedicado */}
          <div className={`glass-card hud-corners ${styles.bentoCard}`}>
            <div className={styles.bentoCardGlow} style={{ background: 'var(--orange)', bottom: '-30px', right: '-30px' }} />
            <div className={`${styles.bentoCardIcon} ${styles.orange}`}>🔥</div>
            <span className="tag">Dedicados</span>
            <h3 className={styles.bentoCardTitle}>Servidores Dedicados</h3>
            <p className={styles.bentoCardDesc}>
              Hardware 100% corporativo sob medida para a sua corporação. Isolamento físico completo com redundância energética e de conectividade.
            </p>
            <ul className={styles.bentoCardFeatures}>
              <li>Acesso IPMI/KVM total via console seguro</li>
              <li>Opções de links redundantes de 10 Gbps a 40 Gbps</li>
              <li>Atendimento prioritário com SLA de 4h para hardware</li>
              <li>Disponibilidade garantida por contrato formal</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section id="precos" className={styles.pricing}>
        <div className="container">
          <h2 className="section-title">Planos & Preços</h2>
          <p className="section-subtitle">
            Hospede seus projetos em uma estrutura sólida com os melhores custos. Faturamento autônomo suportando 33 moedas globais.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {/* Starter */}
          <div className={`glass-card hud-corners ${styles.priceCard}`}>
            <span className={`tag green ${styles.pricePlanTag}`}>STARTER</span>
            <div className={styles.pricePlanName}>Nebula</div>
            <div className={styles.pricePlanDesc}>Desenvolvimento e sites informativos</div>
            <div className={styles.priceAmount}>
              <span className={styles.priceCurrency}>{getPrice("nebula").symbol}</span>
              <span className={styles.priceValue}>{getPrice("nebula").val}</span>
              <span className={styles.pricePeriod}>{getPrice("nebula").cents}{getPrice("nebula").period}</span>
            </div>
            <ul className={styles.priceFeatures}>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                1 vCPU EPYC
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                1 GB RAM DDR5
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                15 GB Armazenamento NVMe
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                Rede 1 Gbps (DDoS Protegida)
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                SSL / IP Quântico Compartilhado
              </li>
            </ul>
            <a href="#" className={`btn btn-ghost ${styles.priceBtn}`}>Adquirir Plano</a>
          </div>

          {/* Plus — Featured */}
          <div className={`glass-card hud-corners ${styles.priceCard} ${styles.featured}`}>
            <span className={`tag ${styles.pricePlanTag}`}>MAIS POPULAR</span>
            <div className={styles.pricePlanName}>Quantum</div>
            <div className={styles.pricePlanDesc}>Aplicações web ativas e servidores de jogos</div>
            <div className={styles.priceAmount}>
              <span className={styles.priceCurrency}>{getPrice("quantum").symbol}</span>
              <span className={styles.priceValue}>{getPrice("quantum").val}</span>
              <span className={styles.pricePeriod}>{getPrice("quantum").cents}{getPrice("quantum").period}</span>
            </div>
            <ul className={styles.priceFeatures}>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                2 vCPUs AMD EPYC Dedicated
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                4 GB RAM DDR5 ECC
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                50 GB NVMe de Alto IOPS
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                Rede 10 Gbps (Proteção DDoS Completa)
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                Backup Semanal Automático
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                Túnel de Rede Privado
              </li>
            </ul>
            <a href="#" className={`btn btn-primary ${styles.priceBtn}`}>Adquirir Plano</a>
          </div>

          {/* Business */}
          <div className={`glass-card hud-corners ${styles.priceCard}`}>
            <span className={`tag purple ${styles.pricePlanTag}`}>ENTERPRISE</span>
            <div className={styles.pricePlanName}>Hyperion</div>
            <div className={styles.pricePlanDesc}>Negócios de grande escala e clusters</div>
            <div className={styles.priceAmount}>
              <span className={styles.priceCurrency}>{getPrice("hyperion").symbol}</span>
              <span className={styles.priceValue}>{getPrice("hyperion").val}</span>
              <span className={styles.pricePeriod}>{getPrice("hyperion").cents}{getPrice("hyperion").period}</span>
            </div>
            <ul className={styles.priceFeatures}>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                6 vCPUs AMD EPYC Dedicados
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                16 GB RAM DDR5 ECC
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                180 GB NVMe Corporativo
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                Rede Privada Isolada 10 Gbps
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                IP Dedicado e DNS Próprio
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                Backups Diários com Retenção
              </li>
            </ul>
            <a href="#" className={`btn btn-ghost ${styles.priceBtn}`}>Adquirir Plano</a>
          </div>
        </div>
      </section>

      {/* ===== INTERACTIVE WAYBACK TIMELINE SECTION (5 Years of Evolution to 2150) ===== */}
      <section id="linha-tempo" className={styles.timelineSection}>
        <div className="container">
          <h2 className="section-title">Nossa Evolução Histórica</h2>
          <p className="section-subtitle">
            Nascida em 2020, a GhzHost consolidou-se como um gigante da infraestrutura. Acompanhe a nossa trajetória do clássico até a revolução quântica.
          </p>

          <div className={`${styles.timelineControls} glass-card`}>
            {[2020, 2025, 2150].map((year) => (
              <button
                key={year}
                className={`${styles.timelineTabBtn} ${activeYear === year ? styles.active : ""}`}
                onClick={() => setActiveYear(year)}
              >
                <span className={styles.yearValue}>{year}</span>
                <span className={styles.yearStatus}>
                  {year === 2020 && "Fundação"}
                  {year === 2025 && "Descentralização"}
                  {year === 2150 && "Fusão Quântica"}
                </span>
              </button>
            ))}
          </div>

          <div className={styles.timelineContentWrapper}>
            {activeYear === 2020 && (
              <div className={`glass-card hud-corners ${styles.timelineContentCard}`}>
                <div className={styles.timelineGrid}>
                  <div className={styles.timelineInfo}>
                    <span className="tag green">FASE I</span>
                    <h3 className={styles.timelineCardTitle}>Fundação e Consolidação</h3>
                    <p className={styles.timelineCardDesc}>
                      A GhzHost inicia suas operações. Equipados com o painel WHMCS e template customizado &ldquo;GHZ&rdquo;, fomos pioneiros no suporte global com compatibilidade nativa para 26 idiomas e 33 moedas. Oferecendo hospedagem web estável e confiável para clientes em todo o território nacional e internacional.
                    </p>
                    <div className={styles.timelineTags}>
                      <span className={styles.techBadge}>WHMCS Core</span>
                      <span className={styles.techBadge}>CPanel</span>
                      <span className={styles.techBadge}>26 Idiomas</span>
                      <span className={styles.techBadge}>33 Moedas</span>
                    </div>
                  </div>
                  <div className={styles.timelineVisual}>
                    <div className={styles.mockTerminal}>
                      <div className={styles.terminalHeader}>
                        <span className={styles.terminalTitle}>whmcs_logger_2020.log</span>
                      </div>
                      <div className={styles.terminalBody}>
                        <code>
                          [2020-10-15 08:32:10] SYSTEM: Inicializando template &ldquo;GHZ&rdquo;...<br />
                          [2020-10-15 08:32:12] DB: Conexão bem-sucedida ao banco WHMCS.<br />
                          [2020-10-15 08:32:15] EDGE: Redirecionamento de país configurado para br.ghzhost.com.<br />
                          <span className={styles.terminalSuccess}>[2020-10-15 08:32:16] SUCCESS: GhzHost está online e faturando!</span>
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeYear === 2025 && (
              <div className={`glass-card hud-corners ${styles.timelineContentCard}`}>
                <div className={styles.timelineGrid}>
                  <div className={styles.timelineInfo}>
                    <span className="tag purple">FASE II</span>
                    <h3 className={styles.timelineCardTitle}>Provedor de Nuvem Descentralizada</h3>
                    <p className={styles.timelineCardDesc}>
                      Com a evolução do cloud computing, a GhzHost expande sua capacidade para a Akash Network, oferecendo compute descentralizado de alta performance. Consolidamos nosso domínio em hospedagem de servidores de jogos de alto rendimento (s1-br.ghzhost.com) e integramos os primeiros túneis seguros Cloudflare para isolamento completo de redes.
                    </p>
                    <div className={styles.timelineTags}>
                      <span className={styles.techBadge}>Akash Network</span>
                      <span className={styles.techBadge}>Cloudflare Tunnels</span>
                      <span className={styles.techBadge}>Game Nodes</span>
                      <span className={styles.techBadge}>Docker Hub</span>
                    </div>
                  </div>
                  <div className={styles.timelineVisual}>
                    <div className={styles.mockTerminal}>
                      <div className={styles.terminalHeader}>
                        <span className={styles.terminalTitle}>akash_provider_status.yml</span>
                      </div>
                      <div className={styles.terminalBody}>
                        <code>
                          provider: aka-main-1.ghzhost.com<br />
                          status: active<br />
                          attributes:<br />
                          &nbsp;&nbsp;capabilities/cpu: arm64 / amd64<br />
                          &nbsp;&nbsp;network/tunnels: 5 active tunnels linked (GHZ-INFRA)<br />
                          <span className={styles.terminalSuccess}>[SYSTEM] Hospedando cargas de trabalho descentralizadas na nuvem.</span>
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeYear === 2150 && (
              <div className={`glass-card hud-corners ${styles.timelineContentCard}`}>
                <div className={styles.timelineGrid}>
                  <div className={styles.timelineInfo}>
                    <span className="tag">FASE III</span>
                    <h3 className={styles.timelineCardTitle}>Era Quântica e Autonomia Total</h3>
                    <p className={styles.timelineCardDesc}>
                      A consolidação definitiva da GhzHost. Nossos servidores operam no topo da tecnologia de computação quântica e redes neurais. A gestão do faturamento e provisionamento tornou-se 100% autônoma através da integração de inteligência artificial descentralizada. Performance interplanetária com latência sub-milissinal.
                    </p>
                    <div className={styles.timelineTags}>
                      <span className={styles.techBadge}>Computação Quântica</span>
                      <span className={styles.techBadge}>Faturamento Autônomo</span>
                      <span className={styles.techBadge}>Túneis Neurais</span>
                      <span className={styles.techBadge}>Brian IA</span>
                    </div>
                  </div>
                  <div className={styles.timelineVisual}>
                    <div className={styles.mockTerminal}>
                      <div className={styles.terminalHeader}>
                        <span className={styles.terminalTitle}>quantum_brian_core.sh</span>
                      </div>
                      <div className={styles.terminalBody}>
                        <code>
                          $ brian --status --uptime<br />
                          [BRIAN] Conexão neural estabelecida com a GhzHost.<br />
                          [BRIAN] Faturamento via Pix ativado. Provisionamento 0s.<br />
                          [BRIAN] Monitorando status da rede global em tempo real.<br />
                          <span className={styles.terminalSuccess}>[BRIAN-CORE] Gerando receita recorrente autônoma: ONLINE.</span>
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== STATUS BAR ===== */}
      <section id="status" className={styles.statusBar}>
        <div className="container">
          <h2 className="section-title">Status dos Servidores</h2>
          <p className="section-subtitle">
            Monitoramento em tempo real de toda a infraestrutura GhzHost.
          </p>
        </div>

        <div className={styles.statusGrid}>
          <div className={`glass-card ${styles.statusCard}`}>
            <div className={styles.statusCardHeader}>
              <span className="pulse-dot" />
              <span className={styles.statusCardName}>COMPUTE</span>
            </div>
            <div className={styles.statusCardUptime}>99.99%</div>
            <div className={styles.statusCardLabel}>Processamento</div>
          </div>

          <div className={`glass-card ${styles.statusCard}`}>
            <div className={styles.statusCardHeader}>
              <span className="pulse-dot" />
              <span className={styles.statusCardName}>STORAGE</span>
            </div>
            <div className={styles.statusCardUptime}>99.98%</div>
            <div className={styles.statusCardLabel}>Armazenamento</div>
          </div>

          <div className={`glass-card ${styles.statusCard}`}>
            <div className={styles.statusCardHeader}>
              <span className="pulse-dot" />
              <span className={styles.statusCardName}>NETWORK</span>
            </div>
            <div className={styles.statusCardUptime}>99.97%</div>
            <div className={styles.statusCardLabel}>Túneis Redundantes</div>
          </div>

          <div className={`glass-card ${styles.statusCard}`}>
            <div className={styles.statusCardHeader}>
              <span className="pulse-dot" />
              <span className={styles.statusCardName}>CDN GLOBAL</span>
            </div>
            <div className={styles.statusCardUptime}>100%</div>
            <div className={styles.statusCardLabel}>Cloudflare Edge</div>
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className={styles.partners}>
        <div className="container">
          <h2 className="section-title">Parceiros & Ecossistema</h2>
          <p className="section-subtitle">
            Integrado nativamente com as melhores e mais robustas tecnologias do mercado mundial.
          </p>
        </div>

        <div className={styles.partnersTrack}>
          <div className={styles.partnerLogo}>☁️ Cloudflare</div>
          <div className={styles.partnerLogo}>🐳 Docker</div>
          <div className={styles.partnerLogo}>⚡ Node.js</div>
          <div className={styles.partnerLogo}>🔷 Akash Network</div>
          <div className={styles.partnerLogo}>🪙 Mercado Pago</div>
          <div className={styles.partnerLogo}>▲ Vercel</div>
          <div className={styles.partnerLogo}>🔐 Let&apos;s Encrypt</div>
          <div className={styles.partnerLogo}>🐧 Linux</div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section id="contato" className={styles.cta}>
        <div className={`glass-card hud-corners ${styles.ctaBox}`}>
          <h2 className={styles.ctaTitle}>
            Pronto para o Futuro?
          </h2>
          <p className={styles.ctaDesc}>
            Junte-se a milhares de projetos hospedados no ecossistema autónomo de hosting mais estável e inovador.
          </p>
          <div className={styles.ctaActions}>
            <a href="#precos" className="btn btn-primary">
              Começar Agora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
            <a href="https://wa.me/5553991844430" target="_blank" rel="noreferrer" className="btn btn-ghost">
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.footerBrandName}>GHZHOST</div>
            <p className={styles.footerBrandDesc}>
              Infraestrutura de nuvem, gaming e hospedagem quântica de alto desempenho. Conectando e operando soluções corporativas de forma autônoma desde 2020.
            </p>
          </div>

          <div>
            <div className={styles.footerColTitle}>Serviços</div>
            <ul className={styles.footerLinks}>
              <li><a href="#servicos" className={styles.footerLink}>Cloud VPS</a></li>
              <li><a href="#servicos" className={styles.footerLink}>Hospedagem Web</a></li>
              <li><a href="#servicos" className={styles.footerLink}>Servidores de Jogos</a></li>
              <li><a href="#servicos" className={styles.footerLink}>Revenda</a></li>
              <li><a href="#servicos" className={styles.footerLink}>Dedicados</a></li>
            </ul>
          </div>

          <div>
            <div className={styles.footerColTitle}>Empresa</div>
            <ul className={styles.footerLinks}>
              <li><a href="#" className={styles.footerLink}>Sobre Nós</a></li>
              <li><a href="#status" className={styles.footerLink}>Status da Rede</a></li>
              <li><a href="#linha-tempo" className={styles.footerLink}>Linha do Tempo</a></li>
              <li><a href="#rede" className={styles.footerLink}>Rede Global</a></li>
              <li><a href="#" className={styles.footerLink}>Parceiros</a></li>
            </ul>
          </div>

          <div>
            <div className={styles.footerColTitle}>Suporte</div>
            <ul className={styles.footerLinks}>
              <li><a href="https://wa.me/5553991844430" target="_blank" rel="noreferrer" className={styles.footerLink}>Central de Suporte</a></li>
              <li><a href="#" className={styles.footerLink}>Documentação</a></li>
              <li><a href="#" className={styles.footerLink}>Termos de Serviço</a></li>
              <li><a href="#" className={styles.footerLink}>Privacidade</a></li>
              <li><a href="#" className={styles.footerLink}>SLA Garantido</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            © 2020-2026 GHZHOST — CNPJ 38.257.654/0001-87 — TODOS OS DIREITOS RESERVADOS
          </div>
          <div className={styles.footerSocials}>
            <a href="https://github.com/ghzhost" target="_blank" rel="noreferrer" className={styles.footerSocial} aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.57v-2.2c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://wa.me/5553991844430" target="_blank" rel="noreferrer" className={styles.footerSocial} aria-label="WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zm-5.44 7.43h-.02a9.87 9.87 0 0 1-5.03-1.38l-.36-.22-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.89 9.89zm8.41-18.3A11.82 11.82 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.58 0 11.94-5.35 11.94-11.93a11.87 11.87 0 0 0-3.54-8.47z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
