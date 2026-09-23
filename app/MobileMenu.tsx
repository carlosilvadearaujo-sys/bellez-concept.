'use client'

import { useRef } from 'react'

type Props = {
  instagramUrl: string
  bookingUrl: string
}

export default function MobileMenu({ instagramUrl, bookingUrl }: Props) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  const closeMenu = () => {
    if (detailsRef.current) detailsRef.current.open = false
  }

  return (
    <details className="mobileMenu" ref={detailsRef}>
      <summary aria-label="Abrir menu de navegação">
        <span></span><span></span><span></span>
      </summary>
      <nav className="mobileMenuPanel" aria-label="Navegação mobile">
        <a href="#tratamentos" onClick={closeMenu}>Tratamentos</a>
        <a href="#experiencia" onClick={closeMenu}>A Bellez</a>
        <a href="#catalogo" onClick={closeMenu}>Serviços</a>
        <a href="#avaliacoes" onClick={closeMenu}>Avaliações</a>
        <a href={instagramUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Instagram</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
        <a className="btn primary mobileMenuCta" href={bookingUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Agendar horário</a>
      </nav>
    </details>
  )
}
