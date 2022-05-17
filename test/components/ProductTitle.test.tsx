import React from 'react'
import renderer from "react-test-renderer"
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('Pruebas en el componente ProductTitle', () => {
    it('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
        const wrapper = renderer.create(
            <ProductTitle title="Hola bro" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })

    it('Debe de mostrar el componente con el titulo del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {() => (
                    <ProductTitle />
                )}
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})