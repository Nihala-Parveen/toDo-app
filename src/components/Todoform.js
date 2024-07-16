import { useRef, useEffect } from "react";

const Todoform = ({ handleSubmit, toDo, setTodo, editId , errorMsg }) => {
  const inputRef = useRef("null");

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div>
    <form className="todoform" onSubmit={handleSubmit}>
      <input
        type="text"
        value={toDo}
        placeholder="Enter your to-do"
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button type="submit">{editId ? "EDIT" : "ADD"}</button>
    </form>
    { errorMsg && <span className="errMsg">{errorMsg}</span> }
    </div>
  );
};

export default Todoform
