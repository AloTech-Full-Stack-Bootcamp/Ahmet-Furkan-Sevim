import { Card, Button } from 'react-bootstrap';

function About() {
  return (
    <>
      <Card className="bg-secondary" style={{ color: 'white' }}>
        <Card.Header as="h3">ABOUT</Card.Header>
        <Card.Body>
          <Card.Text as="h4">
            Developed by Ahmet Furkan Sevim as part of his web development
            learning experience.
          </Card.Text>
        </Card.Body>
        <Card.Header as="h3">HOW TO PLAY</Card.Header>
        <Card.Body>
          <Card.Text as="h4">
            This application puts your memory to the test. You are presented
            with multiple artifact cards. The cards get shuffled every time they
            are clicked. You CAN NOT click on any card more than once or else
            your score resets to zero. The main objective is to get the highest
            possible score.
          </Card.Text>
          <Button
            variant="secondary"
            size="lg"
            block
            style={{ marginTop: '2rem' }}
          >
            <a
              href="https://github.com/ahmetfurkans"
              style={{ color: 'white' }}
            >
              GitHub Profile
            </a>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default About;
