import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1),
  answer: z.string().min(1),
  references: z.array(z.string()).min(1),
  tagIds: z.array(z.string()),
  topicId: z.string().min(1),
});

export type QuestionFormFields = z.infer<typeof formSchema>;
