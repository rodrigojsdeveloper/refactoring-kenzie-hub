import { Helmet, HelmetProvider } from "react-helmet-async";
import { SubHeader } from "../../components/SubHeader";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { List } from "../../components/List";
import React, { useEffect } from "react";

const Dashboard = () => {
  const token = localStorage.getItem("Kenzie Hub: token") ?? "";

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return navigate("/signin");
  }, [token]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Dashboard | Kenzie Hub" />
      </HelmetProvider>
      <Header />
      <SubHeader />
      <List />
    </React.Fragment>
  );
};

export { Dashboard };
