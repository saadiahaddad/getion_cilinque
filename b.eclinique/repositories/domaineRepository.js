const domaine = require ('../models/domaine');

module.exports={
    async findAll(){
        return await domaine.find();
    },

    async findById (id){
        return await domaine.findById(id);
    },


   async create(data){ 
    const newDomaine = new domaine(data)
    return await newDomaine.save();

    },

    async update (id,data){
        return await domaine.findByIdAndUpdate (id,data, {new:true});
    },

    async delete (id){
        return await domaine.findByIdAndRemove(id);
    }

}