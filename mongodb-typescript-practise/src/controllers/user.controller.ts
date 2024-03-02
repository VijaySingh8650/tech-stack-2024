import { Request, Response } from "express";
import { Course, User } from "../model";
import { z } from "zod";
import { ObjectIdSchema, userCourseSchema, userSchema,  paramsValidateSchema} from "../common-types";




export const postUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const validateData = userSchema.safeParse(req.body);
    if (validateData) {
      const { userName, password } = req.body;
      const checkUser = await User.findOne({ userName });

      if (!checkUser) {
        await User.create({ userName, password });
        res.status(200).send({ message: "User created successfully" });
      } else {
        res.status(200).send({ message: "Already exists" });
      }

      return;
    }

    res.status(200).send({ message: validateData });
    return;
  } catch (error) {
    res.status(500).send({ error });
    return;
  }
};



export const buyCourses = async (req: Request, res: Response) => {
  try {
    let validateParams = paramsValidateSchema.safeParse(req.params);
    let validateRequestBody = userCourseSchema.safeParse(req.body);

    if (!validateParams?.success || !validateRequestBody?.success) {
      return res.status(400).send({ message: "Please send proper data" });
    }

    if (
      !ObjectIdSchema.safeParse(req?.body?.courseId)?.success ||
      !ObjectIdSchema.safeParse(req?.params?.id)?.success
    ) {
      return res.status(400).send({ message: "Please send proper data" });
    }

    let validateUser = await User.findById(req?.params?.id);

    let validateCourse = await Course.findById(req?.body?.courseId);

    if (validateUser && validateCourse) {

      await User.updateOne(
        { _id: req?.params?.id ,
          purchasedCourse: { $not: { $in: [req?.body?.courseId] } }
        },
        {
          $push: {
            purchasedCourse: req?.body?.courseId,
          },
        }
      );

      return res.status(200).send({ message: "Course bought" });
    }

    res.status(401).send({ message: "Unauthorized" });

  } catch (error) {
    return res.status(500).send({ error });
  }
};
