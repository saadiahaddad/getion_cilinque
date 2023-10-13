const domaineRepository = require('../repositories/domaineRepository');




module.exports={
    async findAll (){
        return await domaineRepository.findAll();
    },

    async findById (id){
        return await domaineRepository.findById(id);

    },

    async create (data){
        console.log ('dfsdfsdfs')
        return await domaineRepository.create (data);
    },

    async update (id,data){
        return await domaineRepository.update(id,data)
    },
    async delete (id){
        return await domaineRepository.delete (id);
    }
};