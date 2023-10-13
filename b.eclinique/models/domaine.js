const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const DomaineSchema = new Schema ({

    code:     {type: Number, required:true},
    libelle : {type: String , required :true}
});


module.exports=mongoose.model ('domaine',DomaineSchema)