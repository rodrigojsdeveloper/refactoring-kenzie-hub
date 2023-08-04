import { ModalEditAndDeleteTechnology } from "../ModalEditAndDeleteTechnology";
import { ModalBackground } from "../ModalBackground";
import { ITechnology } from "../../interfaces";
import { Container } from "./style";
import { useState } from "react";

const Card = ({ technology }: ITechnology) => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      {modal && (
        <ModalBackground>
          <ModalEditAndDeleteTechnology
            currentTechnology={technology}
            setModal={setModal}
          />
        </ModalBackground>
      )}

      <Container onClick={() => setModal(true)}>
        <p>{technology.title}</p>

        <p>{technology.status}</p>
      </Container>
    </>
  );
};

export { Card };
