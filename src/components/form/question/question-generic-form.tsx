import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Question, Tag, Topic } from "@devquizy/common-types";
import { FC, useEffect } from "react";
import { formSchema, QuestionFormFields } from "./question-generic-form.schema";
import { Label } from "@/components/ui/label";
import { Field } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

interface QuestionGenericFormProperties {
  initial?: Question;
  topics: Topic[];
  tags: Tag[];
}

const INITIAL_STATE: QuestionFormFields = {
  title: "",
  answer: "",
  references: [],
  tagIds: [],
  topicId: "",
};

export const QuestionGenericForm: FC<QuestionGenericFormProperties> = ({
  initial,
}) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: INITIAL_STATE,
  });

  const topics: Topic[] = [
    { id: "1", name: "JavaScript" },
    { id: "2", name: "Typescript" },
    { id: "3", name: "React" },
    { id: "4", name: "Vue" },
  ];

  return (
    <form className="flex flex-col gap-4">
      <Field>
        <Label htmlFor="name">Название</Label>
        <Input id="name" placeholder="Знаете ли вы что такое...?" />
      </Field>
      <Field>
        <Label htmlFor="topic">Тема</Label>
        <Select>
          <SelectTrigger>
            <SelectValue id="topic" placeholder="Выберите тему" />
          </SelectTrigger>
          <SelectContent>
            {topics.map((topic) => (
              <SelectItem key={topic.id} value={topic.id}>
                {topic.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field>
        <Label className="flex gap-2 items-center" htmlFor="answer">
          Ответ
          <p className="font-normal text-xs text-muted-foreground">
            (Может быть в формате Markdown)
          </p>
        </Label>
        <Textarea
          rows={4}
          id="answer"
          placeholder="Ответ на ваш вопрос достаточно простой..."
        />
      </Field>
      {/* {references.length > 0 && <p>Референсы</p>}
      {references.map((_, index) => (
        <>
          {index > 0 && <Separator />}
          <QuestionPopupReference />
        </>
      ))}
      <Button onClick={addReference} variant="outline">
        Добавить референс
      </Button> */}
    </form>
  );
};
