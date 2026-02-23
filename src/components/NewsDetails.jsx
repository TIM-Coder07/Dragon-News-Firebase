import React, { useEffect, useState } from "react";
import Header from "./Header";
import RighAside from "./homelayout/RighAside";
import NewsDetailsCard from "./NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const newsData = useLoaderData()
    const {id} = useParams()
    const [news, setNews] = useState({})

    useEffect(() => {
        const findNews = newsData.find(singleNews => singleNews.id == id)
        setNews(findNews)
    },[newsData, id ])
  return (
    <div>
      <header className="py-3">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
