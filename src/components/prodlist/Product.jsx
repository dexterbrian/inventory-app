function Product({ product, onProductClick }) {
    return (
        <tr onClick={ e => onProductClick(product) }>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
        </tr>
    );
}

export default Product;