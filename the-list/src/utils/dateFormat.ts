const dateFormat = (value: string) => {
  const date = new Date(value);
  return date.toLocaleString();
};

export default dateFormat;
