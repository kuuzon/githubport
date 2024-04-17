import { Container } from 'react-bootstrap';
import { FiHome } from 'react-icons/fi'

import AbpLink from '../components/common/AbpLink';
import notFound from '../assets/errorOne.png'

const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <Container>     
        <h2>Hmm...</h2>
        <p>Looks like you coded your way onto a hidden page!</p>
        <div className="notFoundCover">
          <img src={notFound} alt="notfound" />
        </div>
        {/* CUSTOM BUTTON */}
        <AbpLink path="/">
          <FiHome />
        </AbpLink>
      </Container>
    </div>
  )
}

export default NotFound