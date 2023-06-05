import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabsItem.scss';
import ProductTwo from '../ProductTwo/ProductTwo';

const TabsItem = () => {
    return (
        <div className="theme-tabs">
            <Tabs>
                <TabList>
                    <Tab>New Arrival</Tab>
                    <Tab>Best Selling</Tab>
                    <Tab>Special Offer</Tab>
                </TabList>

                <TabPanel>
                   <ProductTwo/>
                </TabPanel>
                <TabPanel>
                    <h1>two</h1>
                </TabPanel>
                <TabPanel>
                    <h1>three</h1>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabsItem;