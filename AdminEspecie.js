//npm install --save-dev prisma (instala prisma) y npx prisma init(inicializa prisma)
import { PrismaClient } from '@prisma/client'

class AdminEspecie{

    constructor(){
        this.prisma=new PrismaClient()
        //npx prisma migrate dev, migra las bases de datos
    }
    async crearEspecie(req,res){
        const datos=req.body;
        const especie=await this.prisma.especie.create(
            {
                data:datos
            }
        )

    }

    listarEspecie(req,res){

    }
}

module.exports=AdminEspecie;