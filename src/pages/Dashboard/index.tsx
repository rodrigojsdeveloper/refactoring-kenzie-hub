import { SubHeader } from "../../components/SubHeader";
import { Header } from "../../components/Header";
import React from "react";
import { List } from "../../components/List";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <SubHeader />
      <List />
    </React.Fragment>
  );
};

export { Dashboard };
