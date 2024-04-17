import CardsList from '../components/features/card/CardsList'
import Container from "react-bootstrap/Container";

function ProjectsPage() {
  return (
    <Container>
      <h1>My Projects</h1>
      <CardsList />
    </Container>
  )
}

export default ProjectsPage