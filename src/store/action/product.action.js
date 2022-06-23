import { productTypes } from "../types/index";

const { SELECT_PRODUCT, FILTERED_PRODUCT } = productTypes

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productId: id
})

export const filteredProducts = (id) => ({
    type: FILTERED_PRODUCT,
    categoryId: id
})