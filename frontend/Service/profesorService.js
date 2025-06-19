const API_URL = 'http://localhost:3002/profesores';

export const obtenerProfesores = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerProfesor = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearProfesor = async (profesor) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profesor),
  });
  return await res.json();
};

export const actualizarProfesor = async (id, profesor) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(profesor),
  });
  return await res.json();
};

export const eliminarProfesor = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
