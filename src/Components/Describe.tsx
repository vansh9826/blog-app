

const Describe = ({title,description}:any) => {
  return (
    <div className="max-w-7xl m-auto mt-28 mx-5">
      <h1 className=" max-w-3xl lg:text-7xl font-b text-4xl">{title}</h1>
      <p className=" max-w-3xl text-xl mt-4 ">{description}</p>
    </div>
  )
}

export default Describe
