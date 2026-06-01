import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ===== NAVIGATION ===== */}
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <a href="/" className={styles.navBrand}>
            <img src="/img/logo.png" alt="GhzHost" className={styles.navLogo} />
            <span className={styles.navName}>GHZHOST</span>
          </a>

          <ul className={styles.navLinks}>
            <li><a href="#servicos" className={styles.navLink}>Serviços</a></li>
            <li><a href="#precos" className={styles.navLink}>Preços</a></li>
            <li><a href="#status" className={styles.navLink}>Status</a></li>
            <li><a href="#contato" className={styles.navLink}>Contato</a></li>
          </ul>

          <a href="#precos" className={`btn btn-primary ${styles.navCta}`}>
            Começar Agora
          </a>

          <button className={styles.mobileMenuBtn} aria-label="Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
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
            TODOS OS SISTEMAS ONLINE
          </span>

          <h1 className={styles.heroTitle}>
            Hospedagem do Futuro
          </h1>

          <p className={styles.heroSubtitle}>
            Hospedagem de próxima geração com <span>servidores quânticos</span>,{" "}
            cloud neural e infraestrutura hiperconectada.{" "}
            <span>Performance de outro planeta</span> para seus projetos.
          </p>

          <div className={styles.heroActions}>
            <a href="#precos" className="btn btn-primary">
              Explorar Planos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
            <a href="#servicos" className="btn btn-ghost">
              Ver Tecnologias
            </a>
          </div>

          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <div className={styles.heroStatValue}>99.98%</div>
              <div className={styles.heroStatLabel}>Uptime Garantido</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatValue}>&lt;5ms</div>
              <div className={styles.heroStatLabel}>Latência Média</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatValue}>∞</div>
              <div className={styles.heroStatLabel}>Escalabilidade</div>
            </div>
            <div className={styles.heroStat}>
              <div className={styles.heroStatValue}>24/7</div>
              <div className={styles.heroStatLabel}>Suporte com IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES BENTO GRID ===== */}
      <section id="servicos" className={styles.services}>
        <div className="container">
          <h2 className="section-title">Tecnologias do Futuro</h2>
          <p className="section-subtitle">
            Infraestrutura projetada para a era pós-quantum. Cada serviço é construído com tecnologia de 2150.
          </p>
        </div>

        <div className={styles.bentoGrid}>
          {/* Card 1 — Cloud VPS (Large) */}
          <div className={`glass-card hud-corners ${styles.bentoCard} ${styles.large}`}>
            <div className={styles.bentoCardGlow} style={{ background: 'var(--cyan)', top: '-50px', right: '-50px' }} />
            <div className={`${styles.bentoCardIcon} ${styles.cyan}`}>⚡</div>
            <span className="tag">mais popular</span>
            <h3 className={styles.bentoCardTitle}>Cloud VPS Neural</h3>
            <p className={styles.bentoCardDesc}>
              Servidores virtuais com processamento neural adaptativo. 
              Recursos escaláveis automaticamente baseados na demanda do seu projeto.
              NVMe de última geração com I/O quântico.
            </p>
            <ul className={styles.bentoCardFeatures}>
              <li>1-16 vCPUs com boost automático</li>
              <li>1-32 GB RAM DDR5 ECC</li>
              <li>NVMe Enterprise com RAID 10</li>
              <li>Rede de 10 Gbps dedicada</li>
              <li>Backup automático diário</li>
              <li>Proteção DDoS incluída</li>
            </ul>

            {/* Terminal preview */}
            <div className={styles.terminalPreview}>
              <div className={styles.terminalHeader}>
                <span className={`${styles.terminalDot} ${styles.red}`} />
                <span className={`${styles.terminalDot} ${styles.yellow}`} />
                <span className={`${styles.terminalDot} ${styles.green}`} />
              </div>
              <div className={styles.terminalBody}>
                <span className={styles.terminalLine}>
                  <span className={styles.terminalPrompt}>ghz@cloud</span>
                  <span className={styles.terminalCmd}> $ deploy --region br-south</span>
                </span>
                <span className={styles.terminalLine}>
                  <span className={styles.terminalOutput}>⠋ Provisionando container neural...</span>
                </span>
                <span className={styles.terminalLine}>
                  <span className={styles.terminalSuccess}>✓ Deploy completo em 2.3s — Online!</span>
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 — Hosting */}
          <div className={`glass-card hud-corners ${styles.bentoCard}`}>
            <div className={styles.bentoCardGlow} style={{ background: 'var(--green)', top: '-30px', right: '-30px' }} />
            <div className={`${styles.bentoCardIcon} ${styles.green}`}>🌐</div>
            <span className="tag green">essencial</span>
            <h3 className={styles.bentoCardTitle}>Hospedagem Web</h3>
            <p className={styles.bentoCardDesc}>
              Hospedagem compartilhada com painel intuitivo, SSL grátis, 
              e deploy automático via Git.
            </p>
            <ul className={styles.bentoCardFeatures}>
              <li>SSL Let&apos;s Encrypt grátis</li>
              <li>cPanel / HestiaCP</li>
              <li>99.98% de uptime</li>
              <li>Deploy via Git push</li>
            </ul>
          </div>

          {/* Card 3 — Gaming */}
          <div className={`glass-card hud-corners ${styles.bentoCard}`}>
            <div className={styles.bentoCardGlow} style={{ background: 'var(--purple)', top: '-30px', left: '-30px' }} />
            <div className={`${styles.bentoCardIcon} ${styles.purple}`}>🎮</div>
            <span className="tag purple">gaming</span>
            <h3 className={styles.bentoCardTitle}>Servidores de Jogos</h3>
            <p className={styles.bentoCardDesc}>
              Minecraft, FiveM, CS2 e mais. Hardware dedicado com 
              proteção anti-DDoS e latência ultra-baixa.
            </p>
            <ul className={styles.bentoCardFeatures}>
              <li>Anti-DDoS Enterprise</li>
              <li>Painel de controle web</li>
              <li>Mods e plugins 1-clique</li>
              <li>Backups automáticos</li>
            </ul>
          </div>

          {/* Card 4 — Revenda */}
          <div className={`glass-card hud-corners ${styles.bentoCard}`}>
            <div className={styles.bentoCardGlow} style={{ background: 'var(--pink)', bottom: '-30px', left: '-30px' }} />
            <div className={`${styles.bentoCardIcon} ${styles.pink}`}>🏢</div>
            <span className="tag pink">business</span>
            <h3 className={styles.bentoCardTitle}>Revenda White-Label</h3>
            <p className={styles.bentoCardDesc}>
              Crie sua própria empresa de hosting. Marca própria,
              DNS personalizado, painel administrativo completo.
            </p>
            <ul className={styles.bentoCardFeatures}>
              <li>Sua marca, seu painel</li>
              <li>DNS whitelabel</li>
              <li>Faturamento integrado</li>
              <li>Suporte técnico incluso</li>
            </ul>
          </div>

          {/* Card 5 — Dedicado */}
          <div className={`glass-card hud-corners ${styles.bentoCard}`}>
            <div className={styles.bentoCardGlow} style={{ background: 'var(--orange)', bottom: '-30px', right: '-30px' }} />
            <div className={`${styles.bentoCardIcon} ${styles.orange}`}>🔥</div>
            <span className="tag">enterprise</span>
            <h3 className={styles.bentoCardTitle}>Dedicados</h3>
            <p className={styles.bentoCardDesc}>
              Hardware exclusivo para projetos de alta performance.
              Acesso root total, rede privada, SLA premium.
            </p>
            <ul className={styles.bentoCardFeatures}>
              <li>Hardware 100% dedicado</li>
              <li>SLA 99.99% garantido</li>
              <li>Rede privada 10 Gbps</li>
              <li>Gerenciamento opcional</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section id="precos" className={styles.pricing}>
        <div className="container">
          <h2 className="section-title">Planos & Preços</h2>
          <p className="section-subtitle">
            Infraestrutura premium com preços acessíveis. Todos os planos incluem proteção DDoS e SSL grátis.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {/* Starter */}
          <div className={`glass-card hud-corners ${styles.priceCard}`}>
            <span className={`tag green ${styles.pricePlanTag}`}>STARTER</span>
            <div className={styles.pricePlanName}>Nebula</div>
            <div className={styles.pricePlanDesc}>Perfeito para sites pessoais e landing pages</div>
            <div className={styles.priceAmount}>
              <span className={styles.priceCurrency}>R$</span>
              <span className={styles.priceValue}>9</span>
              <span className={styles.pricePeriod}>,90/mês</span>
            </div>
            <ul className={styles.priceFeatures}>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                512 MB RAM
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                5 GB SSD NVMe
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                1 Website
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                SSL Grátis
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                Proteção DDoS
              </li>
            </ul>
            <a href="#" className={`btn btn-ghost ${styles.priceBtn}`}>Escolher Plano</a>
          </div>

          {/* Plus — Featured */}
          <div className={`glass-card hud-corners ${styles.priceCard} ${styles.featured}`}>
            <span className={`tag ${styles.pricePlanTag}`}>POPULAR</span>
            <div className={styles.pricePlanName}>Quantum</div>
            <div className={styles.pricePlanDesc}>Ideal para negócios e e-commerces</div>
            <div className={styles.priceAmount}>
              <span className={styles.priceCurrency}>R$</span>
              <span className={styles.priceValue}>29</span>
              <span className={styles.pricePeriod}>,90/mês</span>
            </div>
            <ul className={styles.priceFeatures}>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                2 GB RAM DDR5
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                40 GB NVMe
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                5 Websites
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                Backup Diário
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                2 vCPUs
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                Email Profissional
              </li>
            </ul>
            <a href="#" className={`btn btn-primary ${styles.priceBtn}`}>Escolher Plano</a>
          </div>

          {/* Business */}
          <div className={`glass-card hud-corners ${styles.priceCard}`}>
            <span className={`tag purple ${styles.pricePlanTag}`}>PRO</span>
            <div className={styles.pricePlanName}>Hyperion</div>
            <div className={styles.pricePlanDesc}>Para projetos de alta performance</div>
            <div className={styles.priceAmount}>
              <span className={styles.priceCurrency}>R$</span>
              <span className={styles.priceValue}>99</span>
              <span className={styles.pricePeriod}>,90/mês</span>
            </div>
            <ul className={styles.priceFeatures}>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                8 GB RAM DDR5
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                160 GB NVMe
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                Sites Ilimitados
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                4 vCPUs Dedicados
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                IP Dedicado
              </li>
              <li>
                <svg className="check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                Suporte Prioritário
              </li>
            </ul>
            <a href="#" className={`btn btn-ghost ${styles.priceBtn}`}>Escolher Plano</a>
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
            <div className={styles.statusCardLabel}>Rede</div>
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
          <h2 className="section-title">Tecnologias & Parceiros</h2>
          <p className="section-subtitle">
            Construído com o que há de melhor em infraestrutura cloud.
          </p>
        </div>

        <div className={styles.partnersTrack}>
          <div className={styles.partnerLogo}>☁️ Cloudflare</div>
          <div className={styles.partnerLogo}>🐳 Docker</div>
          <div className={styles.partnerLogo}>⚡ Node.js</div>
          <div className={styles.partnerLogo}>🔷 Oracle Cloud</div>
          <div className={styles.partnerLogo}>🤖 OpenAI</div>
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
            Junte-se a centenas de projetos que já rodam na infraestrutura mais avançada do Brasil.
          </p>
          <div className={styles.ctaActions}>
            <a href="#precos" className="btn btn-primary">
              Começar Agora
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </a>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noreferrer" className="btn btn-ghost">
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
              Infraestruturas hiperconectadas para a próxima era digital. 
              Hospedagem, cloud, gaming e soluções enterprise desde 2020.
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
              <li><a href="#status" className={styles.footerLink}>Status</a></li>
              <li><a href="#" className={styles.footerLink}>Blog</a></li>
              <li><a href="#" className={styles.footerLink}>Parceiros</a></li>
              <li><a href="#" className={styles.footerLink}>Afiliados</a></li>
            </ul>
          </div>

          <div>
            <div className={styles.footerColTitle}>Suporte</div>
            <ul className={styles.footerLinks}>
              <li><a href="#contato" className={styles.footerLink}>Central de Ajuda</a></li>
              <li><a href="#" className={styles.footerLink}>Documentação</a></li>
              <li><a href="#" className={styles.footerLink}>Termos de Uso</a></li>
              <li><a href="#" className={styles.footerLink}>Privacidade</a></li>
              <li><a href="#" className={styles.footerLink}>SLA</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            © 2020-2026 GHZHOST — TODOS OS DIREITOS RESERVADOS
          </div>
          <div className={styles.footerSocials}>
            <a href="#" className={styles.footerSocial} aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.83-.26.83-.57v-2.2c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="#" className={styles.footerSocial} aria-label="Discord">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.32 4.37a19.8 19.8 0 0 0-4.93-1.51.07.07 0 0 0-.08.04c-.21.38-.45.87-.61 1.26a18.27 18.27 0 0 0-5.4 0 12.6 12.6 0 0 0-.62-1.26.08.08 0 0 0-.08-.04 19.74 19.74 0 0 0-4.93 1.51.07.07 0 0 0-.03.03C1.07 8.57.32 12.64.79 16.65a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.1 13.1 13.1 0 0 1-1.87-.9.08.08 0 0 1 0-.12c.13-.09.25-.19.37-.28a.07.07 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.07 0a.07.07 0 0 1 .08 0c.12.1.25.2.37.29a.08.08 0 0 1 0 .12c-.6.35-1.22.65-1.87.9a.08.08 0 0 0-.04.1c.36.7.77 1.37 1.22 2a.08.08 0 0 0 .08.03 19.83 19.83 0 0 0 6-3.03.08.08 0 0 0 .04-.05c.56-5.78-.94-10.8-3.97-15.25a.06.06 0 0 0-.03-.03zM8.02 14.09c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42z"/></svg>
            </a>
            <a href="#" className={styles.footerSocial} aria-label="WhatsApp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.06 4.47.71.3 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zm-5.44 7.43h-.02a9.87 9.87 0 0 1-5.03-1.38l-.36-.22-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.89 9.89zm8.41-18.3A11.82 11.82 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.93c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.73 1.46h.01c6.58 0 11.94-5.35 11.94-11.93a11.87 11.87 0 0 0-3.54-8.47z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
