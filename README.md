## DD-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### DiegoDom

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from 'dd-product-card';
```
```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
