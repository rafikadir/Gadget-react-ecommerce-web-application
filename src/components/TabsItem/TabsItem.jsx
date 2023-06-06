/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabsItem.scss';
import ProductTwo from '../ProductTwo/ProductTwo';

const TabsItem = ({tabContents}) => {

    // const {content, title} = tabContents[0];
    // console.log(title);

    return (
        <div className="theme-tabs">
            <Tabs>
                <TabList>
                    {
                        tabContents.map((tab, index) => {
                            return (
                                <Tab key={index}>
                                    {tab.title}
                                </Tab>
                            );
                        })
                    }
                </TabList>

                {
                    tabContents.map((tab, index) => {
                        return (
                            <TabPanel key={index}>
                                {tab.content}
                            </TabPanel>
                        );
                    })
                }
            </Tabs>
        </div>
    );
};

export default TabsItem;