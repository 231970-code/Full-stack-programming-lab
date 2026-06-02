const request = require("supertest");
const app = require("../server");

describe("Weather API Tests", () => {

  // UNIT TEST - Input Validation
  describe("Unit Tests - Input Validation", () => {

    test("should return 404 for missing city segment", async () => {
  const res = await request(app).get("/api/weather/");
  expect(res.statusCode).toBe(404); // Express returns 404, route not matched
});

    test("should return 404 for unknown route", async () => {
      const res = await request(app).get("/api/weather");
      expect(res.statusCode).toBe(404);
    });

  });

  // INTEGRATION TEST - API Response Structure
  describe("Integration Tests - API Response", () => {

    test("should return correct JSON structure for valid city", async () => {
      const res = await request(app).get("/api/weather/London");
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("city");
      expect(res.body).toHaveProperty("temperature");
      expect(res.body).toHaveProperty("condition");
      expect(res.body).toHaveProperty("humidity");
    }, 15000); // 15 second timeout for real API call

    test("should return 404 for invalid city", async () => {
      const res = await request(app).get("/api/weather/XYZINVALIDCITY999");
      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty("error");
    }, 15000);

  });

  // SYSTEM TEST - Full Flow
  describe("System Tests - Full Flow", () => {

    test("should fetch real weather data for Islamabad", async () => {
      const res = await request(app).get("/api/weather/Islamabad");
      expect(res.statusCode).toBe(200);
      expect(typeof res.body.city).toBe("string");
      expect(typeof res.body.temperature).toBe("number");
      expect(typeof res.body.humidity).toBe("number");
      expect(typeof res.body.condition).toBe("string");
    }, 15000);

    test("should fetch real weather data for Karachi", async () => {
      const res = await request(app).get("/api/weather/Karachi");
      expect(res.statusCode).toBe(200);
      expect(res.body.city).toBeTruthy();
    }, 15000);

  });

});