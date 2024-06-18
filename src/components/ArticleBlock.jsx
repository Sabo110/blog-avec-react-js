import { useNavigate } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"


function ArticleBlock(props) {
    const { article, detailPath, recommendedArticles } = props
    const RA = recommendedArticles.filter((element) => element.slug != article.slug  )
    const navigate = useNavigate()
    const handleNavigate = () => {
        let url = detailPath + article.slug
        navigate(url, {state: {article: article, recommendedArticles: RA, detailPath: detailPath}})
    }
    return (
        <div className="bg-white md:ps-4 md:py-2 rounded shadow-xl md:flow-root border-box flex flex-col cursor-pointer" onClick={handleNavigate}>
            <LazyLoadImage src={article.img1} alt="miniature"   className="md:float-right md:m-4 lg:w-[300px] lg:h-[211.85px] md:w-[210px] md:h-[170px] h-[180px] w-full order-last rounded-b-lg md:rounded-b-none"/>
            <div className="p-4">
                <p className="mb-3"> {article.createDate} </p>
                <h1 className="font-bold mb-3 md:text-xl"> {article.title} </h1>
                <p className=""> {article.p1} </p>
            </div>
        </div>
    )
}

export default ArticleBlock