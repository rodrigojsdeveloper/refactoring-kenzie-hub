export interface IButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "204px" | "98px" | "67.49px" | "55.49px" | "32.49px";
  color: "pink" | "gray" | "dark-grey";
}

export interface IButtonStyle {
  size?: "204px" | "98px" | "67.49px" | "55.49px" | "32.49px";
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
  error?: any;
}

export interface ISelectProps {
  label: string;
  name: string;
  register: any;
  defaultValue?: string | number | readonly string[];
  children: React.ReactNode;
  htmlFor: string;
  id: string;
  error: any;
}

export interface ITechnologyProps {
  id: string;
  title: string;
  status: string;
}

export interface IUserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITechnologyProps[];
}

export interface ITechnology {
  technology: ITechnologyProps;
}

export interface IModal {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHeaderModal extends IModal {
  title: string;
}

export interface IHeaderStyle {
  height?: "subHeader";
}

export interface IModalEditAndDeleteTechnology extends IModal {
  currentTechnology: ITechnologyProps;
}

export interface IFormLayoutProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export interface ITechnologyContextData {
  technologies: ITechnologyProps[];
  setTechnologies: React.Dispatch<React.SetStateAction<ITechnologyProps[]>>;
  fetchTechnologies: (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    id: string | null
  ) => void;
  handleAddToTechnology: (technology: ITechnologyProps) => void;
  handlePostTechnologies: (
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    data: Partial<ITechnologyProps>
  ) => void;
  handleEditTecnology: (
    setIsLoadingEdit: React.Dispatch<React.SetStateAction<boolean>>,
    data: ITechnologyProps,
    currentTechnology: ITechnologyProps,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  handleDeleteTechnology: (
    setIsLoadingDelete: React.Dispatch<React.SetStateAction<boolean>>,
    currentTechnology: ITechnologyProps,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}
