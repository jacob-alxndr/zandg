import buttonsMapping from "@components/UtilityComponents/Button/mapping";

const getColumn = (title, description, links) => {
  return {
    title,
    description,
    links: buttonsMapping(links),
  };
};
const getAllColumns = (data) => [
  getColumn(
    data?.contactTitle,
    data?.informationDescription,
    data?.contactLinks
  ),
  getColumn(data?.pagesTitle, null, data?.pageLinks),
  getColumn(data?.subscriptionTitle, data?.subscriptionDescription),
];

const mapping = (data) => {
  if (!data) return "";

  const primaryColumns = getAllColumns(data);
  return {
    ...data,
    primaryColumns,
  };
};
export default mapping;
