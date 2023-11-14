"use client"
interface IProps {
  
}

const page = ({}: IProps) => {
  return <div>
    <button onClick={()=>console.log('first')}>++</button>
  </div>
}

export default page