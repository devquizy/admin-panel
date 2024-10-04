import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const QuestionPopupReference = () => {
  const [isAutomatic, setIsAutomatic] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <Field>
        <Label htmlFor="ref-name">Название</Label>
        <Input autoFocus id="ref-name" placeholder="Habr: Продвинутый SQL" />
      </Field>
      <Field>
        <Label htmlFor="ref-url">Ссылка</Label>
        <Input id="ref-url" placeholder="https://habr.com/ru/..." />
      </Field>
      <div className="flex gap-2">
        <Checkbox
          checked={isAutomatic}
          id="ref-automatic"
          onCheckedChange={(v) => setIsAutomatic(!!v)}
        />
        <Label htmlFor="ref-automatic">Вычислить имя самоятельно</Label>
      </div>
    </div>
  );
};
