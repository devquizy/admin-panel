enum BrowserPopupActionType {
  Hide,
  Show,
}

export enum BrowserPopupType {
  Question = "question",
  Topic = "topic",
  Tag = "tag",
  Profession = "profession",
}

export enum BrowserPopupMode {
  Edit = "edit",
  Create = "create",
  Delete = "delete",
}

interface BrowserPopupAction {
  type: BrowserPopupActionType;
  payload: {
    type: BrowserPopupType;
    mode: BrowserPopupMode | null;
  };
}

type BrowserPopupState = Record<BrowserPopupType, boolean>;

export const browserPopupReducer = (
  state: BrowserPopupState,
  action: BrowserPopupAction,
) => {
  const togglerState = action.type === BrowserPopupActionType.Show;
  return {
    ...state,
    [action.payload.type]: togglerState,
  };
};

export const showPopupAction = (
  type: BrowserPopupType,
  mode: BrowserPopupMode,
): BrowserPopupAction => {
  return {
    type: BrowserPopupActionType.Show,
    payload: {
      type,
      mode,
    },
  };
};

export const hidePopupAction = (type: BrowserPopupType): BrowserPopupAction => {
  return {
    type: BrowserPopupActionType.Hide,
    payload: {
      type,
      mode: null,
    },
  };
};

export const isPopupOpen = (
  state: BrowserPopupState,
  popupType: BrowserPopupType,
): boolean => {
  return state[popupType];
};
