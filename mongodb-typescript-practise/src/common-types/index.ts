import {z} from "zod";

export const ObjectIdSchema = z.string().refine((value) => {
    // Regular expression to match MongoDB ObjectId format
    const objectIdRegex = /^[0-9a-fA-F]{24}$/;
    return objectIdRegex.test(value);
  }, {
    message: "Invalid ObjectId"
});

export const userSchema = z.object({
    userName: z.string(),
    password: z.string().min(6),
  });

export const courseZSchema = z.object({
    price: z.number(),
    title: z.string(),
});

export const userCourseSchema = z.object({
    courseId: z.string(),
});
  
export const paramsValidateSchema = z.object({
    id: z.string(),
});