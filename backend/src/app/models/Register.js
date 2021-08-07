import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const Register = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address_street: {
        type: String,
        required: true
    },
    address_number: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    whatsapp: {
        type: String,
        required: true,
    },
    rg: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true
    },
    dependent: {
        type: String,
        required: true
    },
    exams: {
        type: String,
        required: true
    },
    observation: {
        type: String,
        required: true
    },
    id_schedule: {
        type: String,
        required: false
    },
    id_financial: {
        type: String,
        required: false
    },
},{
    timestamps: true,
});

Register.plugin(mongoosePaginate);

export default mongoose.model('register', Register)
