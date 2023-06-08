import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabsItem.scss';

const TabsItem = ({tabContents}) => {

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