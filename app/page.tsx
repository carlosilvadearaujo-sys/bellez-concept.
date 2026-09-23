import Image from 'next/image'
import MobileMenu from './MobileMenu'

const bookingUrl = 'https://www.trinks.com/bellez-estetica'
const instagramUrl = 'https://www.instagram.com/bellez.estetica/'
const googleReviewUrl = 'https://search.google.com/local/writereview?placeid=ChIJmUBsuiVhzpQRBtgChxAISXo'
const whatsappUrl = 'https://wa.me/5511958342872?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Bellez%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'
const photos = {
  welcome: '/bellez-real/1516F68B-F65B-4656-B648-96BC0542BE09.webp',
  reception: '/bellez-real/6A8E5C14-1C2A-4711-9553-AAD3D776B8C0.webp',
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
  { title: 'Cuidados com a pele', category: 'Estética facial', image: '336B33DC-E2E1-48DB-87AF-E61D6291E797.webp', alt: 'Aplicação de espuma de limpeza no rosto durante um cuidado facial', target: 'facial' },
  { title: 'LED Skin', category: 'Estética facial', image: 'BC95B373-77D3-4197-93B1-773F048A0BCC.webp', alt: 'Atendimento facial com equipamento de luz LED azul', target: 'facial' },
  { title: 'Atendimento facial', category: 'Estética facial', image: 'FDA33DEB-3090-4456-9063-DEE0B0626BB4.webp', alt: 'Profissional com equipamento facial e cliente usando óculos de proteção', target: 'facial' },
  { title: 'Quick Massage', category: 'Massoterapia', image: 'BC01D8AE-B7EF-4CF6-A536-C088438961C8.webp', alt: 'Massagem nos ombros em cadeira própria para quick massage', target: 'massoterapia' },
  { title: 'Massoterapia', category: 'Cuidado corporal', image: '52B1221D-3258-411D-85A6-E643C7795A1B.webp', alt: 'Profissional realizando atendimento manual em cliente deitado na maca', target: 'massoterapia' },
  { title: 'Atendimento corporal', category: 'Estética corporal', image: '9F17E22D-4AB4-474D-819A-5A3398195A43.webp', alt: 'Profissionais em atendimento na região das pernas de uma cliente', target: 'corporal' },
]

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#conteudo">Ir para o conteúdo</a>
      <header className="nav shell" id="top">
        <a className="brand" href="#top" aria-label="Bellez — início">BELLEZ<span>Estética Integrativa</span></a>
        <nav className="desktopNav" aria-label="Navegação principal">
          <a href="#tratamentos">Tratamentos</a><a href="#experiencia">A Bellez</a><a href="#catalogo">Serviços</a><a href="#avaliacoes">Avaliações</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a><a href="#contato">Contato</a>
        </nav>
        <MobileMenu instagramUrl={instagramUrl} bookingUrl={bookingUrl} />
        <a className="btn primary navCta" href={bookingUrl} target="_blank" rel="noreferrer">Agendar</a>
      </header>
      <main id="conteudo">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="heroCopy">
            <h1 id="hero-title">Cuidado que começa por você.</h1>
            <p className="lede">Estética, massoterapia, nutrição e bem-estar. Diferentes formas de cuidar de você, reunidas em um só espaço.</p>
            <div className="heroActions">
              <a className="btn primary" href={bookingUrl} target="_blank" rel="noreferrer">Agendar horário</a>
              <a className="textLink" href="#tratamentos">Conhecer os cuidados</a>
            </div>
            <p className="heroDetail">Bellez Estética Integrativa <span>Av. Cangaíba, 3020</span></p>
          </div>
          <figure className="heroVisual">
            <Image src={photos.welcome} alt="Recepção Bellez, com uma mulher junto ao balcão e à marca da clínica" width={1600} height={2000} sizes="(max-width: 900px) 100vw, 50vw" priority className="heroMainImage" />
          </figure>
        </section>


        <section className="businessFacts shell" aria-label="Informações da Bellez">
          <div><span>Localização</span><strong>Cangaíba · Zona Leste de São Paulo</strong></div>
          <div><span>Agendamento</span><strong>Online pelo Trinks</strong></div>
          <div><span>Contato</span><strong>(11) 95834-2872</strong></div>
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
            <div className="experienceCopy"><p className="eyebrow">Conheça a Bellez</p><h2>Estética, massoterapia e nutrição em um só espaço.</h2><p>A Bellez reúne profissionais especializados em cuidados faciais e corporais, harmonização facial, emagrecimento, cuidados com a pele e massagens voltadas ao alívio de dores, relaxamento e estresse.</p><a className="btn outlineLight" href="#contato">Conheça o espaço</a></div>
          </div>
        </section>

        <section id="catalogo" className="section shell">
          <div className="sectionHead"><p className="eyebrow">Serviços Bellez</p><h2>Seu cuidado, por categoria.</h2><p>Consulte os serviços e confira valores, profissionais e horários disponíveis no agendamento.</p></div>
          <nav className="categoryNav" aria-label="Categorias de serviços">{serviceGroups.map(g => <a href={'#' + g.id} key={g.id}>{g.title}</a>)}</nav>
          <div className="catalogGrid">{serviceGroups.map((g, i) => <article className="catalogGroup" id={g.id} key={g.id}><span className="catalogNumber">0{i+1}</span><h3>{g.title}</h3><ul>{g.services.map(s => <li key={s}>{s}</li>)}</ul></article>)}</div>
          <div className="catalogAction"><a className="btn primary" href={bookingUrl} target="_blank" rel="noreferrer">Consultar agenda</a></div>
        </section>


        <section id="avaliacoes" className="reviewsSection">
          <div className="shell reviewsGrid">
            <div>
              <p className="eyebrow">Avaliações no Google</p>
              <h2>Quem conhece a Bellez, recomenda.</h2>
              <p className="reviewsText">A Bellez aparece com nota 5,0 no Google e mais de 670 avaliações públicas.</p>
            </div>
            <div className="reviewsCard">
              <div className="googleRating"><strong>5,0</strong><span>★★★★★</span></div>
              <p>Veja o que clientes dizem ou deixe sua própria avaliação no Google.</p>
              <div className="reviewsActions">
                <a className="btn primary" href={googleReviewUrl} target="_blank" rel="noreferrer">Avaliar no Google</a>
                <a className="btn soft" href={instagramUrl} target="_blank" rel="noreferrer">Ver Instagram</a>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contactSection">
          <div className="shell contactGrid"><div><p className="eyebrow">Venha conhecer</p><h2>Seu próximo momento de cuidado.</h2><p>Estamos em Cangaíba, na Zona Leste de São Paulo.</p></div><div className="contactInfo">
            <div><span>Endereço</span><a href="https://www.google.com/maps/search/?api=1&query=Bellez+Est%C3%A9tica+Integrativa+Av.+Canga%C3%ADba+3020+S%C3%A3o+Paulo" target="_blank" rel="noreferrer">Av. Cangaíba, 3020 — Cangaíba / Penha<br/>São Paulo — SP · CEP 03712-005</a></div>
            <div><span>Telefones</span><div className="contactStack"><a href="tel:+5511958342872">(11) 95834-2872</a><a href="tel:+551120556114">(11) 2055-6114</a></div></div>
            <div><span>E-mail</span><a href="mailto:contato@bellez.com.br">contato@bellez.com.br</a></div>
            <div><span>Agendamento</span><a href={bookingUrl} target="_blank" rel="noreferrer">Consultar horários no Trinks</a></div>
            <div><span>Instagram</span><a href={instagramUrl} target="_blank" rel="noreferrer">@bellez.estetica</a></div>
            <div><span>Avaliações</span><a href={googleReviewUrl} target="_blank" rel="noreferrer">Avaliar a Bellez no Google</a></div>
            <div><span>Facilidades</span><p>Wi‑Fi · estacionamento gratuito · atendimento para adultos e crianças</p></div>
            <div><span>Pagamento</span><p>PIX · dinheiro · cartões de crédito e débito</p></div>
          </div></div>
        </section>
        <section className="finalCta shell"><div><p className="eyebrow">Seu momento Bellez</p><h2>Reserve um tempo para você.</h2></div><a className="btn primary" href={bookingUrl} target="_blank" rel="noreferrer">Agendar na Bellez</a></section>
      </main>
      <footer className="footer shell"><a className="brand" href="#top">BELLEZ<span>Estética Integrativa</span></a><p>Bellez Estética Integrativa · São Paulo</p><div className="footerLinks"><a href={instagramUrl} target="_blank" rel="noreferrer" className="textLink">Instagram</a><a href={googleReviewUrl} target="_blank" rel="noreferrer" className="textLink">Avaliar no Google</a><a href="#top" className="textLink">Voltar ao início</a></div></footer>
    <a
        className="whatsappFloat"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a Bellez pelo WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path fill="currentColor" d="M19.1 17.2c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4Z"/>
          <path fill="currentColor" d="M16 3.2A12.7 12.7 0 0 0 5.2 22.6L3.5 28.8l6.4-1.7A12.8 12.8 0 1 0 16 3.2Zm0 23.3c-2 0-3.9-.5-5.5-1.5l-.4-.2-3.8 1 1-3.7-.2-.4A10.6 10.6 0 1 1 16 26.5Z"/>
        </svg>
        <span>WhatsApp</span>
      </a>
    </>
  )
}
