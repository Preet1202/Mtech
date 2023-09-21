// input : [class1, class2]
export const addMultiClasses = (classes) => {
  if (Array.isArray(classes) && classes.length > 1) {
    return classes.join(" ");
  }
  return classes;
};
