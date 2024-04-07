/**
 * Ligne produit dans un tableau à 2 colonnes (nom/prix)
 * 
 * @param {{name: string, stocked : boolean, price: string}} product 
 *
 */

function ProductRow({product}) {
    const style = product.stocked ? undefined : {color : "red"}

  return (
    <tr>
        <td style={style}>{product.name}</td>
        <td style={style}>{product.price}</td>
    </tr>
  )
}

export default ProductRow
