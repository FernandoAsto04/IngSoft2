import { sequelize } from '../../database/database.js';
import { TrabajoClase } from '../../clases/trabajoClase.js';
import { Area } from '../../models/Area.js';
import { Estado } from '../../models/Estado.js';
import { Tipo } from '../../models/Tipo.js';
import { Trabajo } from '../../models/Trabajo.js';

describe('TrabajoClase', () => {
  let area, estado, tipo;

  beforeAll(async () => {
    // Sincroniza las tablas necesarias
    await sequelize.sync({ force: true });
  });

  beforeEach(async () => {
    // Limpia y crea datos requeridos para las FK
    await Trabajo.destroy({ where: {} });
    await Area.destroy({ where: {} });
    await Estado.destroy({ where: {} });
    await Tipo.destroy({ where: {} });

    area = await Area.create({ nombre: 'Sistemas de TI' });
    estado = await Estado.create({ nombre: 'Terminado' });
    tipo = await Tipo.create({ nombre: 'Tesis' });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  describe('guardarTrabajo', () => {
    test('Happy path: guarda un trabajo válido', async () => {
      const trabajoData = {
        titulo: 'Trabajo de Prueba',
        descripcion: 'Descripción suficientemente larga',
        fecharegistro: new Date().toISOString(),
        observaciones: 'Ninguna critica',
        palabrasclave: 'prueba, test',
        ciclo: '2024-1',
        visible: true,
        Areaid: area.id,
        Estadoid: estado.id,
        Tipoid: tipo.id
      };
      const trabajoClase = new TrabajoClase(trabajoData);
      const result = await trabajoClase.guardarTrabajo();
      
      expect(result).toBeDefined();
      expect(result.titulo).toBe(trabajoData.titulo);
      expect(result.Areaid).toBe(area.id);
      expect(result.Estadoid).toBe(estado.id);
      expect(result.Tipoid).toBe(tipo.id);
    });

    test('Unhappy path: error por título vacío', async () => {
      const trabajoData = {
        titulo: '',
        descripcion: 'Descripción suficientemente larga',
        fecharegistro: new Date().toISOString(),
        observaciones: 'Ninguna',
        palabrasclave: 'prueba, test',
        ciclo: '2024-1',
        visible: true,
        Areaid: area.id,
        Estadoid: estado.id,
        Tipoid: tipo.id
      };
      const trabajoClase = new TrabajoClase(trabajoData);
      await expect(trabajoClase.guardarTrabajo()).rejects.toThrow('El título del trabajo es obligatorio.');
    });

    test('Unhappy path: error por título solo espacios', async () => {
      const trabajoData = {
        titulo: '   ',
        descripcion: 'Descripción suficientemente larga',
        fecharegistro: new Date().toISOString(),
        observaciones: 'Ninguna',
        palabrasclave: 'prueba, test',
        ciclo: '2024-1',
        visible: true,
        Areaid: area.id,
        Estadoid: estado.id,
        Tipoid: tipo.id
      };
      const trabajoClase = new TrabajoClase(trabajoData);
      await expect(trabajoClase.guardarTrabajo()).rejects.toThrow('El título del trabajo es obligatorio.');
    });

    test('Unhappy path: error por descripción corta', async () => {
      const trabajoData = {
        titulo: 'Trabajo',
        descripcion: 'Corta',
        fecharegistro: new Date().toISOString(),
        observaciones: 'Ninguna',
        palabrasclave: 'prueba, test',
        ciclo: '2024-1',
        visible: true,
        Areaid: area.id,
        Estadoid: estado.id,
        Tipoid: tipo.id
      };
      const trabajoClase = new TrabajoClase(trabajoData);
      await expect(trabajoClase.guardarTrabajo()).rejects.toThrow('La descripción debe tener al menos 10 caracteres.');
    });

    test('Unhappy path: error por fecha inválida', async () => {
      const trabajoData = {
        titulo: 'Trabajo',
        descripcion: 'Descripción suficientemente larga',
        fecharegistro: 'fecha-invalida',
        observaciones: 'Ninguna',
        palabrasclave: 'prueba, test',
        ciclo: '2024-1',
        visible: true,
        Areaid: area.id,
        Estadoid: estado.id,
        Tipoid: tipo.id
      };
      const trabajoClase = new TrabajoClase(trabajoData);
      await expect(trabajoClase.guardarTrabajo()).rejects.toThrow('Fecha de registro inválida.');
    });

    test('Unhappy path: error por palabras clave no string', async () => {
      const trabajoData = {
        titulo: 'Trabajo',
        descripcion: 'Descripción suficientemente larga',
        fecharegistro: new Date().toISOString(),
        observaciones: 'Ninguna',
        palabrasclave: 123,
        ciclo: '2024-1',
        visible: true,
        Areaid: area.id,
        Estadoid: estado.id,
        Tipoid: tipo.id
      };
      const trabajoClase = new TrabajoClase(trabajoData);
      await expect(trabajoClase.guardarTrabajo()).rejects.toThrow('Las palabras clave deben ser un texto.');
    });

    test('Unhappy path: error por ciclo inválido', async () => {
      const trabajoData = {
        titulo: 'Trabajo',
        descripcion: 'Descripción suficientemente larga',
        fecharegistro: new Date().toISOString(),
        observaciones: 'Ninguna',
        palabrasclave: 'prueba, test',
        ciclo: '2024-X',
        visible: true,
        Areaid: area.id,
        Estadoid: estado.id,
        Tipoid: tipo.id
      };
      const trabajoClase = new TrabajoClase(trabajoData);
      await expect(trabajoClase.guardarTrabajo()).rejects.toThrow('El ciclo debe tener el formato correcto');
    });

    test('Unhappy path: error por visible no booleano', async () => {
      const trabajoData = {
        titulo: 'Trabajo',
        descripcion: 'Descripción suficientemente larga',
        fecharegistro: new Date().toISOString(),
        observaciones: 'Ninguna',
        palabrasclave: 'prueba, test',
        ciclo: '2024-1',
        visible: 'si',
        Areaid: area.id,
        Estadoid: estado.id,
        Tipoid: tipo.id
      };
      const trabajoClase = new TrabajoClase(trabajoData);
      await expect(trabajoClase.guardarTrabajo()).rejects.toThrow("El campo 'visible' debe ser booleano.");
    });

    test('Unhappy path: error por Areaid inválido', async () => {
      const trabajoData = {
        titulo: 'Trabajo',
        descripcion: 'Descripción suficientemente larga',
        fecharegistro: new Date().toISOString(),
        observaciones: 'Ninguna',
        palabrasclave: 'prueba, test',
        ciclo: '2024-1',
        visible: true,
        Areaid: 'no-es-numero',
        Estadoid: estado.id,
        Tipoid: tipo.id
      };
      const trabajoClase = new TrabajoClase(trabajoData);
      await expect(trabajoClase.guardarTrabajo()).rejects.toThrow('Área no válida.');
    });

    test('Unhappy path: error por Estadoid inválido', async () => {
      const trabajoData = {
        titulo: 'Trabajo',
        descripcion: 'Descripción suficientemente larga',
        fecharegistro: new Date().toISOString(),
        observaciones: 'Ninguna',
        palabrasclave: 'prueba, test',
        ciclo: '2024-1',
        visible: true,
        Areaid: area.id,
        Estadoid: null,
        Tipoid: tipo.id
      };
      const trabajoClase = new TrabajoClase(trabajoData);
      await expect(trabajoClase.guardarTrabajo()).rejects.toThrow('Estado no válido.');
    });

    test('Unhappy path: error por Tipoid inválido', async () => {
      const trabajoData = {
        titulo: 'Trabajo',
        descripcion: 'Descripción suficientemente larga',
        fecharegistro: new Date().toISOString(),
        observaciones: 'Ninguna',
        palabrasclave: 'prueba, test',
        ciclo: '2024-1',
        visible: true,
        Areaid: area.id,
        Estadoid: estado.id,
        Tipoid: undefined
      };
      const trabajoClase = new TrabajoClase(trabajoData);
      await expect(trabajoClase.guardarTrabajo()).rejects.toThrow('Tipo no válido.');
    });
  });

  describe('mostrarDatosTrabajo', () => {
    test('debe mostrar datos completos cuando todo es válido', async () => {
      // Primero creamos un trabajo en la BD
      const trabajoData = {
        titulo: 'Trabajo de Prueba',
        descripcion: 'Descripción del trabajo de prueba con más de 10 caracteres',
        fecharegistro: new Date().toISOString(),
        observaciones: 'Observaciones del trabajo',
        palabrasclave: 'prueba, test, jest',
        ciclo: '2024-1',
        visible: true,
        Areaid: area.id,
        Estadoid: estado.id,
        Tipoid: tipo.id
      };

      const trabajoClase = new TrabajoClase(trabajoData);
      await trabajoClase.guardarTrabajo();

      // Ahora probamos mostrarDatosTrabajo
      const datos = trabajoClase.mostrarDatosTrabajo();

      expect(datos).toEqual({
        id: expect.any(Number),
        titulo: 'Trabajo de Prueba',
        descripcion: 'Descripción del trabajo de prueba con más de 10 caracteres',
        fecharegistro: expect.any(String),
        observaciones: 'Observaciones del trabajo',
        palabrasclave: 'prueba, test, jest',
        ciclo: '2024-1',
        visible: true,
        area: null, // No se incluyen las relaciones en el constructor
        estado: null,
        tipo: null
      });
    });

    test('debe mostrar "Sin título" cuando el título está vacío', () => {
      const trabajoClase = new TrabajoClase({
        id: 1,
        titulo: '',
        descripcion: 'Descripción válida',
        fecharegistro: '2024-01-15',
        ciclo: '2024-1',
        visible: true
      });

      const datos = trabajoClase.mostrarDatosTrabajo();
      expect(datos.titulo).toBe('Sin título');
    });

    test('debe mostrar "Sin título" cuando el título solo tiene espacios', () => {
      const trabajoClase = new TrabajoClase({
        id: 1,
        titulo: '   ',
        descripcion: 'Descripción válida',
        fecharegistro: '2024-01-15',
        ciclo: '2024-1',
        visible: true
      });

      const datos = trabajoClase.mostrarDatosTrabajo();
      expect(datos.titulo).toBe('Sin título');
    });

    test('debe mostrar null cuando el ciclo tiene formato inválido', () => {
      const trabajoClase = new TrabajoClase({
        id: 1,
        titulo: 'Título válido',
        descripcion: 'Descripción válida',
        fecharegistro: '2024-01-15',
        ciclo: '2024-3',
        visible: true
      });

      const datos = trabajoClase.mostrarDatosTrabajo();
      expect(datos.ciclo).toBeNull();
    });

    test('debe mostrar false cuando visible no es booleano', () => {
      const trabajoClase = new TrabajoClase({
        id: 1,
        titulo: 'Título válido',
        descripcion: 'Descripción válida',
        fecharegistro: '2024-01-15',
        ciclo: '2024-1',
        visible: 'true'
      });

      const datos = trabajoClase.mostrarDatosTrabajo();
      expect(datos.visible).toBe(false);
    });

    test('debe manejar objetos area, estado y tipo nulos', () => {
      const trabajoClase = new TrabajoClase({
        id: 1,
        titulo: 'Título válido',
        descripcion: 'Descripción válida',
        fecharegistro: '2024-01-15',
        ciclo: '2024-1',
        visible: true,
        area: null,
        estado: null,
        tipo: null
      });

      const datos = trabajoClase.mostrarDatosTrabajo();
      expect(datos.area).toBeNull();
      expect(datos.estado).toBeNull();
      expect(datos.tipo).toBeNull();
    });

    test('debe mostrar datos con relaciones cuando están disponibles', () => {
      const trabajoClase = new TrabajoClase({
        id: 1,
        titulo: 'Título válido',
        descripcion: 'Descripción válida',
        fecharegistro: '2024-01-15',
        ciclo: '2024-1',
        visible: true,
        Area: { id: 1, nombre: 'Área de Prueba' },
        Estado: { id: 1, nombre: 'Estado de Prueba' },
        Tipo: { id: 1, nombre: 'Tipo de Prueba' }
      });

      const datos = trabajoClase.mostrarDatosTrabajo();
      expect(datos.area).toEqual({ id: 1, nombre: 'Área de Prueba' });
      expect(datos.estado).toEqual({ id: 1, nombre: 'Estado de Prueba' });
      expect(datos.tipo).toEqual({ id: 1, nombre: 'Tipo de Prueba' });
    });
  });
}); 