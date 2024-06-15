import React from 'react'

function SecondSection(props) {
    const { article } = props
    return (
        <section className="bg-white">
            <div className="lg:w-3/4 md:w-11/12 md:mx-auto pb-10">
                <div className="bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-100 h-[500px]"><img src={article.img1} alt="premiere image" className="w-full h-full"/></div>
                <div className="md:w-3/4 mx-auto w-11/12 flex flex-col gap-4 my-8">
                    <p> {article.p1} </p>
                    <p> {article.p2} </p>
                    <p> {article.p3} </p>
                </div>
                <div className="md:w-4/5 mx-auto w-11/12 bg-gradient-to-r from-pink-100 to-blue-300 h-[390px]"><img src={article.img2} alt="deuxieme image" className="w-full h-full" /></div>
                <div className="md:w-3/4 mx-auto w-11/12 flex flex-col gap-4 my-8">
                    <p> {article.p4} </p>
                    <p> {article.p5} </p>
                </div>
                <h1 className="md:w-3/4 mx-auto w-11/12 my-8 font-bold md:text-2xl"> {article.attention} </h1>
                <div className="md:w-3/4 mx-auto w-11/12 flex flex-col gap-4">
                    <p> {article.p6} </p>
                    <p> {article.p7} </p>
                    <p> {article.p8} </p>
                    <p> {article.p9} </p>
                </div>
            </div>
        </section>
    )
}

export default SecondSection