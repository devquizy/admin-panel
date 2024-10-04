import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, useMemo } from "react";

interface BrowserControlProperties {
  tab: string;
  setTab: (tab: string) => void;
}

export const BrowserControl: FC<BrowserControlProperties> = ({ tab, setTab }) => {
  // TODO: Default Tab should be in the props
  const defaultTab = useMemo(() => {
    return tab;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tabs
      defaultValue={defaultTab}
      onValueChange={(v) => setTab(v)}
      className="w-full flex flex-col items-center"
    >
      <div className="flex gap-4 items-center">
        <TabsList defaultValue={tab}>
          <TabsTrigger value="profession">Профессии</TabsTrigger>
          <TabsTrigger value="topic">Разделы</TabsTrigger>
          <TabsTrigger value="tag">Теги</TabsTrigger>
          <TabsTrigger value="question">Вопросы</TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  );
};
