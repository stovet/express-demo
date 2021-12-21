import express from "express";
import routes from './routes/app-routes'
import languageRoutes from "./routes/language-routes";
import userRoutes from "./routes/user-routes"
import searchRoutes from "./routes/search-routes";
import shopRoutes from "./routes/shop-routes";

const app = express(); // initialize express

const port = 3000;

app.use(express.json());
app.use("/", routes);
app.use("/languages/", languageRoutes);
//enable "/users"
app.use("/users/", userRoutes);
app.use("/", searchRoutes); // alternative to languages and user

// enable /api/shops
app.use("/api/shops", shopRoutes);


// Directly set routes
app.get("/students", function(req, res){
    res.json("Getting all students...");
});

app.post("/students", function(req, res){
    res.json("Adding a student");
});

app.put("/students", (req, res)=> {
    res.json("Updating a student");
});

app.delete("/students", function(req, res){
    res.json("Deleting a student");
});

app.listen(port, function(){
    console.log(`Listening on ${port}`);
});