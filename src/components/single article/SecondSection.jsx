import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

function SecondSection(props) {
    const { article } = props
    return (
        <section className="bg-white">
            <div className="lg:w-3/4 md:w-11/12 md:mx-auto pb-10">
                <div className=" md:h-[500px] h-[300px]"><LazyLoadImage src={article.img1}    alt="premiere image" className="h-full w-full" /></div>
                <div className="md:w-3/4 mx-auto w-11/12 flex flex-col gap-4 my-8">
                    <p> {article.p1} </p>
                    <p> {article.p2} </p>
                    <p> {article.p3} </p>
                </div>
                <div className="md:w-4/5 mx-auto w-11/12  md:h-[390px] h-[250px]"><LazyLoadImage src={article.img2}   alt="deuxieme image" className="h-full w-full"  /></div>
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