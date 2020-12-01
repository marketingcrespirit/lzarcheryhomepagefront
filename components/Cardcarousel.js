import React, { Component } from 'react';
import styles from "./cardcarousel.module.css";

class Container extends Component {
  
  renderChildrenView = (item, index) => {
    return (
      <div className={styles.contentBox} key={index}>
        <div className={styles.cardBox}>
          <div style={{ backgroundImage: `url(/assets/images/membernight/${item.src})` }} className={styles.imageStyle} />
          <div className={styles.fontBox}>
            <p className={styles.titleStyle}>{item.title}</p>
            <span>{item.slug}</span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <Carousel dataArray={this.props.dataArray} autoplay={true} delay={10} carouselPostWidth={"400px"} carouselPostHeight={150} carouselPostMargin={10}>
          {this.renderChildrenView}
        </Carousel>
      </React.Fragment>
    );
  }
}

class Carousel extends Component {
  state = {
    nowIndex: 0,
  };
  componentDidMount() {
    if (this.props.autoplay) {
      // this.autoPlay()
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  autoPlay = () => {
    this.timer = setInterval(() => {
      this.changeImagePosition(2);
    }, this.props.delay * 1000);
  };

  conputedLeft = () => {
    const { carouselPostWidth, carouselPostHeight, carouselPostMargin } = this.props;
    const { nowIndex } = this.state;
    console.log("nowIndex", nowIndex);
    let leftSpan = parseInt(`${-nowIndex * parseInt(carouselPostWidth)}`);
    return {
      left: carouselPostWidth.toString().match(/[%vw]/) != null ? `calc(${leftSpan}% - ${carouselPostMargin * 2 * nowIndex}px)` : `${leftSpan - carouselPostMargin * 2 * nowIndex}px`,
    };
  };

  changeImagePosition = (index) => {
    const { dataArray, block } = this.props;
    const { nowIndex } = this.state;
    // (1 + 1 + 3) % 3
    this.setState({
      nowIndex: (nowIndex + index + dataArray.length) % dataArray.length,
    });
  };

  render() {
    const { dataArray, carouselPostMargin, carouselPostWidth, carouselPostHeight } = this.props;
    return (
      <div className={styles.carouselWrapper}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselArea}>
            <div style={this.conputedLeft()} className={styles.carouselPosts}>
              {dataArray.map((imgaeUrl, index) => {
                return (
                  <div
                    key={imgaeUrl}
                    style={{
                      width: carouselPostWidth,
                      height: carouselPostHeight,
                      margin: `0px ${carouselPostMargin}px `,
                      ...this.props.carouselPostStyle,
                    }}
                    className={styles.carouselPostBox}
                  >
                    {this.props.children(imgaeUrl, index)}
                  </div>
                );
              })}
            </div>
          </div>

          <div onClick={() => this.changeImagePosition(-2)} className={styles.controlLeft}>
            <i className="fa fa-angle-left" />
          </div>
          <div onClick={() => this.changeImagePosition(2)} className={styles.controlRight}>
            <i className="fa fa-angle-right" />
          </div>
        </div>
      </div>
    );
  }
}

/*
  dataArray 數據陣列
  autoplay={true} 自動撥放
  delay={10} 延遲多九
  carouselPostWidth={'50vw'} 每塊寬度
  carouselPostHeight={100} 每塊高度
  carouselPostStyle={{boxShadow:`1px 10px 15px #fff`}} 樣式
  carouselPostMargin={10}/>,document.getElementById("app")

*/

export default Container;
