import { connect } from "react-redux";
import { useParams } from "react-router";

function Detail({ toDos }) {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));
  return (
    <>
      <h1>{toDo?.text}</h1>
      <small>Created At: {toDo?.id}</small>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
