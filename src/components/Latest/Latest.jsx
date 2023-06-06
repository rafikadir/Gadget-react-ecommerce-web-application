import './Latest.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import TabsItem from '../TabsItem/TabsItem';

const Latest = () => {

    const tabContents = [
        {'title': 'New Arrival'},
        {'title': 'Best Selling'},
        {'title': 'New Special Offer'}
    ]

    return (
        <section className='latest-section'>
            <div className="container">
                <SectionTitle title="Latest Products" />


                <TabsItem tabContent={tabContents}/>
            </div>
        </section>
    );
};

export default Latest;