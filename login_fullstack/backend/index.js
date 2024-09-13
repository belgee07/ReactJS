import express from "express";
import bcrypt from "bcryptjs";
import cors from "cors";
import { readFileSync, writeFileSync } from "fs";
import { error } from "console";
const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());

app.post("/sign-up", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(hashedPassword);

  writeFileSync(
    "/db.json",
    JSON.stringify({ username, password: hashedPassword })
  );

  res.status(200).send("Success");
});

app.post("/user", async (req, res) => {
  const { email, password } = req.body;
  const resultJson = await readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);

  const check = result.users.find((el) => el.email === email);
  console.log({ check });
  if (check) {
    res.status(400).send("Burtgeltei email baina");
    return;
  }
  result.users.push({ email, password });
  writeFileSync("./db.json", JSON.stringify(result), "utf-8");
  res.send(result.users);
});

app.listen(port, () => {
  console.log(`http:localhost:${port}`);
});
