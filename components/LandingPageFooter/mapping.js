import getButtons from "../UtilityComponents/Button/mapping";
import { getComponentPadding } from "@utils/helpers";

const mapping = (data) => {
  if (!data) return "";
  const buttons = data?.buttons && getButtons(data?.buttons);
  const componentPadding = getComponentPadding(data);

  return {
    ...data,
    buttons,
    componentPadding,
  };
};

export default mapping;
