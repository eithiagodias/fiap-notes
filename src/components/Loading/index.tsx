import { Container, Overlay, Spinner } from "./styles";

function Loading() {
  return (
    <Overlay>
      <Container>
        <Spinner />
      </Container>
    </Overlay>
  );
}

export default Loading;
