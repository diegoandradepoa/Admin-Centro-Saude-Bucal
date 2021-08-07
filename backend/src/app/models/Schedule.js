import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Schedule = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: { 
        type: String,
        required: true },
    hour: {
        type: String,
        required: true
    },
    procedure: {
        type: String,
        required: true
    },
    id_schedule: {
        type: String,
        required: false
    },
},{
    timestamps: true,
});

Schedule.plugin(mongoosePaginate);

export default mongoose.model('schedule', Schedule)
