import app from "./app";

app.listen(process.env.PORT, () => {
  console.log("CORS-enabled web server listening on port " + process.env.PORT);
});
