import { TechnologyContext } from "../../contexts/TechnologyContext";
import { ModalCreateTechnology } from "../Modals/Create";
import { useContext, useEffect, useState } from "react";
import { ModalBackground } from "../ModalBackground";
import { Technology } from "../Technology";
import { Loading } from "../Loading";
import { Container } from "./style";
import { Button } from "../Button";
import { Empty } from "../Empty";

const List = () => {
  const { technologies, fetchTechnologies } = useContext(TechnologyContext);

  const [modal, setModal] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchTechnologies(setLoading);
  }, []);

  return (
    <>
      {modal ? (
        <ModalBackground>
          <ModalCreateTechnology setModal={setModal} />
        </ModalBackground>
      ) : null}
      <Container>
        <div className="divTecnologies">
          <h2>Tecnologias</h2>

          <Button
            color="dark-grey"
            size="32.49px"
            onClick={() => setModal(true)}
          >
            +
          </Button>
        </div>

        {loading ? (
          <Loading />
        ) : technologies.length > 0 ? (
          <menu>
            {technologies.map((technology) => (
              <Technology technology={technology} key={technology.id} />
            ))}
          </menu>
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
};

export { List };
