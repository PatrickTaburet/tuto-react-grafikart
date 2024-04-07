import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

function ProductTable({products}) {
    const rows = []
    let lastCategory = null
    
    for (let product of products) {
        if (product.category !== lastCategory){
            rows.push(<ProductCategoryRow key={product.category} name = {product.category}/>)
        }
        lastCategory = product.category
        rows.push(<ProductRow product={product} key={product.name}/>)
    }

  return (
    <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
        {rows}

        </tbody>
  
    </table>
  )
}

export default ProductTable
