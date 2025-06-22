import { ProfesorDAO } from './profesorDAO.js';
import { Profesor } from './Profesor.js';

jest.mock('./Profesor.js');

describe('ProfesorDAO', () => {
  const dao = new ProfesorDAO();

  test('listarProfesores debe retornar lista de profesores', async () => {
    Profesor.findAll.mockResolvedValue([{ id: 1 }]);
    const result = await dao.listarProfesores();
    expect(result).toEqual([{ id: 1 }]);
    expect(Profesor.findAll).toHaveBeenCalled();
  });

  test('insertarProfesor debe retornar null si se inserta correctamente', async () => {
    Profesor.create.mockResolvedValue({});
    const result = await dao.insertarProfesor({ id: 1 });
    expect(result).toBeNull();
    expect(Profesor.create).toHaveBeenCalledWith({ id: 1 });
  });

  test('insertarProfesor debe retornar mensaje de error si falla', async () => {
    Profesor.create.mockRejectedValue(new Error('Error al insertar'));
    const result = await dao.insertarProfesor({ id: 1 });
    expect(result).toBe('Error al insertar');
  });

  test('actualizarProfesor debe retornar null si actualiza', async () => {
    Profesor.update.mockResolvedValue([1]);
    const result = await dao.actualizarProfesor({ id: 1 });
    expect(result).toBeNull();
    expect(Profesor.update).toHaveBeenCalledWith({ id: 1 }, { where: { id: 1 } });
  });

  test('actualizarProfesor debe retornar "Error" si no actualiza nada', async () => {
    Profesor.update.mockResolvedValue([0]);
    const result = await dao.actualizarProfesor({ id: 1 });
    expect(result).toBe('Error');
  });

  test('actualizarProfesor debe retornar mensaje de error si ocurre excepción', async () => {
    Profesor.update.mockRejectedValue(new Error('Error al actualizar'));
    const result = await dao.actualizarProfesor({ id: 1 });
    expect(result).toBe('Error al actualizar');
  });

  test('eliminarProfesor debe retornar null si elimina correctamente', async () => {
    Profesor.destroy.mockResolvedValue(1);
    const result = await dao.eliminarProfesor([1]);
    expect(result).toBeNull();
    expect(Profesor.destroy).toHaveBeenCalledWith({ where: { id: [1] } });
  });

  test('eliminarProfesor debe retornar mensaje de error si falla', async () => {
    Profesor.destroy.mockRejectedValue(new Error('Error al eliminar'));
    const result = await dao.eliminarProfesor([1]);
    expect(result).toBe('Error al eliminar');
  });

  test('obtenerProfesorPorId debe retornar profesor encontrado', async () => {
    Profesor.findByPk.mockResolvedValue({ id: 1 });
    const result = await dao.obtenerProfesorPorId(1);
    expect(result).toEqual({ id: 1 });
    expect(Profesor.findByPk).toHaveBeenCalledWith(1);
  });
});
