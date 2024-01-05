import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import CategoryRender from "@/component/TableComponent/CategoryRender";
import { Button } from "@/components/ui/button";


const ProtectedLayout = () => {
  const token = localStorage.getItem("token");

  interface categoryData {
    id: number,
    product: string,
  }

  interface responseData {
    results:categoryData[],
  }

  const [categories,setCategories] = useState<categoryData[]>([]);

  const fetchingCategory =async () => {
    const res = await fetch ('https://mock-api.arikmpt.com/api/category?page=1&name=mock category')
    const data:responseData = await res.json();
    const result = data.results
    setCategories(result)
  }


  useEffect(
    ()=> {
      fetchingCategory()
    }
  ),[];

  if(token) {
    return (
      <div>
        <Card className="flex flex-col gap-2.5">  
          <CategoryRender category={categories}/>
        </Card>
        <Button onClick={()=> fetchingCategory()} > fetch ulang</Button>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedLayout;
