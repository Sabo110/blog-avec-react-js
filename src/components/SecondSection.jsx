import React from 'react'

function SecondSection(props) {
    const { themes } = props
    return (
        <section className="bg-[#F2F4F7] py-8 flex flex-col gap-8">
            {themes.map((theme, index) => (
                <div key={index} className="lg:w-3/4 md:w-11/12 w-11/12 mx-auto">
                    <h1 className="font-bold mb-4">{theme.category}</h1>
                    {theme.articles.map((article, index) => (
                        <ArticleBlock key={index} title={article.title} description={article.description} createDate={article.createDate} miniature={article.miniature} />
                    ))}
                </div>
            ))}
        </section>
    )
}

function ArticleBlock(props) {
    const { title, description, image, createDate, miniature } = props
    return (
        <div className="mb-3 bg-white md:ps-4 md:py-2 rounded shadow-md md:flow-root border-box flex flex-col">
            <img src={miniature} alt="miniature" className="md:float-right md:m-4 lg:w-[300px] lg:h-[211.85px] md:w-[210px] md:h-[170px] h-[180px] w-full order-last rounded-b-lg" />
            <div className="p-4">
                <p className="mb-3"> {createDate} </p>
                <h1 className="font-bold"> {title} </h1>
                <p> {description} </p>
            </div>
        </div>
    )
}
export default SecondSection