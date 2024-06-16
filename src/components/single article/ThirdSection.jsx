import ArticleBlock from "../ArticleBlock"

function ThirdSection(props) {
    const {detailPath, recommendedArticles } = props
  
    return (
        <section className="bg-[#F2F4F7] py-8">
            <div className="lg:w-3/4 md:w-11/12 w-11/12 mx-auto">
                <h1 className="my-4 font-bold capitalize md:text-2xl">articles recommendés</h1>
                <div className="flex flex-col gap-10">
                    {recommendedArticles.map((article, index) => (
                        <ArticleBlock key={index} article={article} detailPath={detailPath} recommendedArticles={recommendedArticles}/>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default ThirdSection