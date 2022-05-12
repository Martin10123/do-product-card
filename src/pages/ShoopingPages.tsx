
import { ProductButtons, ProductTitle, ProductCard, ProductImage } from '../components';
import { products } from '../data/products';

const product = products[0]


const ShoopingPages = () => {

    return (
        <div>
            <h1>Shooping Pages</h1>
            <hr />

            <ProductCard
                key={product.id}
                product={product}
                initialValues={{
                    count: 4,
                    // maxCount: 10
                }}
            >
                {({ reset, increaseBy, count, isMaxReached }) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                )}
            </ProductCard>

        </div >
    )
}

export default ShoopingPages