export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: [];
}

export interface ITechnologyProps {
  id: string;
  title: string;
  status: string;
}

export interface ITechnology {
  technology: ITechnologyProps;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IHeaderModal {
  title: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalCreateTechnology {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalEditAndDeleteTechnology {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentTechnology: ITechnologyProps;
}
