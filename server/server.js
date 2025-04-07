// const dotenv = require('dotenv');
// dotenv.config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const sales = require("./routes/sales")
// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use('/', sales);

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));


// const corsOption = {
//     // origin: "http://localhost:5173", https://fastidious-paletas-636520.netlify.app/
//     origin: "http://localhost:5173",
//     methods: "GET, POST,PUT,DELETE,PATCH, HEAD",
//     credentials : true,
//   }
//   app.use(cors(corsOption))
//   const PORT = process.env.PORT || 5000;
  
  
// app.listen(5000, () => console.log("Server running on port 5000"));



require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/userRoutes")
const sales = require("./routes/sales")
const emp = require("./routes/emp")
const profitRoute = require("./routes/profitRoute")
const attendance = require("./routes/attendanceRoutes")
const saless = require("./routes/adi-sales")
const salesChart = require("./routes/salesChart");
const Todoo = require("./routes/todoRoutes")
// const employeeRoutes = require("./routes/employeeRoutes");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected!");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

connectDB();
app.use("/api/users", userRoute);
app.use("/api/sales", sales);
app.use("/", profitRoute);
app.use("/emp", emp);
app.use('/api/attend', attendance);
app.use("/", saless);
app.use("/", Todoo);
app.use("/api/salesChart", salesChart);
// app.use("/api/employees", employeeRoutes);

app.use(cors({
  origin: ["http://localhost:3000", "http://13.203.36.105:3000"], // add more if needed
  credentials: true,
}));


// app.use('/api/employ', require('./routes/employeeRoutes'));

// Routes
app.get("/", (req, res) => {
  res.send("Admin Dashboard API");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


