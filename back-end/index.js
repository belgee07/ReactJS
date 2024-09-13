import express from "express";
import bcrypt from "bcryptjs";

const app = express();

const port = 8000;
app.use(express.json());

app.post("/sign-up", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(hashedPassword);

  // writeFileSync(
  //   "/db.json",
  //   JSON.stringify({ username, password: hashedPassword })
  // );

  res.status(200).send("Success");
});

app.listen(port, () => {
  console.log(`http:localhost:${port}`);
});
