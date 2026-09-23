const universes = [
  ['Facial', 'Botox, limpeza de pele, peelings e fios PDO', '01'],
  ['Corporal', 'Drenagem, Drenodeep, PEIM e cuidados corporais', '02'],
  ['Massoterapia', 'Relaxante, terapêutica, Tui-Ná e liberação miofascial', '03'],
  ['Terapias Integrativas', 'Acupuntura, Reiki, auriculoterapia e sound healing', '04'],
  ['Beleza & Olhar', 'Cílios, brow lamination e design de sobrancelhas', '05'],
  ['Saúde & Nutrição', 'Nutrição, psicologia e cuidado integrado', '06'],
]

const treatments = [
  ['Botox', 'Estética facial'],
  ['Limpeza de Pele LED Skin Detox', 'Estética facial'],
  ['Drenagem Linfática', 'Estética corporal'],
  ['Massagem Relaxante', 'Massoterapia'],
  ['Acupuntura', 'Terapias integrativas'],
  ['Reiki', 'Bem-estar'],
]

const reviews = [
  'Atendimento acolhedor e ambiente muito agradável.',
  'Experiência cuidadosa do início ao fim.',
  'Equipe atenciosa e espaço que transmite tranquilidade.'
]

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Bellez">BELLEZ<span>Estética Integrativa</span></a>
        <nav className="desktopNav">
          <a href="#tratamentos">Tratamentos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="navCta" href="https://www.trinks.com/bellez-estetica" target="_blank" rel="noreferrer">Agendar</a>
      </header>

      <section id="top" className="hero shell">
        <div className="heroCopy reveal">
          <p className="eyebrow">Estética · Saúde · Bem-estar</p>
          <h1>Cuidado que começa por você.</h1>
          <p className="lede">Uma experiência de estética integrativa que reúne beleza, equilíbrio e bem-estar em um só lugar.</p>
          <div className="heroActions">
            <a className="btn primary" href="#tratamentos">Conhecer tratamentos</a>
            <a className="btn ghost" href="https://www.trinks.com/bellez-estetica" target="_blank" rel="noreferrer">Agendar horário</a>
          </div>
          <div className="trustLine"><strong>5,0</strong><span>★★★★★</span><small>Google · centenas de avaliações</small></div>
        </div>
        <div className="heroVisual">
          <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=88" alt="Ambiente de estética e cuidado" />
          <div className="floatingNote"><span>Um espaço</span><strong>para o seu momento.</strong></div>
        </div>
      </section>

      <section id="tratamentos" className="section shell">
        <div className="sectionHead">
          <p className="eyebrow">Universos Bellez</p>
          <h2>Encontre o cuidado que combina com seu momento.</h2>
          <p>Uma navegação mais humana: primeiro você entende a área de cuidado, depois escolhe o tratamento ideal.</p>
        </div>
        <div className="universeGrid">
          {universes.map(([title, text, num]) => (
            <article className="universeCard" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#destaques">Explorar <b>↗</b></a>
            </article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="manifesto">
        <div className="manifestoImage"><img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=88" alt="Momento de bem-estar" /></div>
        <div className="manifestoCopy">
          <p className="eyebrow light">Experiência Bellez</p>
          <h2>Beleza também é sentir-se bem.</h2>
          <p>A proposta vai além de procedimentos isolados. Estética facial e corporal, massoterapia, terapias integrativas, nutrição e bem-estar convivem em uma mesma jornada de cuidado.</p>
          <a href="#destaques">Conheça os cuidados <b>→</b></a>
        </div>
      </section>

      <section id="destaques" className="section shell">
        <div className="sectionHead split">
          <div><p className="eyebrow">Tratamentos em destaque</p><h2>Escolhas para diferentes momentos.</h2></div>
          <p>Informação clara antes do agendamento — sem transformar a página em uma lista extensa de serviços.</p>
        </div>
        <div className="treatmentGrid">
          {treatments.map(([name, cat], i) => (
            <article className="treatment" key={name}>
              <div className={`treatmentPhoto photo${i+1}`}></div>
              <div className="treatmentMeta"><small>{cat}</small><h3>{name}</h3><a href="https://www.trinks.com/bellez-estetica" target="_blank" rel="noreferrer">Ver e agendar <span>↗</span></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey shell section">
        <div className="sectionHead"><p className="eyebrow">Jornada de cuidado</p><h2>Da descoberta ao seu momento Bellez.</h2><p>Fluxo conceitual para demonstrar como o site pode orientar a pessoa antes do agendamento.</p></div>
        <div className="steps">
          {['Descubra', 'Converse', 'Avalie', 'Experimente', 'Acompanhe'].map((s,i)=><div className="step" key={s}><span>0{i+1}</span><strong>{s}</strong></div>)}
        </div>
      </section>

      <section id="avaliacoes" className="reviews">
        <div className="shell reviewsInner">
          <div className="reviewsIntro"><p className="eyebrow light">Reputação</p><h2>Quem conhece a Bellez conta a experiência.</h2><div className="ratingBig">5,0 <span>★★★★★</span></div><p>Uma presença forte no Google pode virar parte central da experiência do site.</p></div>
          <div className="reviewStack">{reviews.map((r,i)=><blockquote key={i}><span>★★★★★</span><p>“{r}”</p><small>Exemplo visual de depoimento público</small></blockquote>)}</div>
        </div>
      </section>

      <section className="section shell editorial">
        <div className="editorialCopy"><p className="eyebrow">Conteúdo Bellez</p><h2>Informação também gera confiança.</h2><p>O site pode transformar dúvidas frequentes em conteúdo útil sobre cuidados, procedimentos e bem-estar — criando uma base melhor para descoberta orgânica no Google.</p><a href="#contato">Explorar conteúdo <b>→</b></a></div>
        <div className="editorialCards">
          <article><small>Facial</small><h3>Botox: dúvidas que vale entender antes de agendar.</h3></article>
          <article><small>Corporal</small><h3>Drenagem linfática: o que saber sobre o atendimento.</h3></article>
          <article><small>Bem-estar</small><h3>Acupuntura e terapias integrativas na rotina de cuidado.</h3></article>
        </div>
      </section>

      <section id="contato" className="finalCta">
        <div className="finalOverlay"></div>
        <div className="shell finalContent"><p className="eyebrow light">Seu momento Bellez</p><h2>Reserve um momento para você.</h2><p>Conheça os cuidados e experiências Bellez e finalize seu agendamento pela plataforma já utilizada pela clínica.</p><a className="btn cream" href="https://www.trinks.com/bellez-estetica" target="_blank" rel="noreferrer">Agendar na Bellez</a></div>
      </section>

      <footer className="footer shell">
        <div className="brand">BELLEZ<span>Estética Integrativa</span></div>
        <p>Conceito demonstrativo não oficial. Informações sujeitas à validação da clínica.</p>
        <p>São Paulo · SP</p>
      </footer>
    </main>
  )
}
