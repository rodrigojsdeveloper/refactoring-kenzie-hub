import { IHeaderModal } from "../../interfaces";
import { Container } from "./style";

const HeaderModal = ({ title, setModal }: IHeaderModal) => {
  return (
    <Container>
      <h2>{title}</h2>

      <button onClick={() => setModal(false)}>X</button>
    </Container>
  );
};

export { HeaderModal };
