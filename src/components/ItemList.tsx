import { Button } from "./Button";
import { Items, ReactSetState } from "../types/utils";
import { useState } from "react";
import { Input } from "./Input";

type ItemList = {
  items: Items[];
  setItems: ReactSetState<Items[]>;
};

export const ItemList = ({ items, setItems }: ItemList) => {
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState<string>("");

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };

  const handleDone = (id: string) => {
    setItems((prev) =>
      prev.map((data) =>
        data.id === id ? { ...data, isDone: !data.isDone } : data
      )
    );
  };

  const handleEdit = (id: string, title: string) => {
    setEditingItemId(id);
    setNewTitle(title);
  };

  const handleUpdateSubmit=(event: React.FormEvent)=>{
    event.preventDefault()
    const itemIndex=items.findIndex(item=>item.id===editingItemId)

    const updatedItems=[...items]
    updatedItems[itemIndex]={...updatedItems[itemIndex],title:newTitle}

    setItems(updatedItems)
    setEditingItemId(null)
    setNewTitle('')
  }

  return (
    <>
      {items.map((data) => (
        <div
          key={data.id}
          className="flex justify-between items-center border border-slate-600 p-2 mb-2"
        >
          {editingItemId === data.id ? (
            <form className="flex w-full" onSubmit={handleUpdateSubmit}>
              <Input inputValue={newTitle} setInputValue={setNewTitle} />
              <Button
                title={"EDIT"}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded-md"
              />
            </form>
          ) : (
            <>
              <p className={data.isDone ? "line-through" : ""}>{data.title}</p>
              <div className="flex space-x-2">
                <Button
                  className={`rounded-md border p-2 border-black bg-green-500  ${
                    data.isDone
                      ? "fa-solid fa-cancel"
                      : "fa-regular fa-circle-check"
                  } `}
                  onClick={() => handleDone(data.id)}
                />
                <Button
                  className="rounded-md border p-2 border-black bg-orange-500 fa-solid fa-pencil "
                  onClick={() => handleEdit(data.id, data.title)}
                />
                <Button
                  className="rounded-md border p-2 border-black bg-red-500 fa-solid fa-trash"
                  onClick={() => handleDelete(data.id)}
                />
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};
