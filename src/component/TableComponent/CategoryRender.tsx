import { useMemo } from "react";

interface props {
  category: categoryData[];
}

const CategoryRender = ({ category }: props) => {
  const filteredCategory = useMemo(() => {
    return category.filter((categories) => categories.name !== "andromax");
  }, [category]);

  return (
    <ul>
      {category.map((categories, index) => (
        <li key={index}>{categories.name}</li>
      ))}
    </ul>
  );
};

export default CategoryRender;
