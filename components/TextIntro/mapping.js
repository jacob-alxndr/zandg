import { getComponentPadding } from "@utils/helpers";

const mapping = (data) => {
  if (!data) return "";

  return {
    ...data,
    componentPadding: getComponentPadding(data),
  };
};

export default mapping;
