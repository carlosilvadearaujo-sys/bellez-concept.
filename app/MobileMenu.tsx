'use client'

import { useState } from 'react'

type Props = {
  instagramUrl: string
  bookingUrl: string
}

export default function MobileMenu({ instagramUrl, bookingUrl }: Props) {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <div className={'mobileMenu' + (open ? ' isOpen' : '')}>
      <button
        type="button"
        className="mobileMenuButton"
        aria-label={open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        aria-expanded={open}
        onClick={() => setOpen(value => !value)}
      >
        <span></span><span></span><span></span>
      </button>

      {open && (
        <nav className="mobileMenuPanel" aria-label="Navegação mobile">
          <a href="#tratamentos" onClick={closeMenu}>Tratamentos</a>
          <a href="#experiencia" onClick={closeMenu}>A Bellez</a>
          <a href="#catalogo" onClick={closeMenu}>Serviços</a>
          <a href="#avaliacoes" onClick={closeMenu}>Avaliações</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Instagram</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="btn primary mobileMenuCta" href={bookingUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>Agendar horário</a>
        </nav>
      )}
    </div>
  )
}
