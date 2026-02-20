import express from "express";
import routerLogin from "./userRoutes.js";

const Router = (app) => {
    app.get("/", (req, res) => {
        res.status(200).send("Eae");
    });

    app.use(express.json(), routerLogin);
};

export default Router;
