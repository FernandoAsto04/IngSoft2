import { TrabajoClase } from "../../clases/trabajoClase.js";
import { Trabajo } from "../../models/Trabajo.js";
import { Area } from "../../models/Area.js";
import { Estado } from "../../models/Estado.js";
import { Tipo } from "../../models/Tipo.js";

jest.mock("../../models/Trabajo.js");
jest.mock("../../models/Area.js");
jest.mock("../../models/Estado.js");
jest.mock("../../models/Tipo.js");

describe("TrabajoClase.buscarPorCicloYArea", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("debe retornar [] si ciclos no es un arreglo", async () => {
    const resultado = await TrabajoClase.buscarPorCicloYArea("2024-1", [1]);
    expect(resultado).toEqual([]);
  });

  test("debe retornar [] si ciclos contiene formatos inválidos", async () => {
    const resultado = await TrabajoClase.buscarPorCicloYArea(["20241"], [1]);
    expect(resultado).toEqual([]);
  });

  test("debe retornar [] si areaIds no es un arreglo", async () => {
    const resultado = await TrabajoClase.buscarPorCicloYArea(["2024-1"], "1");
    expect(resultado).toEqual([]);
  });

  test("debe retornar [] si areaIds contiene elementos no enteros", async () => {
    const resultado = await TrabajoClase.buscarPorCicloYArea(["2024-1"], ["uno", "dos"]);
    expect(resultado).toEqual([]);
  });

  test("debe retornar [] si no se encuentran trabajos con los filtros dados", async () => {
    Trabajo.findAll.mockResolvedValue([]);
    const resultado = await TrabajoClase.buscarPorCicloYArea(["2024-1"], [1]);
    expect(resultado).toEqual([]);
  });

  test("debe retornar trabajos si todo es válido", async () => {
    const mockTrabajos = [
      {
        id: 1,
        titulo: "Trabajo 1",
        Area: { id: 1, nombre: "IA" },
        Estado: { id: 1, nombre: "Publicado" },
        Tipo: { id: 1, nombre: "Tesis" },
      },
    ];

    Trabajo.findAll.mockResolvedValue(mockTrabajos);

    TrabajoClase.Trabajos = jest.fn().mockReturnValue(mockTrabajos);

    const resultado = await TrabajoClase.buscarPorCicloYArea(["2024-1"], [1]);
    expect(resultado).toEqual(mockTrabajos);
    expect(TrabajoClase.Trabajos).toHaveBeenCalledWith(mockTrabajos);
  });

  test("debe lanzar error si ocurre una excepción interna", async () => {
    Trabajo.findAll.mockRejectedValue(new Error("Error interno"));
    await expect(TrabajoClase.buscarPorCicloYArea(["2024-1"], [1])).rejects.toThrow(
      "No se pudieron obtener los trabajos filtrados."
    );
  });
});
