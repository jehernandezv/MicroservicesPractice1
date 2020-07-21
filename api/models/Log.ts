import mongoose, {Schema, model} from 'mongoose';

const LogSchema = new Schema({
    method:{
        type: String
    },
    url:{
        type: String
    },
    httpVersion:{
        type: String
    },
    statusCode:{
        type: String
    },
    statusMessage:{
        type: String
    },
    nameHost:{
        type: String
    },
    systemHost:{
        type: String
    },
    dateHost:{
        type: String
    },
    outputServerHost:{
        type: String
    },
    hostOS:{
        type: String
    },
    hostType:{
        type: String
    },
    hostArch:{
        type: String
    }
},{timestamps:true});


export default mongoose.model('logs', LogSchema);
