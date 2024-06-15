import ArticleBlock from '../components/ArticleBlock'

function SecondSection(props) {
    const { themes } = props
    return (
        <section className="bg-[#F2F4F7] py-8 flex flex-col gap-8">
            {themes.map((theme, index) => (
                <div key={index} className="lg:w-3/4 md:w-11/12 w-11/12 mx-auto">
                    <h1 className="font-bold mb-4">{theme.category}</h1>
                    <div className="flex flex-col gap-5">
                        {theme.articles.map((article, index) => (
                            <ArticleBlock key={index} article={article} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default SecondSection