# ma-product-card

Este es un paquete de pruebas de despliegue en npm

#### Martin Elias

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from "ma-product-card";

```

    <ProductCard
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

```

```
