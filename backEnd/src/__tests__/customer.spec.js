const request = require("supertest");
const app = require("../app");
const mongoose = require("../database/connection");

describe("Customer", () => {
  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("should create a new customer", async () => {
    const response = await request(app).post("/customer").send({
      email: "lipers20@hotmail.com",
      company: "smart",
      cell_phone: "123789",
      cnpj: "12378945622",
    });

    expect(response.body.customer).toHaveProperty("email");
    expect(response.body.customer).toHaveProperty("company");
    expect(response.body.customer).toHaveProperty("cell_phone");
    expect(response.body.customer).toHaveProperty("cnpj");
    expect(response.statusCode).toBe(200);
  });
});
