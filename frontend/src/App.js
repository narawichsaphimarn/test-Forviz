import React, { useState, useEffect } from "react";
import "./App.css";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabPanel, a11yProps } from "./action/tab_panel";
import ShowImages from "./component/example1/index";
import Example3 from "./component/example3/index";
import { FetchDataImages } from "./action/fetch/example1/fetchDataImage";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const App = props => {
  const [value, setValue] = useState(0);
  const [dataImages, setDataImages] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    FetchDataImages(res => {
      setDataImages(res.result);
    });
  }, []);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <div className={"root"}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Example 1" {...a11yProps(0)} />
          <Tab label="Example 3" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ShowImages dataImages={dataImages} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Example3 />
      </TabPanel>
    </div>
  );
};

export default App;
