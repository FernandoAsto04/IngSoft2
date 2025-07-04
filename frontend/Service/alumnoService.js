const API_URL = 'http://localhost:3002/alumnos';

export const obtenerAlumnos = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerAlumno = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearAlumno = async (alumno) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(alumno),
  });
  return await res.json();
};

export const actualizarAlumno = async (id, alumno) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(alumno),
  });
  return await res.json();
};

export const eliminarAlumno = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
