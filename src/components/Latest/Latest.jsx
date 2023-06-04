import './Latest.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import TabsItem from '../TabsItem/TabsItem';

const Latest = () => {
    return (
        <section className='latest-section'>
            <div className="container">
                <SectionTitle title="Latest Products" />

                <TabsItem/>
            </div>
        </section>
    );
};

export default Latest;