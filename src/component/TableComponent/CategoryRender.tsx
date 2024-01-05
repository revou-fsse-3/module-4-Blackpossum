import { useMemo } from "react";

interface props {
  category: categoryData[];
}

interface categoryData {
  id: number;
  product: string;
}

const CategoryRender = ({ category }: props) => {

  const filteredCategory = useMemo(
    ()=>{
      return category.filter((categories)=> categories.product !== 'andromax')
    },[category])

  return (
    <ul>
      {filteredCategory.map((categories, index) => (
        <li key={index}>{categories.product}</li>
      ))}
    </ul>
  );
};

export default CategoryRender;
