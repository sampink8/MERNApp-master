import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //Si no hay proyecto seleccionado
  if(!proyecto) return <h2>Selecciona un proyecto</h2>

  //Array destr para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const tareas = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Col", estado: true },
    { nombre: "Elegir Pla", estado: false }
  ];

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id)
  }

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareas.length === 0 ? (
          <li className="tarea"> No hay tareas </li>
        ) : (
          tareas.map(tarea => <Tarea tarea={tarea} />)
        )}
        <button  type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
        >Eliminar Proyecto &times;</button>
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
