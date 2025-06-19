const API_URL = 'http://localhost:3002/areaProfesores';

export const obtenerRelacionesAreaProfesor = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerRelacionAreaProfesor = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearRelacionAreaProfesor = async (relacion) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(relacion),
  });
  return await res.json();
};

export const actualizarRelacionAreaProfesor = async (id, relacion) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(relacion),
  });
  return await res.json();
};

export const eliminarRelacionAreaProfesor = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
