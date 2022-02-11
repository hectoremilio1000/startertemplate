import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect } from "react";
import { useState } from "react";
import * as mutations from "../graphql/mutations";
import { v4 as uuid } from "uuid";
import * as queries from "../graphql/queries";

function Prueba() {
  const [todo, setTodo] = useState("");
  const [datosTodo, setdatosTodo] = useState([]);
  const [updateTodo, setUpdateTodo] = useState("");
  const agregarTodo = async () => {
    let Nuevo = {
      id: uuid(),
      name: todo,
      description: null,
    };

    try {
      const newTodo = await API.graphql({
        query: mutations.createTodo,
        variables: { input: Nuevo },
      });
      console.log(newTodo);
      setTodo("");
    } catch (err) {}
  };
  const fetchTodo = async () => {
    try {
      const allTodo = await API.graphql({
        query: queries.listTodos,
      });
      const dataTodo = allTodo.data.listTodos.items;
      setdatosTodo(dataTodo);
      console.log(allTodo);
      console.log("dataTodo", dataTodo);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  const updateName = async ({ id }) => {
    try {
      const updatedTodo = await API.graphql({
        query: mutations.updateTodo,
        variables: { input: { id: id, name: updateTodo } },
      });
      console.log(updatedTodo);
    } catch (err) {
      console.log(err);
    }
  };

  const deteleTodo = async ({ id }) => {
    try {
      console.log("id", id);
      await API.graphql({
        query: mutations.deleteTodo,
        variables: { input: { id } },
      });
      console.log("datostodo", datosTodo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>prueba de graphql</h1>
      <div style={{ margin: 2 }}>
        <label style={{ margin: 2 }}>To do nuevo</label>
        <input
          type="text"
          placeholder="ingresa todo"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button onClick={agregarTodo}>Agregar</button>
      </div>
      <div>
        <h1>Aquí se van a poner todos los todos creados</h1>
        <h2>
          {datosTodo.map((elementoTodo, id) => (
            <div key={elementoTodo.id}>
              {elementoTodo.name}{" "}
              <div>
                <input
                  placeholder="cambiar nombre todo"
                  value={updateTodo}
                  onChange={e => setUpdateTodo(e.target.value)}
                />
                <button
                  onClick={() => updateName(elementoTodo)}
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  Cambiar nombre del Todo
                </button>
              </div>
              <button
                onClick={() => deteleTodo(elementoTodo)}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Borrar
              </button>
            </div>
          ))}
        </h2>
      </div>
    </div>
  );
}

export default Prueba;
