import React from 'react';
import {Navbar,TabFooter} from '../../component/index';
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }
  render() {
    return (
      <div className="sport__container">
        <Navbar title="畅达幸福" />
        <TabFooter />
      </div>
    );
  }
}