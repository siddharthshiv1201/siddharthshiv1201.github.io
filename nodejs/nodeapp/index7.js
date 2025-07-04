import express from "express";

const app = express();

app.use(express.json());

let products = [];

app.get("/", (req, res) => {
  res.send(products);
});

app.post("/", (req, res) => {
  try {
    const { id, name, price } = req.body;

    const exists = products.some((product) => product.id === id);

    if (exists) {
      return res.status(400).send("Product already exists");
    }

    products.push({ id, name, price });
    res.send("Product added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong :(");
  }
});

app.delete("/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id === id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  products = products.filter((product) => product.id !== id);

  res.json({ message: "Product deleted successfully" });
});

app.put("/:id", (req, res) => {
  try {
    const id = req.params.id; // Convert to number if your ids are numeric

    const { name } = req.body;

    const product = products.find((product) => product.id === id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (name) {
      product.name = name;
      return res.json({
        message: "Product name updated successfully",
        product,
      });
    } else {
      return res
        .status(400)
        .json({ message: "Please provide a name to update" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating product" });
  }
});


app.listen(8080, () => {
  console.log("server is running");
});
