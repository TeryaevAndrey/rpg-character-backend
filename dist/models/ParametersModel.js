import mongoose, { Schema, model } from "mongoose";
const ParameterSchema = new Schema({
    userId: { type: String, required: true },
    saveName: { type: String, required: true },
    parameters: {
        power: { type: Number },
        dexterity: { type: Number },
        intelligence: { type: Number },
        charisma: { type: Number },
        lifeForce: { type: Number },
        evasion: { type: Number },
        energy: { type: Number },
        attack: {
            value: {
                type: Number,
            },
            level: {
                type: Number,
            },
        },
        stels: {
            value: {
                type: Number,
            },
            level: {
                type: Number,
            },
        },
        shooting: {
            value: {
                type: Number,
            },
            level: {
                type: Number,
            },
        },
        learnability: {
            value: {
                type: Number,
            },
            level: {
                type: Number,
            },
        },
        survival: {
            value: {
                type: Number,
            },
            level: {
                type: Number,
            },
        },
        medicine: {
            value: {
                type: Number,
            },
            level: {
                type: Number,
            },
        },
        intimidation: {
            value: {
                type: Number,
            },
            level: {
                type: Number,
            },
        },
        insight: {
            value: {
                type: Number,
            },
            level: {
                type: Number,
            },
        },
        appearance: {
            value: {
                type: Number,
            },
            level: {
                type: Number,
            },
        },
        manipulation: {
            value: {
                type: Number,
            },
            level: {
                type: Number,
            },
        },
    },
});
const ParameterModel = model("Parameter", ParameterSchema);
export default mongoose.models.Parameter || ParameterModel;
