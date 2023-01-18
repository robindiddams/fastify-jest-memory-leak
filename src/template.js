test("default root route", async () => {
  const app = build();
  const response = await app.inject({
    url: "/",
  });
  console.log("status code: ", response.statusCode);
  console.log("body: ", response.body);
});
