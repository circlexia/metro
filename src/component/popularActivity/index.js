import React, { PureComponent } from 'react';
import './style/index.css';
import hotLeft from '../../assets/img/hot-left.png';
import hotRightTop from '../../assets/img/hot-right-top.png';
import hotRightBottom from '../../assets/img/hot-right-bottom.png';
export class PopularActivity extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="activity-container">
        <h3 className="activity-title"><span className="activity-title-left">热门活动</span><span className="activity-title-right">查看更多</span></h3>
        <div className="activity-content">
          <div className="activity-content-left">
            <img src={hotLeft} />
          </div>
          <div className="activity-content-right">
            <ul>
              <li>
                <img src={hotRightTop} />
              </li>
              <li>
                <img src={hotRightBottom} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}