type CardProps = {
    image: string
    brand: string
    title: string
    newPrice: string
    usedPrice: string
}

export const Card = ({ image, brand, title, newPrice, usedPrice }: CardProps) => {
  return (
    <div className="w-[343px] h-auto flex items-center p-4 border-2 border-gray-200 rounded-lg shadow-lg">
        <img  src={image} alt="Iphone 11" className="w-[120px] h-[120px] mr-4"  />

        <div className="flex flex-col justify-between text-left w-full h-full">
            <h2 className="text-[12px] font-semibold text-[#696969]">{brand}</h2>
            <h3 className="text-[14px] font-bold text-[#333] leading-tight mb-2">{title}</h3>
            <div className="">
                <p className="text-[20px] font-bold text-[#BF0000] leading-tight">{newPrice} <span className="text-[12px]">Neuf</span></p>
                <p className="text-[14px] font-semibold text-[#696969] leading-tight">Occasion dès <span className="text-[20px] font-bold text-[#333]">{usedPrice}</span></p>
            </div>
            </div>
    </div>
  );
}