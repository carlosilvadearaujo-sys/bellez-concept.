const universes = [
  ['Facial', 'Botox, limpeza de pele, peelings, LED Skin e fios PDO', '01'],
  ['Corporal', 'Drenagem, Drenodeep, PEIM e SPA dos pés', '02'],
  ['Massoterapia', 'Relaxante, terapêutica, desportiva, Tui-Ná e liberação miofascial', '03'],
  ['Terapias Integrativas', 'Acupuntura, Reiki, auriculoterapia, Barra de Access e sound healing', '04'],
  ['Beleza & Olhar', 'Cílios, brow lamination e design de sobrancelhas', '05'],
  ['Saúde & Nutrição', 'Nutrição, psicologia e cuidado integrado', '06'],
]

const serviceGroups = [
  {
    title: 'Estética Facial',
    services: [
      'Botox',
      'Drenagem Linfática Facial',
      'Fio PDO Parafuso',
      'Fios Lifting',
      'Fios PDO Liso',
      'Fios PDO Multifiller',
      'LED Skin',
      'Limpeza de Pele LED Skin Detox',
      'Peeling Químico Facial',
    ],
  },
  {
    title: 'Estética Corporal',
    services: [
      'Drenagem Linfática',
      'Drenagem Linfática para Gestantes',
      'Drenodeep',
      'PEIM',
      'SPA dos Pés',
    ],
  },
  {
    title: 'Massoterapia',
    services: [
      'Cone Hindu',
      'Liberação Miofascial',
      'Massagem Desportiva',
      'Massagem Oriental',
      'Massagem Relaxante',
      'Massagem Terapêutica',
      'Massoterapia Home Care',
      'Quick Massage 15 min',
      'Quick Massage 30 min',
      'Reflexologia',
      'Tui-Ná Massagem',
      'Tui-Ná Reiki',
    ],
  },
  {
    title: 'Terapias Integrativas',
    services: [
      'Acupuntura',
      'Auriculoterapia',
      'Barra de Access',
      'Reequilíbrio de Chakras',
      'Reiki',
      'Sound Healing',
      'Terapia com Floral de Bach',
    ],
  },
  {
    title: 'Beleza & Olhar',
    services: [
      'Cílios Brasileiro',
      'Cílios Volume Luxo',
      'Brow Lamination',
      'Design de Sobrancelha',
      'Design de Sobrancelha com Henna',
    ],
  },
  {
    title: 'Saúde & Bem-estar',
    services: ['Nutricionista', 'Psicóloga'],
  },
]

const highlights = [
  ['Botox', 'Estética facial'],
  ['Limpeza de Pele LED Skin Detox', 'Estética facial'],
  ['Drenagem Linfática', 'Estética corporal'],
  ['Massagem Relaxante', 'Massoterapia'],
  ['Acupuntura', 'Terapias integrativas'],
  ['Reiki', 'Bem-estar'],
]

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Bellez">
          BELLEZ
          <span>Estética Integrativa</span>
        </a>

        <nav className="desktopNav">
          <a href="#tratamentos">Tratamentos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#catalogo">Serviços</a>
          <a href="#avaliacoes">Avaliações</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
          className="navCta"
          href="https://www.trinks.com/bellez-estetica"
          target="_blank"
          rel="noreferrer"
        >
          Agendar
        </a>
      </header>

      <section id="top" className="hero shell">
        <div className="heroCopy reveal">
          <p className="eyebrow">Estética Facial · Corporal · Bem-estar</p>
          <h1>Cuidado que começa por você.</h1>
          <p className="lede">
            Estética, massoterapia, nutrição e terapias integrativas reunidas em uma
            experiência de cuidado individual.
          </p>

          <div className="heroActions">
            <a className="btn primary" href="#tratamentos">
              Conhecer tratamentos
            </a>
            <a
              className="btn ghost"
              href="https://www.trinks.com/bellez-estetica"
              target="_blank"
              rel="noreferrer"
            >
              Agendar horário
            </a>
          </div>

          <div className="trustLine">
            <strong>5,0</strong>
            <span>★★★★★</span>
            <small>Google · +670 avaliações</small>
          </div>
        </div>

        <div className="heroVisual">
          <img
            src="/1516F68B-F65B-4656-B648-96BC0542BE09.png"
            alt="Ambiente de estética e cuidado"
          />
          <div className="floatingNote">
            <span>Bellez Estética Integrativa</span>
            <strong>Beleza, saúde e equilíbrio.</strong>
          </div>
        </div>
      </section>

      <section id="tratamentos" className="section shell">
        <div className="sectionHead">
          <p className="eyebrow">Universos Bellez</p>
          <h2>Encontre o cuidado que combina com seu momento.</h2>
          <p>
            A Bellez reúne diferentes frentes de cuidado para que cada pessoa
            encontre um atendimento alinhado ao que procura.
          </p>
        </div>

        <div className="universeGrid">
          {universes.map(([title, text, num]) => (
            <article className="universeCard" key={title}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#catalogo">
                Ver serviços <b>↗</b>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="manifesto">
        <div className="manifestoImage">
          <img
            src="/2BBFA4EE-F951-4090-B4C7-D6BE50F0C62F.png"
            alt="Momento de bem-estar"
          />
        </div>

        <div className="manifestoCopy">
          <p className="eyebrow light">Experiência Bellez</p>
          <h2>Beleza também é sentir-se bem.</h2>
          <p>
            A Bellez atua com estética facial e corporal, massoterapia, nutrição,
            psicologia e terapias integrativas. A proposta é reunir diferentes
            formas de cuidado em um mesmo espaço.
          </p>
          <a href="#catalogo">
            Conheça os serviços <b>→</b>
          </a>
        </div>
      </section>

      <section id="destaques" className="section shell">
        <div className="sectionHead split">
          <div>
            <p className="eyebrow">Tratamentos em destaque</p>
            <h2>Alguns dos cuidados encontrados na Bellez.</h2>
          </div>
          <p>
            O agendamento continua sendo feito pela plataforma Trinks já utilizada
            pela clínica.
          </p>
        </div>

        <div className="treatmentGrid">
          {highlights.map(([name, cat], i) => (
            <article className="treatment" key={name}>
              <div className={`treatmentPhoto photo${i + 1}`}></div>
              <div className="treatmentMeta">
                <small>{cat}</small>
                <h3>{name}</h3>
                <a
                  href="https://www.trinks.com/bellez-estetica"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver no agendamento <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="catalogo" className="catalog section">
        <div className="shell">
          <div className="sectionHead">
            <p className="eyebrow">Serviços</p>
            <h2>Catálogo Bellez.</h2>
            <p>
              Serviços identificados no catálogo público de agendamento da clínica.
              Valores aparecem sob consulta.
            </p>
          </div>

          <div className="catalogGrid">
            {serviceGroups.map((group) => (
              <article className="catalogGroup" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="catalogAction">
            <a
              className="btn primary"
              href="https://www.trinks.com/bellez-estetica"
              target="_blank"
              rel="noreferrer"
            >
              Ver agenda e disponibilidade
            </a>
          </div>
        </div>
      </section>

      <section className="journey shell section">
        <div className="sectionHead">
          <p className="eyebrow">Sua jornada</p>
          <h2>Do interesse ao agendamento.</h2>
          <p>
            O site apresenta a clínica e os serviços; o Trinks segue responsável pela
            etapa de agendamento.
          </p>
        </div>

        <div className="steps">
          {['Conheça', 'Explore', 'Escolha', 'Agende', 'Cuide-se'].map((s, i) => (
            <div className="step" key={s}>
              <span>0{i + 1}</span>
              <strong>{s}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="avaliacoes" className="reviews">
        <div className="shell reviewsInner">
          <div className="reviewsIntro">
            <p className="eyebrow light">Reputação</p>
            <h2>Uma presença local construída por quem já conhece a Bellez.</h2>
            <div className="ratingBig">
              5,0 <span>★★★★★</span>
            </div>
            <p>
              Na pesquisa realizada, a clínica aparecia com mais de 670 avaliações no
              Google.
            </p>
          </div>

          <div className="reviewStack">
            <blockquote>
              <span>GOOGLE</span>
              <p>+670 avaliações públicas.</p>
              <small>Volume de prova social identificado durante a pesquisa.</small>
            </blockquote>
            <blockquote>
              <span>AGENDAMENTO</span>
              <p>Serviços organizados e agendamento pelo Trinks.</p>
              <small>Fluxo já utilizado pela clínica.</small>
            </blockquote>
            <blockquote>
              <span>POSICIONAMENTO</span>
              <p>Estética facial, corporal e bem-estar em um só lugar.</p>
              <small>Direção identificada no Instagram e catálogo público.</small>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section shell editorial">
        <div className="editorialCopy">
          <p className="eyebrow">Conteúdo Bellez</p>
          <h2>Informação também gera confiança.</h2>
          <p>
            O Instagram da Bellez já trabalha conteúdos sobre procedimentos,
            cuidados, bastidores e bem-estar. O site pode organizar esse conteúdo em
            páginas próprias e ajudar na descoberta pelo Google.
          </p>
          <a href="#contato">
            Encontrar a Bellez <b>→</b>
          </a>
        </div>

        <div className="editorialCards">
          <article>
            <small>Facial</small>
            <h3>Procedimentos faciais e cuidados com a pele.</h3>
          </article>
          <article>
            <small>Corporal</small>
            <h3>Drenagem, cuidados corporais e bem-estar.</h3>
          </article>
          <article>
            <small>Integrativo</small>
            <h3>Acupuntura, Reiki, auriculoterapia e outras terapias.</h3>
          </article>
        </div>
      </section>

      <section id="contato" className="contactSection section">
        <div className="shell contactGrid">
          <div>
            <p className="eyebrow">Onde encontrar</p>
            <h2>Bellez Estética Integrativa</h2>
          </div>

          <div className="contactInfo">
            <div>
              <span>Endereço</span>
              <strong>Av. Cangaíba, 3020 · São Paulo — SP</strong>
            </div>
            <div>
              <span>Telefone</span>
              <strong>(11) 95834-2872</strong>
            </div>
            <div>
              <span>Agendamento</span>
              <a
                href="https://www.trinks.com/bellez-estetica"
                target="_blank"
                rel="noreferrer"
              >
                Trinks ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="finalOverlay"></div>
        <div className="shell finalContent">
          <p className="eyebrow light">Seu momento Bellez</p>
          <h2>Reserve um momento para você.</h2>
          <p>
            Conheça os cuidados disponíveis e siga para o sistema de agendamento já
            utilizado pela clínica.
          </p>
          <a
            className="btn cream"
            href="https://www.trinks.com/bellez-estetica"
            target="_blank"
            rel="noreferrer"
          >
            Agendar na Bellez
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand">
          BELLEZ
          <span>Estética Integrativa</span>
        </div>
        <p>
          Conceito demonstrativo não oficial. Informações sujeitas à validação da
          clínica.
        </p>
        <p>São Paulo · SP</p>
      </footer>
    </main>
  )
}
