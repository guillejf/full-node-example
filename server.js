import config from "./config.js";
import express from "express";
import cors from "cors";
import RouterNoticias from "./router/noticias.js";

const app = express();
if (config.NODE_ENV == "development") app.use(cors());
console.log(config);
app.use(express.static("public"));
app.use(express.json());

const routerNoticias = new RouterNoticias();
app.use("/noticias", routerNoticias.start());

const PORT = config.PORT || 8000;
const server = app.listen(PORT, () =>
  console.log(
    `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV} - ${config.TIPO_PERSISTENCIA})`
  )
);
server.on("error", (error) => console.log("Servidor express en error:", error));
