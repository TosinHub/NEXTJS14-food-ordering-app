import React from 'react'

interface PropsType {
    subHeader: string,
    mainHeader: string
}

const SectionHeader = ({subHeader, mainHeader} : PropsType) => {
  return (
    <div className="text-center uppercase">
      <h3 className=" text-gray-500 font-semibold">{subHeader}</h3>
      <h2 className="text-primary font-bold text-4xl italic">{mainHeader}</h2>
    </div>
  );
}

export default SectionHeader