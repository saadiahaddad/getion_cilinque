const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const specialiteSchema = new Schema ({

    code:     {type: Number, required:true},
    libelle : {type: String , required :true}
});


module.exports=mongoose.model ('specialite',specialiteSchema)
