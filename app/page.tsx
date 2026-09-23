import Image from 'next/image'

const bookingUrl = 'https://www.trinks.com/bellez-estetica'
const photos = {
  welcome: '/bellez-real/1516F68B-F65B-4656-B648-96BC0542BE09.png',
  reception: '/bellez-real/6A8E5C14-1C2A-4711-9553-AAD3D776B8C0.png',
}

const serviceGroups = [
  {
    id: 'facial',
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
    id: 'corporal',
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
    id: 'massoterapia',
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
    id: 'integrativas',
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
    id: 'olhar',
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
    id: 'saude',
    title: 'Saúde & Bem-estar',
    services: ['Nutricionista', 'Psicóloga'],
  },
]

// Descriptions identify what is visible, without guessing a specific clinical procedure.
const treatments = [
  { title: 'Cuidados com a pele', category: 'Estética facial', image: '336B33DC-E2E1-48DB-87AF-E61D6291E797.png', alt: 'Aplicação de espuma de limpeza no rosto durante um cuidado facial', target: 'facial' },
  { title: 'LED Skin', category: 'Estética facial', image: 'BC95B373-77D3-4197-93B1-773F048A0BCC.png', alt: 'Atendimento facial com equipamento de luz LED azul', target: 'facial' },
  { title: 'Atendimento facial', category: 'Estética facial', image: 'FDA33DEB-3090-4456-9063-DEE0B0626BB4.png', alt: 'Profissional com equipamento facial e cliente usando óculos de proteção', target: 'facial' },
  { title: 'Quick Massage', category: 'Massoterapia', image: 'BC01D8AE-B7EF-4CF6-A536-C088438961C8.png', alt: 'Massagem nos ombros em cadeira própria para quick massage', target: 'massoterapia' },
  { title: 'Massoterapia', category: 'Cuidado corporal', image: '52B1221D-3258-411D-85A6-E643C7795A1B.png', alt: 'Profissional realizando atendimento manual em cliente deitado na maca', target: 'massoterapia' },
  { title: 'Atendimento corporal', category: 'Estética corporal', image: '9F17E22D-4AB4-474D-819A-5A3398195A43.png', alt: 'Profissionais em atendimento na região das pernas de uma cliente', target: 'corporal' },
]

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#conteudo">Ir para o conteúdo</a>
      <header className="nav shell" id="top">
        <a className="brand" href="#top" aria-label="Bellez — início">BELLEZ<span>Estética Integrativa</span></a>
        <nav className="desktopNav" aria-label="Navegação principal">
          <a href="#tratamentos">Tratamentos</a><a href="#experiencia">A Bellez</a><a href="#catalogo">Serviços</a><a href="#contato">Contato</a>
        </nav>
        <a className="btn primary navCta" href={bookingUrl} target="_blank" rel="noreferrer">Agendar</a>
      </header>
      <main id="conteudo">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="heroCopy">
            <p className="eyebrow">Cangaíba · São Paulo</p>
            <h1 id="hero-title">Cuidado que começa por você.</h1>
            <p className="lede">Estética, massoterapia e bem-estar. Diferentes formas de cuidar de você, reunidas em um só espaço.</p>
            <div className="heroActions">
              <a className="btn primary" href={bookingUrl} target="_blank" rel="noreferrer">Agendar horário</a>
              <a className="textLink" href="#tratamentos">Conhecer os cuidados</a>
            </div>
            <p className="heroDetail">Bellez Estética Integrativa <span>Av. Cangaíba, 3020</span></p>
          </div>
          <figure className="heroVisual">
            <Image src={photos.welcome} alt="Recepção Bellez, com uma mulher junto ao balcão e à marca da clínica" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
            <figcaption>Um espaço para acolher você.</figcaption>
          </figure>
        </section>

        <section id="tratamentos" className="section shell">
          <div className="sectionHead"><p className="eyebrow">Nossos cuidados</p><h2>Conheça a Bellez em cada detalhe.</h2><p>Cuidados faciais, atendimentos corporais e momentos de pausa. Explore as opções e encontre os serviços de cada área.</p></div>
          <div className="treatmentGrid">
            {treatments.map(t => <article className="treatmentCard" key={t.title}>
              <div className="treatmentImage"><Image src={'/bellez-real/' + t.image} alt={t.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div>
              <div className="treatmentCopy"><p className="eyebrow">{t.category}</p><h3>{t.title}</h3><a className="textLink" href={'#' + t.target}>Ver serviços<span className="srOnly"> de {t.category}</span></a></div>
            </article>)}
          </div>
        </section>

        <section id="experiencia" className="experience">
          <div className="shell experienceGrid">
            <div className="experienceImage"><Image src={photos.reception} alt="Atendimento e conversa no balcão da recepção Bellez" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
            <div className="experienceCopy"><p className="eyebrow">A experiência Bellez</p><h2>O cuidado começa no acolhimento.</h2><p>Da recepção ao atendimento, um momento dedicado a você. A Bellez reúne estética facial e corporal, massoterapia e diferentes áreas de bem-estar em Cangaíba.</p><a className="btn outlineLight" href="#contato">Conheça o espaço</a></div>
          </div>
        </section>

        <section id="catalogo" className="section shell">
          <div className="sectionHead"><p className="eyebrow">Serviços Bellez</p><h2>Seu cuidado, por categoria.</h2><p>Consulte os serviços e confira valores, profissionais e horários disponíveis no agendamento.</p></div>
          <nav className="categoryNav" aria-label="Categorias de serviços">{serviceGroups.map(g => <a href={'#' + g.id} key={g.id}>{g.title}</a>)}</nav>
          <div className="catalogGrid">{serviceGroups.map((g, i) => <article className="catalogGroup" id={g.id} key={g.id}><span className="catalogNumber">0{i+1}</span><h3>{g.title}</h3><ul>{g.services.map(s => <li key={s}>{s}</li>)}</ul></article>)}</div>
          <div className="catalogAction"><a className="btn primary" href={bookingUrl} target="_blank" rel="noreferrer">Consultar agenda</a></div>
        </section>

        <section id="contato" className="contactSection">
          <div className="shell contactGrid"><div><p className="eyebrow">Venha conhecer</p><h2>Seu próximo momento de cuidado.</h2><p>Estamos em Cangaíba, na Zona Leste de São Paulo.</p></div><div className="contactInfo">
            <div><span>Endereço</span><a href="https://www.google.com/maps/search/?api=1&query=Bellez+Est%C3%A9tica+Integrativa+Av.+Canga%C3%ADba+3020+S%C3%A3o+Paulo" target="_blank" rel="noreferrer">Av. Cangaíba, 3020<br/>São Paulo — SP</a></div>
            <div><span>Telefone</span><a href="tel:+5511958342872">(11) 95834-2872</a></div>
            <div><span>Agendamento</span><a href={bookingUrl} target="_blank" rel="noreferrer">Ver horários no Trinks</a></div>
          </div></div>
        </section>
        <section className="finalCta shell"><div><p className="eyebrow">Seu momento Bellez</p><h2>Reserve um tempo para você.</h2></div><a className="btn primary" href={bookingUrl} target="_blank" rel="noreferrer">Agendar na Bellez</a></section>
      </main>
      <footer className="footer shell"><a className="brand" href="#top">BELLEZ<span>Estética Integrativa</span></a><p>Conceito demonstrativo não oficial.<br/>Informações sujeitas à validação da clínica.</p><a href="#top" className="textLink">Voltar ao início</a></footer>
    </>
  )
}
