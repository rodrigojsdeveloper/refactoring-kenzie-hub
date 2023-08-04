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
