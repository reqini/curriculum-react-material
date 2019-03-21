import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.PureComponent {
  render() {
   const { slidesToShow, children } = this.props; 
    const settings = {
        arrows: false,
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 3,
              draggable: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    );
  }
}
const styles = () => ({
  itemSlider: {
    margin: 5
  }
})
SimpleSlider.defaultProps = {
  slidesToShow: 4.2
}
SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  slidesToShow: PropTypes.number
};
export default withStyles(styles)(SimpleSlider);