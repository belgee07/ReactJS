import express, { json } from "express";
const port = 8000;
const app = express();
app.use(json());
import { readFileSync, writeFileSync } from "fs";
import { v4 as uuidv4 } from "uuid";

app.post("/signup", async (req, res) => {
  const { password, email } = req.body;
  const resultJson = await readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);

  const userFound = result.signup.find((el) => el.email === email);

  if (userFound) {
    res.send("iim mail davhardaj bn");
    return;
  }

  result.signup.push({
    email,
    password,
  });

  await writeFileSync("./db.json", JSON.stringify(result), "utf-8");

  res.send("successful");
});

app.post("/login", async (req, res) => {
  const { password, email } = req.body;
  const resultJson = await readFileSync("./db.json", "utf-8");
  const result = JSON.parse(resultJson);

  const emailFound = result.signup.find((el) => el.email === email);
  const userPasswordFound = result.signup.find(
    (el) => el.password === password
  );

  const loginEmail = result.login.find((el) => el.email === email);
  const loginPass = result.login.find((el) => el.password === password);

  if (!emailFound || !userPasswordFound) {
    res.send("iim hereglegch bhgui");
    return;
  }

  if (loginEmail || loginPass) {
    res.send("nevtersen bn");
    return;
  }

  result.login.push({
    email,
    password,
  });

  await writeFileSync("./db.json", JSON.stringify(result), "utf-8");

  res.send("Login successful");
});

// //user
// app.get("/users/", async (request, response) => {
//   const resultUsersJson = await fs.readFileSync("./db.json", "utf-8");
//   const result = JSON.parse(resultUsersJson);

//   response.send(result);
// });

// app.get("/user/:id", async (req, res) => {
//   const { id } = req.params;

//   const resultUserJson = await fs.readFileSync("./db.json", "utf-8");
//   const result = JSON.parse(resultUserJson);
//   console.log({ id });
//   const user = result.users.find((el) => el.userId === id);

//   if (!user) {
//     res.status(404);
//     res.send(`user not found following id = ${id}`);
//     return;
//   }

//   res.send(user);
// });

// //posts
// app.get("/posts", async (req, res) => {
//   const resultJson = await fs.readFileSync("./db.json", "utf-8");
//   const result = JSON.parse(resultJson);

//   res.send(result.posts);
// });

// //post create hiij bn

// app.post("/post", async (req, res) => {
//   const { description, image, userId } = req.body;
//   const resultJson = await fs.readFileSync("./db.json", "utf-8");
//   const result = JSON.parse(resultJson);
//   const postId = uuidv4();
//   const publishedAt = new Date().toISOString();

//   if (!description || !image || !userId) {
//     res.status(400).send(`body bich`);
//     return;
//   }

//   result.posts.push({
//     postId: postId,
//     userId: userId,
//     description: description,
//     image: image,
//     publishedAt: publishedAt,
//   });

//   await fs.writeFileSync("./db.json", JSON.stringify(result), "utf-8");

//   res.send("Successfully created post");
// });

// //endees delete ajillah bolno zayu

// // app.delete("/post/:id", async (req, res) => {
// //   const { id } = req.params;
// //   const resultJson = await fs.readFileSync("./db.json", "utf-8");
// //   const result = JSON.parse(resultJson);

// //   const postIsThis = result.posts.find((el) => el.postId === id);

// //   if (!postIsThis) {
// //     res.status(400).send("bhgu");
// //     return;
// //   }

// //   const deletedPost = result.posts.filter((el) => el.postId != id);

// //   result.posts = deletedPost;
// //   await fs.writeFileSync("./db.json", JSON.stringify(result), "utf-8");
// //   res.send(result.posts);
// // });

// //port ajillaj ehelj bn
app.listen(port, () => {
  console.log(`localhost ${port}`);
});
