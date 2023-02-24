export const categoryId2Text = (id: string, categories: any[] = []) => {
  let result = "";
  const category = categories.find((cate) => cate._id === id);
  result = category.text;
  return result;
};
