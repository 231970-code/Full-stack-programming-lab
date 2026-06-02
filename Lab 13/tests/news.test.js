const request = require("supertest");
const app = require("../server");

describe("News API Tests", () => {

  // UNIT TEST - Input Validation
  describe("Unit Tests - Input Validation", () => {

    test("should return 400 for country code longer than 2 letters", async () => {
      const res = await request(app).get("/api/news/usa");
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });

    test("should return 400 for numeric country code", async () => {
      const res = await request(app).get("/api/news/12");
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("error");
    });

    test("should return 400 for single letter country code", async () => {
      const res = await request(app).get("/api/news/u");
      expect(res.statusCode).toBe(400);
    });

  });

  // INTEGRATION TEST - API Response Structure
  describe("Integration Tests - API Response", () => {

    test("should return correct JSON structure for valid country", async () => {
      const res = await request(app).get("/api/news/us");
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("country");
      expect(res.body).toHaveProperty("totalResults");
      expect(res.body).toHaveProperty("articles");
      expect(Array.isArray(res.body.articles)).toBe(true);
    }, 15000);

    test("each article should have required fields", async () => {
      const res = await request(app).get("/api/news/us");
      expect(res.statusCode).toBe(200);
      const article = res.body.articles[0];
      expect(article).toHaveProperty("title");
      expect(article).toHaveProperty("source");
      expect(article).toHaveProperty("url");
      expect(article).toHaveProperty("publishedAt");
    }, 15000);

  });

  // SYSTEM TEST - Full Flow
  describe("System Tests - Full Flow", () => {

    test("should return max 10 articles for US news", async () => {
      const res = await request(app).get("/api/news/us");
      expect(res.statusCode).toBe(200);
      expect(res.body.articles.length).toBeLessThanOrEqual(10);
    }, 15000);

    test("should return news for Pakistan (pk)", async () => {
      const res = await request(app).get("/api/news/pk");
      expect(res.statusCode).toBe(200);
      expect(res.body.country).toBe("pk");
    }, 15000);

    test("should return news for Great Britain (gb)", async () => {
      const res = await request(app).get("/api/news/gb");
      expect(res.statusCode).toBe(200);
      expect(res.body.articles).toBeDefined();
    }, 15000);

  });

});