import { useReducer, useState } from "react";
import { BrowserControl } from "./browser-control";
import { BrowserList } from "./browser-list";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  browserPopupReducer,
  isPopupOpen,
  showPopupAction,
  hidePopupAction,
  BrowserPopupType,
  BrowserPopupMode,
} from "@/reducers/browserPopupReducer";
import { QuestionPopup } from "../popups/question-popup/question-popup";

export const Browser = () => {
  const [tab, setTab] = useState("profession");
  const [popupState, dispatchPopupState] = useReducer(browserPopupReducer, {
    question: false,
    topic: false,
    tag: false,
    profession: false,
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      <BrowserControl tab={tab} setTab={setTab} />
      <BrowserList list={[]} />
      <Button
        onClick={() =>
          dispatchPopupState(
            showPopupAction(BrowserPopupType.Question, BrowserPopupMode.Create),
          )
        }
        className="flex mx-auto mt-4 w-full gap-2"
      >
        <Icon icon="gravity-ui:plus" />
      </Button>

      {/* Popups */}
      <QuestionPopup
        open={isPopupOpen(popupState, BrowserPopupType.Question)}
        onChange={() =>
          dispatchPopupState(hidePopupAction(BrowserPopupType.Question))
        }
      />
    </div>
  );
};
