const express=require('express'); //SIEMPRE CON COMILLAS SIMPLES!!!!!

const AdminEspecie=require("./adminEspecie");

class AteneaVetAPI{
    constructor(){
        this.puerto=3000;
        this.app=express();
        this.adminEspecie=new AdminEspecie();

        this.app.use(this.configurarCORS);
        this.app.use(express.json());
        this.app.post("/crearEspecie",(req,res)=>{this.adminEspecie.crearEspecie(req,res);});
        this.app.get("/listarEspecie",(req,res)=>{this.adminEspecie.listarEspecie(req,res);});

    }

    configurarCORS(req,res,next){
        res.header("Access-Control-Allow-Origin","*");
        res.header("Access-Control-Allow-Methods","GET, POST");
        res.header("Access-Control-Allow-Headers","Content-Type");
        next();
    }

    iniciarServidor(){

        this.app.listen(this.puerto,()=>{
            console.log(`Servidor ejecutándose en el puerto ${this.puerto}`);
        });
    }
}

const ateneaVetAPI=new AteneaVetAPI();
ateneaVetAPI.iniciarServidor();
