import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();

const PORT = process.env.PORT || 8080;
const JWT_SECRET = "your_secret_key"; // apna secret environment me rakhna production me

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.use(express.json());

app.post("/register", async (req, res) => {
  const { name, email, pass, role } = req.body;
  const hashpwd = await bcrypt.hash(pass, 10);
  let user = {
    name,
    email,
    pass: hashpwd,
    role,
  };
  const result = await User.create(user);
  res.status(201).json({ message: "User registered successfully", result });
});

// GET all users (corrected model name)
app.get("/users", async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" });
  }
});

// LOGIN route with JWT
app.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(pass, user.pass);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
});
