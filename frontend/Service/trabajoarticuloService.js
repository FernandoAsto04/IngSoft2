const API_URL = 'http://localhost:3002/trabajoArticulos';

export const obtenerTrabajosArticulo = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerTrabajoArticulo = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearTrabajoArticulo = async (trabajoArticulo) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trabajoArticulo),
  });
  return await res.json();
};

export const actualizarTrabajoArticulo = async (id, trabajoArticulo) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trabajoArticulo),
  });
  return await res.json();
};

export const eliminarTrabajoArticulo = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
