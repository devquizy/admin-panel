import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { useState, type FC } from "react";
import { QuestionPopupReference } from "./question-popup-reference";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { QuestionGenericForm } from "@/components/form/question/question-generic-form";

interface QuestionPopupProperties {
  open?: boolean;
  onChange?: (open: boolean) => void;
}

export const QuestionPopup: FC<QuestionPopupProperties> = ({
  open,
  onChange,
}) => {
  // TODO: Need refactor this shitty impl
  const [references, setReferences] = useState<{ name: string; url: string }[]>(
    [],
  );

  const addReference = () => {
    setReferences((previous) => [...previous, { name: "", url: "" }]);
  };

  // TODO: Нужно будет перенести это в пропсы
  const topics = [
    { id: "1", name: "JavaScript" },
    { id: "2", name: "Typescript" },
    { id: "3", name: "React" },
    { id: "4", name: "Vue" },
  ];

  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent className="p-0">
        <ScrollArea className="py-8 px-5 md:max-h-[80vh] overflow-y-auto">
          <DialogHeader className="px-1">
            <DialogTitle>Добавление вопроса</DialogTitle>
            <DialogDescription>
              Обратите внимание на то, что некоторые поля являются обязательными
            </DialogDescription>
          </DialogHeader>
          <div className="flex px-1 flex-col gap-4 my-4">
            <QuestionGenericForm />
          </div>
          {/* <div className="flex px-1 flex-col gap-4 my-4">
            <Card className="flex gap-2 p-4">
              <Checkbox id="continue" />
              <Label htmlFor="continue">
                <p className="font-medium">Продолжить создавать вопросы?</p>
                <p className="font-normal leading-5 mt-1 text-sm text-muted-foreground">
                  Вы можете продолжать создавать вопросы до тех пор, покуда не
                  отключите данный флажок
                </p>
              </Label>
            </Card>
          </div> */}

          <DialogFooter className="flex w-full gap-2">
            <Button className="w-[25%]" variant="secondary">
              Отмена
            </Button>
            <Button className="w-[25%]">Сохранить</Button>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
