import PropTypes from 'prop-types'
import defaultImg from '../../assets/default.png'
import { Link } from 'react-router-dom'

const Product = ({ products, title }) => {

    return (
        <section>
            <div className="container mx-auto">
                <h1 className="mb-10 text-2xl font-bold text-gray-900 dark:text-white">{title}</h1>
                <div className="grid grid-cols-4 gap-8">
                    {products?.data?.products?.length > 0 ? (
                        products.data.products.map(el => (
                            <div key={el.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                                <Link to={`/single-rout/${el.id}`}>
                                    <img className="w-full h-80 object-contain" src={el.urls[0] ? el.urls[0] : defaultImg} alt={el.title} />
                                </Link>
                                <div className="px-6 py-4">
                                    <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">{el.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-300 text-base">
                                        {el.description}
                                    </p>
                                    <div className="flex items-center gap-5">
                                        <p className="text-gray-700 dark:text-gray-300 text-base font-bold">
                                            ${el.price}
                                        </p>
                                        {el.oldPrice > 0 && el.oldPrice > el.price && (
                                            <p className="text-gray-700 dark:text-gray-300 text-base line-through">
                                                ${el.oldPrice}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )).reverse()
                    ) : (
                        <p className="text-gray-700 dark:text-gray-300">No products available</p>
                    )}
                </div>
            </div>
        </section>
    )
}

Product.propTypes = {
    products: PropTypes.shape({
        data: PropTypes.shape({
            products: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                oldPrice: PropTypes.number,
                urls: PropTypes.arrayOf(PropTypes.string),
            }))
        })
    }).isRequired,
    title: PropTypes.string.isRequired,
}

export default Product
