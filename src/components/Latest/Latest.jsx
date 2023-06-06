import './Latest.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import TabsItem from '../TabsItem/TabsItem';
import NewArrival from '../NewArrival/NewArrival';

const Latest = () => {

    const tabContents = [
        {
            'title': 'New Arrival',
            'content': <NewArrival/>
        },
        {
            'title': 'Best Selling',
            'content': <NewArrival/>
        },
        {
            'title': 'New Special Offer',
            'content': <NewArrival/>
        }
    ]

    return (
        <section className='latest-section'>
            <div className="container">
                <SectionTitle title="Latest Products" />

                <TabsItem tabContents={tabContents}/>
            </div>
        </section>
    );
};

export default Latest;