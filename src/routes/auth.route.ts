import { Request, Response, Router } from "express";
import UserModel from "../models/UserModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

router.post("/reg", async (req: Request, res: Response) => {
  try {
    const {
      userName,
      password,
    }: {
      userName: string;
      password: string;
    } = req.body;

    const candidate = await UserModel.findOne({ userName });

    if (candidate) {
      return res
        .status(500)
        .json({ message: "Пользователь с таким именем уже существует" });
    }

    if (!password) {
      return res.status(500).json({ message: "Введите пароль" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new UserModel({
      userName,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign(
      { userId: user._id },
      process.env.SECRET_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    return res.status(201).json({
      message: "Пользователь создан",
      userInfo: {
        userId: user._id,
        token,
        userName,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Ошибка сервера" });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const {
      userName,
      password,
    }: {
      userName: string;
      password: string;
    } = req.body;

    const user = await UserModel.findOne({ userName });

    if (!user) {
      return res.status(400).json({ message: "Пользователь не найден" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Неверный пароль" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.SECRET_KEY as string,
      {
        expiresIn: "1d",
      }
    );

    return res.json({
      message: "Вход выполнен успешно",
      userInfo: {
        userId: user._id,
        token,
        userName,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Ошибка сервера" });
  }
});

router.post("/new-username", async (req: Request, res: Response) => {
  try {
    const {
      userId,
      newUserName,
    }: {
      userId: string;
      newUserName: string;
    } = req.body;

    await UserModel.updateOne(
      { _id: userId },
      {
        userName: newUserName,
      }
    );

    return res.json({
      message:
        "Имя обновлено успешно! Используйте его в будущем для авторизации.",
    });
  } catch (err) {
    return res.status(500).json({ message: "Ошибка сервера" });
  }
});

router.post("/check-token", async (req: Request, res: Response) => {
  const { token }: { token: string } = req.body;

  jwt.verify(token, process.env.SECRET_KEY!, (err: any) => {
    if (err) {
      return res.status(500).json({ message: "Время жизни токена истекло", err });
    }
  });
});

export default router;
