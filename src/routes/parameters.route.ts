import { Request, Response, Router } from "express";
import ParametersModel from "../models/ParametersModel";

const router = Router();

router.post("/new-save", async (req: Request, res: Response) => {
  try {
    const { parameters, saveName, userId } = req.body;

    const parametersObj = new ParametersModel({ ...parameters, userId, saveName });

    await parametersObj.save();

    return res.json({ message: "Успешно сохранено" });
  } catch (err) {
    return res.status(500).json({ message: "Ошибка сервера" });
  }
});

router.delete("/delete-save/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await ParametersModel.deleteOne({ _id: id }, (err: any) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Не удалось удалить сохранение" });
      }

      return res.json({ message: "Сохранение удалено" });
    });
  } catch (err) {
    return res.status(500).json({ message: "Ошибка сервера" });
  }
});

router.post("/get-saves", async (req: Request, res: Response) => {
  try {
    const {
      userId,
    }: {
      userId: string;
    } = req.body;

    const saves = await ParametersModel.find({ userId });

    return res.json({ saves });
  } catch (err) {
    return res.status(500).json({ message: "Ошибка сервера" });
  }
});

router.post("/get-save", async (req: Request, res: Response) => {
  try {
    const {
      saveId,
    }: {
      saveId: string;
    } = req.body;

    const save = await ParametersModel.findOne({ saveId });

    if (!save) {
      return res
        .status(400)
        .json({ message: "Такого сохранения не существует" });
    }

    return res.json({ save });
  } catch (err) {
    return res.status(500).json({ message: "Ошибка сервера" });
  }
});

export default router;