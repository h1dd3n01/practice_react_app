import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default ({ muscles, category , tabChange }) => {
    const index = category ? muscles.findIndex(group => group === category) + 1
        : 0;

    const selectCategory = (e, index) =>
        tabChange(index === 0 ? '' : muscles[index - 1]);



    return (
        <Paper >
            <Tabs
                value={index}
                onChange={selectCategory}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="All"/>
                {muscles.map(group =>
                    <Tab label={group}/>
                )}
            </Tabs>
        </Paper>
    )
}