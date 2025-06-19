const API_URL = 'http://localhost:3002/trabajoTesis';

export const obtenerTrabajosTesis = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerTrabajoTesis = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearTrabajoTesis = async (trabajoTesis) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trabajoTesis),
  });
  return await res.json();
};

export const actualizarTrabajoTesis = async (id, trabajoTesis) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trabajoTesis),
  });
  return await res.json();
};

export const eliminarTrabajoTesis = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
