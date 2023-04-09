//npm install --save-dev prisma (instala prisma) y npx prisma init(inicializa prisma)
const { PrismaClient }=require('@prisma/client');
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
        );
        res.json(especie);

    }

    async listarEspecie(req,res){
        const especies= await this.prisma.especie.findMany();
        res.json(especies);
    }
}

module.exports=AdminEspecie;