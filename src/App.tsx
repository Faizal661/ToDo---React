import { useState } from "react";
import "./App.css";
import { ImageHeader } from "./components/ImageHeader";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Items } from "./types/utils";
import { ItemList } from "./components/ItemList";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [dark, setDark] = useState<boolean>(false);

  const showWarning = () =>
    toast.warn("Please enter something ...", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: `${dark ? "light" : "dark"}`,
      transition: Zoom,
    });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setItems((prev) => [
        ...prev,
        { title: inputValue, id: Date.now().toString(),isDone:false },
      ]);
      setInputValue("");
    } else {
      showWarning();
    }
  };

  return (
    <div
      className={`min-h-full min-w-full flex flex-col justify-center items-center ${
        dark ? "dark" : "light"
      }`}
    >
      <div className="flex items-center absolute top-3 right-8">
        <p className="w-25 bg-transparent p-2 rounded-sm">
          {`${dark ? "Light" : "Dark"}`}
        </p>
        <input
          type="checkbox"
          className="toggle border-blue-500 bg-white-500 [--tglbg:black] hover:bg-blue-700"
          defaultChecked
          onClick={() => setDark(!dark)}
        />
      </div>
      <ImageHeader />
      <div className="w-[350px]">
        <form className="mb-5 flex  justify-center items-center" onSubmit={handleSubmit}>
          <Input inputValue={inputValue} setInputValue={setInputValue} />
          <Button title={"ADD"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" />
        </form>

        <div className=" h-64 overflow-y-auto rounded-sm">
          <ItemList items={items} setItems={setItems} />
        </div>
      </div>


      {
        <ToastContainer
          stacked
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      }
    </div>
  );
}

export default App;
