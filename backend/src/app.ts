import express from "express";
import path from "path";
import taskRoutes from "./routes/taskRoutes"
import cors from "cors";

const app = express()

// Configuração do EJS como motor de templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));


//Middleware para parsear o JSON e dados de formulario
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Middleware CORS - Permitir o frontend (localhost:5173) acessar o backend
app.use(cors());


app.use("/api", taskRoutes);

export default app;

