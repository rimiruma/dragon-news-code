import { useLoaderData, useParams } from "react-router";
import Headers from "../components/Headers";
import NewsDetailsCart from "../components/HomeLayout/NewsDetailsCart";
import RightAside from "../components/HomeLayout/RightAside";
import { useEffect, useState } from "react";

const NewsDetails = () => {

    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});
    // console.log(data, id, news);

    useEffect(() =>{
        const newsDetails = data.find((singleNews) => singleNews.id == id)
        setNews(newsDetails)
    }, [data, id])

  return (
    <div>
      {/* Not grid part */}
      <header className="py-3">
        <Headers />
      </header>

      {/* Grid part */}
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
        <div className="col-span-9">
          <h2 className="mb-2 font-bold">News Details</h2>
          <NewsDetailsCart news={news}></NewsDetailsCart>
        </div>

        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
