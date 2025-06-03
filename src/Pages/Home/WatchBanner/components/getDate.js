export const getDate = (options) => {
  return new Intl.DateTimeFormat('en-US', { ...options, hour12: false }).format(
    new Date(),
  );
};
