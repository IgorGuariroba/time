import { HeaderContainer } from './styled'

import logoIgnite from '../../assets/Logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Dois triangulo verdes" />
      <nav>
        <NavLink to="/time/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/time/history" title="Hora">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
