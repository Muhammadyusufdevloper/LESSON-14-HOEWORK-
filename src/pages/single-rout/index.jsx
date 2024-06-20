import { useParams } from "react-router-dom";
import { useSingleProductsQuery } from "../../context/api/productApi";
import defaultImg from '../../assets/default.png'
const SingleRout = () => {

    let { id } = useParams();
    const { data } = useSingleProductsQuery({ id })
    return (
        <>

            <div className="container mx-auto mt-20">
                <div className=" shadow-lg bg-white dark:bg-gray-800 flex items-center gap-5">
                    <img className=" h-80 object-contain" src={data?.data?.urls[0] ? data?.data?.urls[0] : defaultImg} alt={data?.data?.title} />
                    <div className="px-6 py-4 ">
                        <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{data?.data?.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300 text-base">
                            {data?.data?.description}
                        </p>
                        <div className="flex items-center gap-5">
                            <p className="text-gray-700 dark:text-gray-300 text-base font-bold">
                                ${data?.data?.price}
                            </p>
                            {data?.data?.oldPrice > 0 && data?.data?.oldPrice > data?.data?.price && (
                                <p className="text-gray-700 dark:text-gray-300 text-base line-through">
                                    ${data?.data?.oldPrice}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleRout;
