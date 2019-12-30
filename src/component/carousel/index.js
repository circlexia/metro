import React, { PureComponent } from 'react';
import {Carousel} from 'antd-mobile';
import './style/index.css';
export class CarouselImg extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 150,
    };
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        data: ['7fad2e4a87e36a9a2933609640705204', '7fad2e4a87e36a9a2933609640705204', '7fad2e4a87e36a9a2933609640705204'],
      });
    }, 100);
  }
  render() {
    return (
      <div>
        <Carousel
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.props.height }}
            >
              <img
                src={this.props.height ? 'https://img30.360buyimg.com/mcoss/jfs/t1/100068/24/8222/69515/5e031911ed3f03b3d/6d1a7e365669e0e6.gif' : `http://i1.douguo.net/upload/caiku/7/f/4/${val}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height: this.props.height ? '100px' : '180px' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}