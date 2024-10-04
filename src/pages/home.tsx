import { Browser } from "@/components/browser/browser";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { QuestionPopup } from "@/components/popups/question-popup/question-popup";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { useState } from "react";

const INITIAL_POPUP_STATE = {
  question: false,
};

export const HomePage = () => {
  // const [popupState, setPopupState] = useState(INITIAL_POPUP_STATE);

  // const hidePopup = () => {
  //   setPopupState(INITIAL_POPUP_STATE);
  // };

  return (
    <PageWrapper>
      <Browser />
      {/* <QuestionPopup open={popupState.question} onChange={hidePopup} /> */}
    </PageWrapper>
  );
};
