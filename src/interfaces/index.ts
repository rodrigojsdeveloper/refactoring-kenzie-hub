export interface IButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size: "xxlarge" | "xlarge" | "large" | "medium" | "small" | "xsmall";
  color: "pink" | "gray" | "dark-grey";
}

export interface IButtonStyle {
  size: "xxlarge" | "xlarge" | "large" | "medium" | "small" | "xsmall";
  color: "pink" | "gray" | "dark-grey";
}

export interface InputProps {
  label: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  register: any;
  disabled?: boolean;
  defaultValue?: string | number | readonly string[];
  value?: string | number | readonly string[];
}

export interface ISelectProps {
  label: string;
  name: string;
  register: any;
  defaultValue?: string | number | readonly string[];
  children: React.ReactNode;
}

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

export interface IHeaderStyleProps {
  height?: "subHeader";
}

export interface IModalCreateTechnology {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalEditAndDeleteTechnology {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentTechnology: ITechnologyProps;
}

export interface IFormLayoutProps {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export interface ITechnologyContextData {
  technologies: ITechnologyProps[];
  setTechnologies: React.Dispatch<React.SetStateAction<ITechnologyProps[]>>;
  handleAddToTechnology: (technology: ITechnologyProps) => void;
  handleEditTecnology: (
    setIsLoadingEdit: React.Dispatch<React.SetStateAction<boolean>>,
    data: any,
    currentTechnology: ITechnologyProps,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  handleDeleteTechnology: (
    setIsLoadingDelete: React.Dispatch<React.SetStateAction<boolean>>,
    currentTechnology: ITechnologyProps,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}
