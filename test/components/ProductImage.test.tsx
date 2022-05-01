import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { products } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img='./custom-img.jpg' />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[1]}>
         {
           () => (
            <>
              <ProductImage/>
            </>
           )
        }

      </ProductCard>
    );
   
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
