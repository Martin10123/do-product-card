import React from 'react'
import renderer from "react-test-renderer"
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas en el componente ProductImage', () => {
    it('Debe de mostrar el componente correctamente con la imagen', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://image.com" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })

    it('Debe de mostrar el componente con la imagen del context', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {() => (
                    <ProductImage />
                )}
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})