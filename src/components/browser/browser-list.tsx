import { FC } from "react";
import { BrowserStub } from "./browser-stub";

interface BrowserListProperties {
  list: unknown[];
}
export const BrowserList: FC<BrowserListProperties> = ({ list }) => {
  return <div>{list.length === 0 && <BrowserStub />}</div>;
};
