import ArticleBlock from "../ArticleBlock"

function SecondSection(props) {
    const { articles, detailPath } = props
    return (
        <section className="bg-[#F2F4F7] py-8 ">
            <div className="lg:w-3/4 md:w-11/12 w-11/12 mx-auto flex flex-col gap-10">
                {articles.map((article, index) => (

                    <ArticleBlock key={index} article={article} detailPath={detailPath} recommendedArticles={articles}/>

                ))}
            </div>

        </section>
    )
}

export default SecondSection