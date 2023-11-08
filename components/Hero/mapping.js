import getButtons from "@components/UtilityComponents/Button/mapping";
import { getComponentPadding } from "@utils/helpers";

const mapping = (data) => {
  if (!data) return "";
  const buttons = data?.buttons && getButtons(data?.buttons);

  return {
    ...data,
    buttons,
    componentPadding: getComponentPadding(data),
  };
};

export default mapping;
