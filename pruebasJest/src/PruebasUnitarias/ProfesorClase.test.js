import { ProfesorClase } from "../../clases/profesorClase.js";
import { Linea } from "../../models/Linea.js";
import { Profesor } from "../../models/Profesor.js";

// Mock de Sequelize
jest.mock("../../models/Linea.js");
jest.mock("../../models/Profesor.js");

describe("ProfesorClase.buscarPorLineas", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("debe retornar [] si lineaIds no es un array (clase I1)", async () => {
    const resultado = await ProfesorClase.buscarPorLineas("1,2");
    expect(resultado).toEqual([]);
  });

  test("debe retornar [] si lineaIds es un array vacío (clase I2)", async () => {
    const resultado = await ProfesorClase.buscarPorLineas([]);
    expect(resultado).toEqual([]);
  });

  test("debe retornar [] si no se encuentran áreas asociadas (clase I6)", async () => {
    Linea.findAll.mockResolvedValue([]);
    const resultado = await ProfesorClase.buscarPorLineas([999]);
    expect(Linea.findAll).toHaveBeenCalled();
    expect(resultado).toEqual([]);
  });

  test("debe retornar [] si no se encuentran profesores (clase I7)", async () => {
    Linea.findAll.mockResolvedValue([{ Areaid: 1 }]);
    Profesor.findAll.mockResolvedValue([]);
    const resultado = await ProfesorClase.buscarPorLineas([1]);
    expect(resultado).toEqual([]);
  });

  test("debe retornar profesores si todo es válido (clases V1-V6)", async () => {
    Linea.findAll.mockResolvedValue([{ Areaid: 1 }]);
    Profesor.findAll.mockResolvedValue([
      {
        id: 5,
        Usuario: { nombres: "Hernan", apellidos: "Nina", email: "hninaha@ulima.edu.pe" },
        Areas: [{ id: 1, nombre: "IA", Lineas: [{ nombre: "Visión" }] }],
        Asesorias: [{ horario: "Viernes", lugar: "305", link: "https://meet.google.com/hernan" }]
      }
    ]);

    const resultado = await ProfesorClase.buscarPorLineas([1]);
    expect(resultado).toHaveLength(1);
    expect(resultado[0].Usuario.nombres).toBe("Hernan");
  });
});
