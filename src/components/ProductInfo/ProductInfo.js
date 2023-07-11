import './ProductInfo.scss';

const ProductInfo = () => {

    const productsInfos = [
        {"name": "Model", "value":"Lorem Ipsum is simply dummy text"},
        {"name": "Material", "value":"Carbon Fiber"},
        {"name": "Size", "value":"3 - 5"},
        {"name": "Weight", "value":".30 KG"},
        {"name": "Color", "value":"Black"},
        {"name": "Warranty", "value":" 7 Days replacement"}
    ]

    return (
        <>
           <table className='product-info-list'>
                <tbody>
                   { 
                        productsInfos.map((item, index) => 
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.value}</td>
                            </tr>
                        )
                    }
                </tbody>
           </table>
        </>
    );
};

export default ProductInfo;