import * as Yup from "yup";
import Post from "../models/Post";
import User from "../models/User";
import { Op } from "sequelize";

class PostController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      hitdice: Yup.string(),
      file: Yup.string(),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error) {
      const ValidationErrors = {};

      error.inner.forEach((error) => {
        ValidationErrors[error.path] = error.message;
      });
      return res.status(400).json(ValidationErrors);
    }

    const { name: postName, hitdice, file } = req.body;
    const { id, secure_id: user_id, name } = req.user;

    const { secure_id, createdAt } = await Post.create({
      user_id: id,
      name: postName,
      hitdice,
      file,
    });

    return res.json({
      secure_id,
      postName,
      hitdice,
      file,
      date: createdAt,
      user: { user_id, name },
    });
  }

  async index(req, res) {
    const posts = await Post.findAll({
      attributes: ["secure_id", "name","hitdice", "file", ["created_at", "date"]],
      order: [["created_at", "DESC"]],
      include: [
        {
          model: User,
          as: "user",
          attributes: [["secure_id", "user_id"], "name"],
        },
      ],
    });

    return res.json(posts);
  }

  async show(req, res) {
    const { post } = req.params;
    const posts = await Post.findAll({
      where: {
        name: {
          [Op.like]: `%${post}%`,
        },
      },
      attributes: ["secure_id", "name", "file", ["created_at", "date"]],
      order: [["created_at", "DESC"]],
      include: [
        {
          model: User,
          as: "user",
          attributes: [["secure_id", "user_id"], "name"],
        },
      ],
    });

    return res.json(posts);
  }
}

export default new PostController();
