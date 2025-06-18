import { useEffect, useState } from 'react';
import { obtenerAsesorias } from '../../Service/asesoriaService';

export default function ListaAsesorias() {
  const [asesorias, setAsesorias] = useState([]);

  useEffect(() => {
    cargarAsesorias();
  }, []);

  const cargarAsesorias = async () => {
    const data = await obtenerAsesorias();
    setAsesorias(data);
  };

  const eliminar = async (id) => {
    await eliminarAsesoria(id);
    cargarAsesorias();
  };

  return (
    <div>
      <h2>Lista de Asesorías</h2>
      <ul>
        {asesorias.map(a => (
          <li key={a.id}>
            {a.horario} - {a.lugar}
            <button onClick={() => eliminar(a.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
