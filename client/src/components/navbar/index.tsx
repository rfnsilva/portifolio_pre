import React, { useState } from 'react'

import image from '../../assets/logo.png'

import { Container } from './styles'

export interface Props {
  toggle: boolean
}

const NavBar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true)
  const handleChange = async () => {
    console.log('antes: ' + toggle)
    setToggle(!toggle)
    console.log('depois: ' + toggle)
  }

  return (
    <>
      <Container toggle={toggle}>
        <img src={image} alt="logo do site" />

        <label className="switch">
          <input type="checkbox" onChange={handleChange} />
          <div>
            <span></span>
          </div>
        </label>

        <nav>
          <ul className="menuItems">
            <li>
              <a href="#" data-item="Home">
                Home
              </a>
            </li>
            <li>
              <a href="#" data-item="About">
                About
              </a>
            </li>
            <li>
              <a href="#" data-item="Projects">
                Projetos
              </a>
            </li>
            <li>
              <a href="#" data-item="Blog">
                Blog
              </a>
            </li>
            <li>
              <a href="#" data-item="Contact">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  )
}

export default NavBar
