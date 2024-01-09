import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import CategoryRender from "@/component/TableComponent/CategoryRender";
import { Button } from "@/components/ui/button";
import axios from "axios";

const ProductDetailPage = () => {
  const token = localStorage.getItem("token");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  interface responseData {
    results: categoryData[];
  }

  const [categories, setCategories] = useState<categoryData[]>([]);

  const fetchingCategory = async () => {
    // const res = await fetch(
    //   "https://mock-api.arikmpt.com/api/category?page=1&name=mock category"
    // );
    // const data: responseData = await res.json();
    const res = await axios.get(
      `https://mock-api.arikmpt.com/api/category?page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const result = res.data.data;
    setCategories(result);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchingCategory();
    } else {
      alert("anda belum login");
      navigate("/");
    }
  }, [page]);

  if (token) {
    return (
      <div>
        <Card className="flex flex-col gap-2.5">
          <CategoryRender category={categories} />
        </Card>
        <Button onClick={() => setPage(page + 1)}> next page</Button>
        <Button onClick={() => setPage(page - 1)}> previous page</Button>

        <Button onClick={() => fetchingCategory()}> fetch ulang</Button>
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default ProductDetailPage;
