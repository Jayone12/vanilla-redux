import { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
  };

  return (
    <>
      <h1>To DO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
    </>
  );
}

export default Home;
