import { TrabajoClase } from "../../../backend/clases/trabajoClase.js";
import { Trabajo } from "../../../backend/models/Trabajo.js";

describe("Pruebas unitarias de TrabajoClase, funciones guardarTrabajo y mostrarDatos", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Función guardarTrabajo()", () => {
    it("Debería guardar un trabajo válido", async () => {
      const datos = {
        titulo: "Sistema de Gestión",
        descripcion: "Un sistema para gestionar datos académicos",
        fecharegistro: "2025-07-07",
        observaciones: "Ninguna",
        palabrasclave: "sistema, gestión",
        ciclo: "2025-1",
        visible: true,
        Areaid: 1,
        Estadoid: 2,
        Tipoid: 3
      };

      jest.spyOn(Trabajo, "create").mockResolvedValueOnce({ id: 100, ...datos });

      const trabajo = new TrabajoClase(datos);
      const resultado = await trabajo.guardarTrabajo();

      expect(resultado.id).toBe(100);
      expect(Trabajo.create).toHaveBeenCalledWith(expect.objectContaining({
        titulo: datos.titulo
      }));

      console.log("Pasó: guardarTrabajo con datos válidos");
    });

    it("Error si el título está vacío", async () => {
      const trabajo = new TrabajoClase({
        titulo: "",
        descripcion: "Descripción válida",
        fecharegistro: "2025-07-07",
        palabrasclave: "clave",
        ciclo: "2025-1",
        visible: true,
        Areaid: 1,
        Estadoid: 1,
        Tipoid: 1
      });

      await expect(trabajo.guardarTrabajo()).rejects.toThrow("El título del trabajo es obligatorio.");
      console.log("Pasó: error por título vacío");
    });

    it("Error si la descripción es muy corta", async () => {
      const trabajo = new TrabajoClase({
        titulo: "Título",
        descripcion: "corta",
        fecharegistro: "2025-07-07",
        palabrasclave: "clave",
        ciclo: "2025-1",
        visible: true,
        Areaid: 1,
        Estadoid: 1,
        Tipoid: 1
      });

      await expect(trabajo.guardarTrabajo()).rejects.toThrow("La descripción debe tener al menos 10 caracteres.");
      console.log("Pasó: error por descripción muy corta");
    });

    it("Error si la fecha es inválida", async () => {
      const trabajo = new TrabajoClase({
        titulo: "Título",
        descripcion: "Descripción válida",
        fecharegistro: "fecha inválida",
        palabrasclave: "clave",
        ciclo: "2025-1",
        visible: true,
        Areaid: 1,
        Estadoid: 1,
        Tipoid: 1
      });

      await expect(trabajo.guardarTrabajo()).rejects.toThrow("Fecha de registro inválida.");
      console.log("Pasó: error por fecha inválida");
    });
  });

  describe("MostrarDatosTrabajo()", () => {
    it("Mostrar los datos correctamente con datos válidos", () => {
      const datos = {
        id: 1,
        titulo: "Trabajo Final",
        descripcion: "Descripción completa",
        fecharegistro: "2025-07-07",
        observaciones: "Ninguna",
        palabrasclave: "final, tesis",
        ciclo: "2025-2",
        visible: true,
        Area: { id: 1, nombre: "Software" },
        Estado: { id: 2, nombre: "Aprobado" },
        Tipo: { id: 3, nombre: "Tesis" }
      };

      const trabajo = new TrabajoClase(datos);
      const resultado = trabajo.mostrarDatosTrabajo();

      expect(resultado.titulo).toBe("Trabajo Final");
      expect(resultado.ciclo).toBe("2025-2");
      expect(resultado.visible).toBe(true);
      expect(resultado.area.nombre).toBe("Software");

      console.log("Pasó: mostrarDatosTrabajo con datos completos y válidos");
    });

    it("Reemplazar título vacío por 'Sin título'", () => {
      const trabajo = new TrabajoClase({
        titulo: "",
        descripcion: "Contenido",
        fecharegistro: "2025-07-07",
        ciclo: "2025-2",
        visible: true
      });

      const resultado = trabajo.mostrarDatosTrabajo();
      expect(resultado.titulo).toBe("Sin título");
      console.log("Pasó: título vacío fue reemplazado correctamente");
    });

    it("Colocar ciclo como null si el formato es incorrecto", () => {
      const trabajo = new TrabajoClase({
        titulo: "Tesis",
        descripcion: "Contenido",
        fecharegistro: "2025-07-07",
        ciclo: "inválido",
        visible: true
      });

      const resultado = trabajo.mostrarDatosTrabajo();
      expect(resultado.ciclo).toBeNull();
      console.log("Pasó: ciclo inválido fue detectado correctamente");
    });

    it("Colocar visible en false si no es booleano", () => {
      const trabajo = new TrabajoClase({
        titulo: "Tesis",
        descripcion: "Contenido",
        fecharegistro: "2025-07-07",
        ciclo: "2025-1",
        visible: "sí"
      });

      const resultado = trabajo.mostrarDatosTrabajo();
      expect(resultado.visible).toBe(false);
      console.log("Pasó: campo visible no booleano fue corregido a false");
    });
  });
});
