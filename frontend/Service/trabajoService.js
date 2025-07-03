const API_URL = 'http://localhost:3002/trabajos';

export const obtenerTrabajos = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerTrabajo = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearTrabajo = async (trabajo) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trabajo),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Error al crear trabajo');
  }

  return await res.json();
};

export const actualizarTrabajo = async (id, trabajo) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trabajo),
  });
  return await res.json();
};

export const eliminarTrabajo = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
