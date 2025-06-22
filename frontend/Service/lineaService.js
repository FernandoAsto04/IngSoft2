const API_URL = 'http://localhost:3002/lineas';

export const obtenerLineas = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerLinea = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearLinea = async (linea) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(linea),
  });
  return await res.json();
};

export const actualizarLinea = async (id, linea) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(linea),
  });
  return await res.json();
};

export const eliminarLinea = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
