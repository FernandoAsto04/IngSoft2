const API_URL = 'http://localhost:3002/trabajoPapers';

export const obtenerTrabajosPaper = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerTrabajoPaper = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearTrabajoPaper = async (trabajoPaper) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trabajoPaper),
  });
  return await res.json();
};

export const actualizarTrabajoPaper = async (id, trabajoPaper) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trabajoPaper),
  });
  return await res.json();
};

export const eliminarTrabajoPaper = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
