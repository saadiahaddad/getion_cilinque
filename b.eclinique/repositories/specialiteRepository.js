const specialite = require ('../models/specialite');

module.exports={
    async findAll(){
        return await specialite.find();
    },

    async findById (id){
        return await specialite.findById(id);
    },


   async create(data){ 
    const newspecialite = new specialite(data)
    return await newspecialite.save();

    },

    async update (id,data){
        return await specialite.findByIdAndUpdate (id,data, {new:true});
    },

    async delete (id){
        return await specialite.findByIdAndRemove(id);
    }

}