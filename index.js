const express = require("express");
const mongoose = require("mongoose");
const adaptor = require("./adaptor");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.y8izkxk.mongodb.net/cowfactory",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => app.listen(process.env.PORT))
  .catch((err) => console.log(err));

// // Set up an in-memory "database"
// const users = [
//   { id: 1, name: "Alice", email: "alice@example.com" },
//   { id: 2, name: "Bob", email: "bob@example.com" },
//   { id: 3, name: "Charlie", email: "charlie@example.com" },
// ];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.json(users);
});

// app.post("/login", (req, res) => {
//   res.json({
//     name: "Marian Claudiu",
//     password: "$2a$10$oCp9elyL7TZsRM8n2lGzfelljuiScHMpOLFCU0aEHmnnawfEEaMb2",
//     email: "okss@gmail.com",
//     phone: "9110",
//     role: "Customer",
//     is_active: true,
//   });
// });

app.post("/loginTest", async (req, res) => {
  const { nume, parola } = req.body;

  // Find the user with the given nume and parola
  const user = await administrators.findOne({ nume, parola });

  // If the user exists, return a success response
  if (user) {
    return res.status(200).json({ message: "Login successful" });
  }

  // If the user does not exist, return an error response
  return res.status(401).json({ message: "Invalid credentials" });
});

app.post("/cereale", adaptor.createCereale);
app.post("/login", adaptor.login);

app.post("/sectie", adaptor.createSectie);

app.post("/dieta", adaptor.createDieta);

app.post("/reteta", adaptor.createReteta);

app.post("/angajat", adaptor.createAngajat);

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
});

app.post("/cow", adaptor.createCow);
app.get("/cow", adaptor.getAllCows);

app.post("/event", adaptor.createEvent);
app.put("/event", adaptor.finishEvent);

app.put("/users/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === id);
  if (user) {
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
  } else {
    res.status(404).send();
  }
});

app.get("/users/:id", (req, res) => {
  users.forEach((element) => {
    if (element.id == req.params.id) {
      console.log(element);
      res.send(element);
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const userIndex = users.findIndex((u) => u.id === id);
  if (userIndex >= 0) {
    users.splice(userIndex, 1);
    res.send();
  } else {
    res.status(404).send();
  }
});

app.listen(3005, () => {
  console.log("API listening on port 3005");
});
