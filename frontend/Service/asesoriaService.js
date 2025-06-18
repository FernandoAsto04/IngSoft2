const API_URL = 'http://localhost:3002/asesorias';

export const obtenerAsesorias = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerAsesoria = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearAsesoria = async (asesoria) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(asesoria),
  });
  return await res.json();
};

export const actualizarAsesoria = async (id, asesoria) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(asesoria),
  });
  return await res.json();
};

export const eliminarAsesoria = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
