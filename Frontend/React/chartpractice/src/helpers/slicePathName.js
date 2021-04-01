export const slicePathName = (path) => {
  return path.slice(6);
};

export const sliceAndUpperCasePathName = (path) => {
  return path.pathname.slice(6)[0].toUpperCase() + path.pathname.slice(7);
};
