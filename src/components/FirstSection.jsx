import React from 'react'

function FirstSection(props) {
    const { title, description } = props
    return (
        <section className="bg-gray-50 h-[300px] flex justify-center items-center">
            <div className="content lg:w-1/2 md:w-3/4 w-11/12">
                <h1 className="lg:text-5xl md:text-4xl text-2xl text-center mb-4"> {title} </h1>
                <p className="md:text-lg text-center"> {description} </p>
            </div>
        </section>
    )
}

export default FirstSection