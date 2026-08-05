import React from "react"

import { useParams } from "react-router-dom"

const productInfoLoader = async ({params}) =>{
    // const {productId} = useParams();
    // ye yaha pe kaam nhi kar payega kyonki react ke hooks sirf same components mein kaam karte hain aur filhal abhi productInfoLoader component nhi hain toh fir react router actually  jab ham productInfoLoader ko call karte hain na toh usme param ko pass kar deta hain apne aap hi 

    const response = await fetch(`https://dummyjson.com/products/${params.productId}`);
    return response.json();
}

export default productInfoLoader