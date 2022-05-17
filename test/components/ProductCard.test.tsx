import React from 'react'
import renderer from "react-test-renderer"
import { ProductCard } from '../../src/components';
import { product2 } from '../data/products';

const { act } = renderer;

describe('Pruebas en el componente ProductCard', () => {
    it('Debe de mostrar el componente correctamente', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {() => (
                    <h1>Product Card</h1>
                )}
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })

    it('Debe de incrementar', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {({ count, increaseBy }) => (
                    <>
                        <h1>Product Card</h1>
                        <p>{count}</p>
                        <button onClick={() => increaseBy(1)}>+1</button>
                    </>
                )}
            </ProductCard>
        );

        let tree = wrapper.toJSON();

        expect(tree).toMatchSnapshot();

        act(() => {
            (tree as any).children[2].props.onClick();
        })

        tree = wrapper.toJSON();

        expect((tree as any).children[1].children[0]).toBe("1")

    })
})