const domaineService = require ('../services/domaineService')

module.exports ={
    async findAll(req,res){
        const domaines = await domaineService.findAll();
        res.json (domaines)
    },

    async findById (req,res,nest){
        try {
            const domaine = await domaineService.findById (req.params.id);
            res.json (domaine);
    
        } catch (error){
            nest (error);
        }
    },

    async create (req,res){
        
        const domaine =await domaineService.create (req.body);
        res.json(domaine);
      
        
    },
    async update (req,res){
        const domaine =await domaineService.update (req.params.id,req.body);
        res.json(domaine);
    },
    async delete (req,res){
        const result = await domaineService.delete(req.params.id);
        res.json (result )
    }
}