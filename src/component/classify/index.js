import React, { PureComponent } from 'react';
import {Flex} from 'antd-mobile';
import './style/index.css';
import first from '../../assets/img/1.png';
import second from '../../assets/img/2.png';
import third from '../../assets/img/3.png';
import fourth from '../../assets/img/4.png';
import five from '../../assets/img/5.png';
import six from '../../assets/img/6.png';
import seven from '../../assets/img/7.png';
import eight from '../../assets/img/8.png';
import nine from '../../assets/img/9.png';
import ten from '../../assets/img/10.png';
export class Classify extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div className="classify-container">
        <Flex>
          <Flex.Item>
            <div>
              <img src={first} />
              <p>站点</p>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div>
              <img src={second} />
              <p>乘客服务</p>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div>
              <img src={third} />
              <p>天天惠</p>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div>
              <img src={fourth} />
              <p>惠理财</p>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div>
              <img src={five} />
              <p>便民缴费</p>
            </div>
          </Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item>
            <div>
              <img src={six} />
              <p>资讯</p>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div>
              <img src={seven} />
              <p>线网图</p>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div>
              <img src={eight} />
              <p>指南</p>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div>
              <img src={nine} />
              <p>惠借钱</p>
            </div>
          </Flex.Item>
          <Flex.Item>
            <div>
              <img src={ten} />
              <p>全部</p>
            </div>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}