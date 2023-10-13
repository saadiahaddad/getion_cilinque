const specialiteService = require ('../services/specialiteService')

module.exports ={
    async findAll(req,res){
        const specialites = await specialiteService.findAll();
        res.json (specialites)
    },

    async findById (req,res,nest){
        try {
            const specialite = await specialiteService.findById (req.params.id);
            res.json (specialite);
    
        } catch (error){
            nest (error);
        }
    },

    async create (req,res){
        
        const specialite = await  specialiteService.create (req.body);
        res.json(specialite);
      
        
    },
    async update (req,res){
        const specialite =await specialiteService.update (req.params.id,req.body);
        res.json(specialite);
    },
    async delete (req,res){
        const result = await specialiteService.delete(req.params.id);
        res.json (result )
    }
}