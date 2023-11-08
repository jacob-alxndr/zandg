const mapping = (data) => {
  if (!data) return '';
  // console.log('[Description List] data: ', data);

  return {
    ...data,
    variant: data?._modelApiKey,
  };
};

export default mapping;
