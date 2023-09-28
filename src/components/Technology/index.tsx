import { ModalEditAndDeleteTechnology } from "../Modals/EditAndDelete";
import { ModalBackground } from "../ModalBackground";
import { ITechnology } from "../../interfaces";
import { Container } from "./style";
import { useState } from "react";

const Technology = ({ technology }: ITechnology) => {
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
        <p className="title">{technology.title}</p>

        <p className="status">{technology.status}</p>
      </Container>
    </>
  );
};

export { Technology };
