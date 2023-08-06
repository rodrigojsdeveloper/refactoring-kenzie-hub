import { Helmet, HelmetProvider } from "react-helmet-async";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import React from "react";

const NotFound = () => {
  const token = localStorage.getItem("Kenzie Hub: token") ?? "";

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Página não encontrada | Kenzie Hub" />
      </HelmetProvider>
      <Container>
        <div>
          <h1>Ooops!</h1>

          <p>
            Não encotramos a página que você procurou,{" "}
            <b>vamos tentar novamente</b>.
          </p>

          <Button
            size="xlarge"
            color="pink"
            onClick={() => (token ? navigate("/dashboard") : navigate("/"))}
          >
            Ir para home
          </Button>
        </div>

        <svg
          width="421"
          height="377"
          viewBox="0 0 421 377"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="21" y="27" width="400" height="350" rx="5" fill="#DF1545" />
          <rect width="400" height="350" rx="5" fill="#190429" />
          <path
            d="M254.133 197.633L207.258 116.188C203.742 110.133 194.562 109.938 191.047 116.188L144.172 197.633C140.656 203.688 145.148 211.5 152.375 211.5H245.93C253.156 211.5 257.648 203.883 254.133 197.633ZM199.25 180.641C204.133 180.641 208.234 184.742 208.234 189.625C208.234 194.703 204.133 198.609 199.25 198.609C194.172 198.609 190.266 194.703 190.266 189.625C190.266 184.742 194.172 180.641 199.25 180.641ZM190.656 148.414C190.461 147.047 191.633 145.875 193 145.875H205.305C206.672 145.875 207.844 147.047 207.648 148.414L206.281 174.977C206.086 176.344 205.109 177.125 203.938 177.125H194.367C193.195 177.125 192.219 176.344 192.023 174.977L190.656 148.414Z"
            fill="white"
          />
        </svg>
      </Container>
    </React.Fragment>
  );
};

export { NotFound };
