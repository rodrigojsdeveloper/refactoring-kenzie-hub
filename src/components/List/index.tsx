import { TechnologyContext } from "../../contexts/TechnologyContext";
import { ModalCreateTechnology } from "../ModalCreateTechnology";
import { useContext, useEffect, useState } from "react";
import { ModalBackground } from "../ModalBackground";
import { ITechnologyProps } from "../../interfaces";
import { Technology } from "../Technology";
import api from "../../services/api";
import { Container } from "./style";
import { Button } from "../Button";
import { Empty } from "../Empty";

const List = () => {
  const id = localStorage.getItem("Kenzie Hub: id");

  const { handleAddToTechnology } = useContext(TechnologyContext);

  const [modal, setModal] = useState<boolean>(false);

  const [technologies, setTechnologies] = useState<ITechnologyProps[]>([]);

  useEffect(() => {
    api
      .get(`users/${id}`)
      .then((res) => {
        handleAddToTechnology(res.data.techs);

        setTechnologies(res.data.techs);
      })
      .catch((error) => console.error("error", error));
  }, [technologies]);

  return (
    <>
      {modal && (
        <ModalBackground>
          <ModalCreateTechnology setModal={setModal} />
        </ModalBackground>
      )}

      <Container>
        <div className="divTecnologies">
          <h2>Tecnologias</h2>

          <Button
            color="dark-grey"
            size="xsmall"
            onClick={() => setModal(true)}
          >
            +
          </Button>
        </div>

        {technologies.length > 0 ? (
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
