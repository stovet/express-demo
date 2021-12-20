import express from "express"
import routes from "./app-routes";
const languageRoutes = express.Router();

languageRoutes.get("/", function(req, res){
    res.json("Languages");
});

languageRoutes.get("/random", function(req, res){
    res.json("Random Languages");
});

export default languageRoutes;