const mapping = (data) => {
  if (!data) return "";

  return {
    ...data,
    variant: data?._modelApiKey,
  };
};

export default mapping;
