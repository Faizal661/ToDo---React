export type Items = {
  title:  string;
  id: string;
  isDone:boolean
};

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;
