import { TechnologyContext } from "../../contexts/TechnologyContext";
import { ModalCreateTechnology } from "../ModalCreateTechnology";
import { ModalBackground } from "../ModalBackground";
import { useContext, useState } from "react";
import { Container } from "./style";
import { Button } from "../Button";
import { Card } from "../Card";

const List = () => {
  const { technologies } = useContext(TechnologyContext);

  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      {modal && (
        <ModalBackground>
          <ModalCreateTechnology setModal={setModal} />
        </ModalBackground>
      )}

      <Container>
        <div>
          <h2>Tecnologias</h2>

          <Button
            color="dark-grey"
            size="xsmall"
            onClick={() => setModal(true)}
          >
            +
          </Button>
        </div>

        <menu>
          {technologies.map((technology) => (
            <Card technology={technology} key={technology.id} />
          ))}
        </menu>
      </Container>
    </>
  );
};

export { List };
