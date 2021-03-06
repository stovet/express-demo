import express from "express";
import Shop from '../models/Shop'
const shopRoutes = express.Router();

const shops: Shop[] = [
    {id: 111, name: "Pepper's Pizza", rating: 4.5},
    {id: 222, name: "Clive's Chives", rating: 3.4},
    {id: 333, name: "Bretty's Brews", rating: 4.3},
    { id: 444, name: "Sylvester's Shoes", rating: 3.8 },
    { id: 555, name: "Teddy's Tunes", rating: 4.7 }
];
let nextId: number = 666;

//Query ? minRating= 4.0
shopRoutes.get("/", function(req, res){
    let minRatingParam: string = req.query.minRating as string;
    if(minRatingParam){
         //req.query.minRatin
        let minRating: number = parseFloat(minRatingParam);

        // if shops[i].rating >= req.query.minRating
        let filteredShops: Shop[] = shops.filter(shop => shop.rating >= minRating);
        res.json(filteredShops);
    } else {
        res.json(shops);
    }
   
});

shopRoutes.post("/", function(req, res){
    let newShop: Shop = req.body;
    newShop.id = nextId;
    nextId += 111;
    shops.push(newShop);
    res.status(201);
    res.json(newShop);
});

shopRoutes.delete("/:id", function(req, res){
    let inputId: number = parseInt(req.params.id);
    // for(let i = 0; i < shops.length; i++){
    //     if(shops[i].id === inputId){
    //         shops.splice(i, 1)
    //         break;
    //     }
    // }
    
    let shopIndex = shops.findIndex(shop => shop.id === inputId);
    console.log(shopIndex);
    shops.splice(shopIndex, 1);
    res.status(204);
    res.json("");
});



shopRoutes.get("/:id", function(req, res){
   // req.params.id shops[i].id
   //search shop array
   let inputId: number = parseInt(req.params.id);
   for(let i = 0; i < shops.length; i++){
        //find shop by id property
        if(shops[i].id === inputId){
            // return the json response with the shob object
            res.json(shops[i]);
            break;
        }
   }
   res.status(404);
   res.send({"error": "Shop not found"})

});

export default shopRoutes;