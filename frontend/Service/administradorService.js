const API_URL = 'http://localhost:3002/administradores';

export const obtenerAdministradores = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const obtenerAdministrador = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return await res.json();
};

export const crearAdministrador = async (administrador) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(administrador),
  });
  return await res.json();
};

export const actualizarAdministrador = async (id, administrador) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(administrador),
  });
  return await res.json();
};

export const eliminarAdministrador = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};
