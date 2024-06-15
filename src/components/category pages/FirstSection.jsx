

function FirstSection(props) {
    const {category, description} = props
    return (
        <section className="bg-white h-[400px] flex justify-center items-center">
            <div className="content lg:w-1/2 md:w-3/4 w-11/12">
                <h1 className="lg:text-5xl md:text-4xl text-2xl text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#5ce1e6] to-[#00bf63] font-bold"> {category} </h1>
                <p className="md:text-lg text-center"> {description} </p>
            </div>
        </section>
    )
}

export default FirstSection