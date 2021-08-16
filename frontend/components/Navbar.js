import styled from 'styled-components'
import Link from 'next/Link'
const Navbar = ({ children }) => {
  return (
    <>
      <Nav>
        <Link href='/'>
          <a>HOME</a>
        </Link>
        <ul>
          <li>Sign up</li>
          <li>Login</li>
          <Link href='/new-outfit'>
            <a>upload a fit</a>
          </Link>
        </ul>
      </Nav>

      {children}
    </>
  )
}

const Nav = styled.nav`
  width: 100%;
  background-color: #000;
  padding-left: 30px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
  }

  li {
    display: inline-block;
    padding: 10px 15px;
    text-decoration: none;
    color: white;
  }

  li a {
    color: red;
  }
`

export default Navbar
