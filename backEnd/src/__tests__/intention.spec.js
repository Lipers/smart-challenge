const request = require("supertest");
const app = require("../app");
const mongoose = require("../database/connection");

describe("Intention", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should create a new intention", async () => {
    const response = await request(app).post("/intention").send({
      uuid: "36cd6b15-212b-4546-aef2-66902e18da17",
      zipcode_start: 14095144,
      zipcode_end: 4120132,
      lead: false,
    });

    expect(response.body.intention).toHaveProperty("uuid");
    expect(response.body.intention).toHaveProperty("zipcode_start");
    expect(response.body.intention).toHaveProperty("zipcode_end");
    expect(response.body.intention).toHaveProperty("lead");
    expect(response.statusCode).toBe(200);
  });

  it("Should update the intention", async () => {
    const response = await await request(app).put(
      "/intention/36cd6b15-212b-4546-aef2-66902e18da17"
    );

    expect(response.body.lead).toBe(true);
    expect(response.body).toHaveProperty("uuid");
    expect(response.body).toHaveProperty("zipcode_start");
    expect(response.body).toHaveProperty("zipcode_end");
    expect(response.body).toHaveProperty("lead");
    expect(response.statusCode).toBe(200);
  });
});
