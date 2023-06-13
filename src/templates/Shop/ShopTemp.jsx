import Sidebar from '../../components/Sidebar/Sidebar';
import './ShopTemp.scss';

const ShopTemp = () => {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-9">
                        <h1>Product will be here</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopTemp;