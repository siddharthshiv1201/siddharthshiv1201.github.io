import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

const users = [
  {
    email: "akshay@gmailcom",
    pass: "1234",
    role: "user",
  },
  {
    email: "amy@gmailcom",
    pass: "1234",
    role: "admin",
  },
];

const SECRET = "mysecretkey";

// Middleware to check token validity
const isAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    const decoded = jwt.verify(token, SECRET);
    req.role = decoded.role;  // decoded token payload ko req me save karo
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

// Middleware to check admin role
const authorize = (req, res, next) => {
  if (req.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Admins only" });
  }
};

app.get("/home", (req, res) => {
  res.send("Home Page");
});

app.post("/login", (req, res) => {
  const { email, pass } = req.body;
  const userFound = users.find(
    (user) => user.email === email && user.pass === pass
  );
  if (userFound) {
    const token = jwt.sign(
      {
        email: userFound.email,
        role: userFound.role,
      },
      SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ user: userFound, token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});
//
app.post("/register", (req, res) => {
    const{name,email,pass,role}=req.body;
    const hashedpwd=bcrypt.hash(pass,10);

});

// Protected + Role-based route
app.get("/users", isAuth, authorize, (req, res) => {
  res.json(users);
});

app.listen(8080, () => {
  console.log("Server started");
});
