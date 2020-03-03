import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  //revisar si proyectos tiene contenido
  
  useEffect(() => {
    obtenerProyectos()
  }, []);
  
  if (proyectos.length === 0) return <p>No hay proyectos</p>;

  return (
    <ul className="listado-proyectos">
      {proyectos.map(pro => (
        <Proyecto 
                  
                  proyecto={pro} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
