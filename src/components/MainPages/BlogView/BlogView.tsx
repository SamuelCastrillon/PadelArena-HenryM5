import BlogArticle from "@/components/MainComponents/Blog/BlogArticles/BlogArticle";
import BlogSection from "@/components/MainComponents/Blog/BlogSection/BlogSection";
import SuscribeNews from "@/components/MainComponents/SuscribeNews/SuscribeNews";
import React from "react";

const BlogView: React.FC = () => {
  return (
    <div>
      <div>
        <BlogSection />
        <div className="flex w-full">
          <div className="flex w-1/2  bg-white p-8 ">
            <BlogArticle
              category="Artículo"
              date="Hace 2 semanas"
              title="Estrategias avanzadas para mejorar tu juego en pádel"
              description="Explora técnicas y consejos avanzados que te ayudarán a dominar la pista de pádel y a superar a tus rivales."
              authorName="Samuel Castrillon"
              authorAvatar="https://via.placeholder.com/150"
              link="#"
            />
          </div>
          <div className="flex w-1/2  bg-white p-8 ">
            <BlogArticle
              category="Artículo"
              date="Hace 2 semanas"
              title="Estrategias avanzadas para mejorar tu juego en pádel"
              description="Explora técnicas y consejos avanzados que te ayudarán a dominar la pista de pádel y a superar a tus rivales."
              authorName="Samuel Castrillon"
              authorAvatar="https://via.placeholder.com/150"
              link="#"
            />
          </div>
        </div>
        <div className="mb-10">
          <SuscribeNews />
        </div>
      </div>
    </div>
  );
};

export default BlogView;
