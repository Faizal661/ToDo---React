import { ReactSetState } from "../types/utils";

type Input = {
  inputValue: string;
  setInputValue: ReactSetState<string>;
};

export const Input = ({ inputValue, setInputValue }: Input) => {
  return (
    <input
      type="text"
      value={inputValue}
      className="border text-zinc-50 w-full rounded-md border-gray-300 p-2 mr-2"
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
};
