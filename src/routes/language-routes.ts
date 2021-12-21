import express from "express"
import routes from "./app-routes";
const languageRoutes = express.Router();

let languages: string[] = ["English", "Japanese", "French", "Italian", "Spanish"];



//this is to post to languages
languageRoutes.get("/", function(req, res){
    res.json(languages);
});

//To show a language by id /languages/:id
languageRoutes.get("/:id", function(req, res){
    // req.params.id -> a specific language
    let searchIndex: number = parseInt(req.params.id) - 1;
    let languageObject = languages[searchIndex];
    res.json(languageObject);
});


languageRoutes.get("/random", function(req, res){
    res.json("Random Languages");
});

export default languageRoutes;