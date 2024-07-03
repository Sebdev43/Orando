import request from "supertest";
import { startServer, stopServer } from "../server-to-test.js";

let server;

beforeAll(async () => {
  server = await startServer();
});

afterAll(async () => {
  await stopServer();
});

describe("Hikes API", () => {
  /**
   * Test pour récuperer toutes les randonnées
   */
  it("should fecth all hikes", async () => {
    const res = await request(server).get("/hikes");
    expect(res.status).toEqual(200); // Vérifie que le status est bon
    expect(Array.isArray(res.body)).toBe(true); // Vérifie que le body est un tableau
    expect(res.body.length).toBeGreaterThan(0); // Vérifie que le tableau n'est pas vide
  });
  /**
   * Test pour récuperer une randonnée par son id
   */
  it("should fetch a single hike by ID", async () => {
    const hikeId = 1; // Assurez-vous qu'il existe une randonnée avec cet ID dans votre base de données
    const res = await request(server).get(`/hikes/${hikeId}`);
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("id", hikeId);
  });
  /**
   * Test pour gérer la récupération d'une randonnée inexistante
   */
  it("should return 404 for a non-existent hike", async () => {
    const nonExistentId = 9999;
    const res = await request(server).get(`/hikes/${nonExistentId}`);
    expect(res.status).toEqual(404);
    expect(res.body).toHaveProperty("error");
  });
});
