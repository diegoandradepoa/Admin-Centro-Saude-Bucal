import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Financial = new mongoose.Schema({
    name: {
        type:String,
        require: false
    },
    budgets: {
        type: String,
        require: false
    },
    debit: {
        type: String,
        required: false
    },
    credit: {
        type: String,
        require: false
    },
    observation: {
        type: String,
        required: true
    },
    id_financial: {
        type: String,
        required: false
    },
},{
    timestamps: true,
});

Financial.plugin(mongoosePaginate);

export default mongoose.model('financial', Financial)
