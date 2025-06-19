const API_URL = 'http://localhost:3002/areas';

export const obtenerAreas = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerArea = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearArea = async (area) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(area),
  });
  return await res.json();
};

export const actualizarArea = async (id, area) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(area),
  });
  return await res.json();
};

export const eliminarArea = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
