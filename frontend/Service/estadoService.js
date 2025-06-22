const API_URL = 'http://localhost:3002/estados';

export const obtenerEstados = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerEstado = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearEstado = async (estado) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(estado),
  });
  return await res.json();
};

export const actualizarEstado = async (id, estado) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(estado),
  });
  return await res.json();
};

export const eliminarEstado = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
