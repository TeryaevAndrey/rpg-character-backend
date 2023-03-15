import { Router } from "express";
import ParametersModel from "../models/ParametersModel.js";
const router = Router();
router.post("/new-save", async (req, res) => {
    try {
        const { parameters, saveName, userId } = req.body;
        const parametersObj = new ParametersModel({
            parameters: { ...parameters },
            userId,
            saveName,
        });
        await parametersObj.save();
        return res.json({ message: "Успешно сохранено", parametersObj });
    }
    catch (err) {
        return res.status(500).json({ message: "Ошибка сервера" });
    }
});
router.delete("/delete-save/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await ParametersModel.deleteOne({ _id: id });
        return res.json({ message: "Сохранение удалено" });
    }
    catch (err) {
        return res.status(500).json({ message: "Ошибка сервера" });
    }
});
router.post("/get-saves", async (req, res) => {
    try {
        const { userId, } = req.body;
        const saves = await ParametersModel.find({ userId });
        return res.json({ saves });
    }
    catch (err) {
        return res.status(500).json({ message: "Ошибка сервера" });
    }
});
router.post("/get-save", async (req, res) => {
    try {
        const { saveId, } = req.body;
        const save = await ParametersModel.findOne({ saveId });
        if (!save) {
            return res
                .status(400)
                .json({ message: "Такого сохранения не существует" });
        }
        return res.json({ save });
    }
    catch (err) {
        return res.status(500).json({ message: "Ошибка сервера" });
    }
});
export default router;
