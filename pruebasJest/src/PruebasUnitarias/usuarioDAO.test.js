import { UsuarioDAO } from './usuarioDAO.js';
import { Usuario } from './Usuario.js';

jest.mock('./Usuario.js');

describe('UsuarioDAO', () => {
  const dao = new UsuarioDAO();

  test('listarUsuarios debe retornar usuarios con relaciones', async () => {
    Usuario.findAll.mockResolvedValue([{ id: 1, nombre: 'Test User' }]);
    const result = await dao.listarUsuarios();
    expect(result).toEqual([{ id: 1, nombre: 'Test User' }]);
    expect(Usuario.findAll).toHaveBeenCalled();
  });

  test('insertarUsuario debe retornar null si no hay error', async () => {
    Usuario.create.mockResolvedValue({});
    const result = await dao.insertarUsuario({ nombre: 'Nuevo' });
    expect(result).toBeNull();
  });

  test('actualizarUsuario debe retornar null si actualiza', async () => {
    Usuario.update.mockResolvedValue([1]); // 1 indica que sí actualizó
    const result = await dao.actualizarUsuario({ id: 1 });
    expect(result).toBeNull();
  });

  test('eliminarUsuario debe retornar null si elimina', async () => {
    Usuario.destroy.mockResolvedValue(1);
    const result = await dao.eliminarUsuario(1);
    expect(result).toBeNull();
  });

  test('obtenerUsuarioPorId debe retornar usuario encontrado', async () => {
    Usuario.findByPk.mockResolvedValue({ id: 1 });
    const result = await dao.obtenerUsuarioPorId(1);
    expect(result).toEqual({ id: 1 });
  });
});
