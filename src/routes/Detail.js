import { useSelector } from "react-redux";
import { useParams } from "react-router";

function Detail() {
  const { id } = useParams();
  const toDos = useSelector((state) => state);
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  return (
    <>
      <h1>{toDo?.text}</h1>
      <small>Created At: {toDo?.id}</small>
    </>
  );
}

export default Detail;
