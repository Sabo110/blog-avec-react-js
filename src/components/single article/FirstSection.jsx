import React from 'react'

function FirstSection(props) {
  const {article} = props
  return (
    <section className="bg-white md:h-[400px] h-[300px] flex justify-center items-center">
      <div className="content lg:w-1/2 md:w-3/4 w-11/12">
        <h1 className="lg:text-5xl md:text-2xl text-2xl text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] to-[#00bf63] font-bold"> {article.title} </h1>
        <p className="md:text-lg text-center"> <span className="font-light">{article.createDate}</span> . <span className="capitalize font-bold">{article.category}</span> </p>
      </div>
    </section>
  )
}

export default FirstSection