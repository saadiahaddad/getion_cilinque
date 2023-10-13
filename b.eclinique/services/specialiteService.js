const specialiteRepository = require ('../repositories/specialiteRepository');

module.exports={
    async findAll(){
        return await specialiteRepository.findAll();
    },

    async findById (id){
        return await specialiteRepository.findById(id);
    },
    async create (data){
        console.log ('dfsdfsdfs')
        return await specialiteRepository.create (data);
    },


    async update (id,data){
        return await specialiteRepository.update (id);
    },

    async delete (id){
        return await specialiteRepository.delete(id);
    }
}