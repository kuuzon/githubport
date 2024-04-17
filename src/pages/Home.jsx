import Container from 'react-bootstrap/Container';
import { BsPersonCircle } from "react-icons/bs";

import AbpLink from '../components/common/AbpLink';

const Home = () => {
  return (
    <Container>
      <div id="hero-section">
        <h1>Portfolio Base</h1>
        <p>My name is Alex ~ I build things, break things and mend things!</p>
        
        {/* Custom Button Component */}
        <AbpLink path="/about">
          <BsPersonCircle />
        </AbpLink>
      </div>
    </Container>
  )
}

export default Home