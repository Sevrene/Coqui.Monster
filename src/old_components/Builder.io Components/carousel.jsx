import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useEffect, useRef } from "react";

import { BuilderBlocks } from "@builder.io/react";
import Slider from "react-slick";

// Styling copied from Builder's built in Carousel component:
// https://github.com/BuilderIO/builder/blob/main/packages/widgets/src/components/Carousel.tsx
const slickStyles = `@charset 'UTF-8';
  .slick-list,.slick-slider,.slick-track{position:relative;display:block}.slick-loading .slick-slide,.slick-loading .slick-track{visibility:hidden}.slick-slider{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:0}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-list,.slick-slider .slick-track{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.slick-track{top:0;left:0}.slick-track:after,.slick-track:before{display:table;content:''}.slick-track:after{clear:both}.slick-slide{display:none;float:left;height:auto;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}
  .slick-dots,.slick-next,.slick-prev{position:absolute;display:block;padding:0}.slick-dots li button:before,.slick-next:before,.slick-prev:before{font-family:slick;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.slick-loading .slick-list{background:url(ajax-loader.gif) center center no-repeat #fff}@font-face{font-display:swap;font-family:slick;font-weight:400;font-style:normal;src:url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/fonts/slick.eot);src:local("slick"),url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/fonts/slick.eot?#iefix) format('embedded-opentype'),url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/fonts/slick.woff) format('woff'),url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/fonts/slick.ttf) format('truetype'),url(https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/fonts/slick.svg#slick) format('svg')}.slick-next,.slick-prev{font-size:0;line-height:0;top:50%;width:24px;height:24px;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);cursor:pointer;border:none;outline:0;background:0 0}.slick-next:focus,.slick-next:hover,.slick-prev:focus,.slick-prev:hover{outline:0;background:0 0}.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before{opacity:1}.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before{opacity:.25}.slick-next:before,.slick-prev:before{font-size:20px;line-height:1;opacity:.75;color:#fff}.slick-prev{left:-25px}[dir=rtl] .slick-prev{right:-25px;left:auto}.slick-prev:before{content:''}.slick-next:before,[dir=rtl] .slick-prev:before{content:''}.slick-next{right:-25px}[dir=rtl] .slick-next{right:auto;left:-25px}[dir=rtl] .slick-next:before{content:'•'}.slick-dotted.slick-slider{margin-bottom:30px}.slick-dots{bottom:-25px;width:100%;margin:0;list-style:none;text-align:center}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:0;background:0 0}.slick-dots li button:focus,.slick-dots li button:hover{outline:0}.slick-dots li button:focus:before,.slick-dots li button:hover:before{opacity:1}.slick-dots li button:before{font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'•';text-align:center;opacity:.25;color:#000}.slick-dots li.slick-active button:before{opacity:.75;color:#000}
  `;

/**
 * @file Defines the Slick Slider component.
 *
 * A React functional component that renders an Carousel from the Slick library.
 * This component accepts children in its slides section.
 *
 * @see {@link https://kenwheeler.github.io/slick/}
 *
 * @param {Object} props - An object containing the props for the component.
 * @param {number} props.defaultSlideIndex - The default slide index of the component.
 * @param {Object} props.properties - The properties of the component.
 * @param {boolean} props.properties.adaptiveHeight - If true, the height of the slider will adjust to the height of the current slide.
 * @param {boolean} props.properties.autoplay - If true, the slider will automatically change slides.
 * @param {number} props.properties.autoplaySpeed - The amount of time in seconds between each auto transition.
 * @param {boolean} props.properties.arrows - If true, the slider will display arrows.
 * @param {boolean} props.properties.centerMode - If true, the slider will center the current slide.
 * @param {boolean} props.properties.dots - If true, the slider will display dots.
 * @param {boolean} props.properties.draggable - If true, the slider will be draggable with the mouse.
 * @param {string} props.properties.animation - The animation of the slider.
 * @param {Object[]} props.slides - The slides of the component.
 * @param {Object} props.builderBlock - The Builder.io BuilderBlock object that represents the component.
 * @param {Object} props.builderBlock.id - The Builder.io BuilderBlock id.
 *
 * @returns {React.Component} A Slick Slider component.
 *
 * @exports Carousel
 */
const Carousel = (props) => {
  const sliderRef = useRef(null);

  // Current Slick version has a bug where the initialSlide prop doesn't update the internal index of the slider.
  // As a workaround, we use the useEffect hook to manually set the initial slide index.
  useEffect(() => {
    const slider = sliderRef.current;
    slider.slickGoTo(
      props.defaultSlideIndex === 0
        ? props.slides.length - 1
        : props.defaultSlideIndex - 1
    );
  }, [props.defaultSlideIndex, props.slides.length]);

  return (
    <>
      <style type="text/css">{slickStyles}</style>
      <Slider
        ref={sliderRef}
        adaptiveHeight={props.properties.adaptiveHeight}
        autoplay={props.properties.autoplay}
        autoplaySpeed={
          props.properties.autoplaySpeed
            ? props.properties.autoplaySpeed * 1000
            : undefined
        }
        arrows={props.properties.arrows}
        prevArrow={<KeyboardArrowLeft />}
        nextArrow={<KeyboardArrowRight />}
        centerMode={props.properties.centerMode}
        dots={props.properties.dots}
        draggable={props.properties.draggable}
        fade={props.properties.animation === "fade" ? true : false}
        focusOnSelect={true}
        initialSlide={
          props.defaultSlideIndex === 0
            ? props.slides.length - 1
            : props.defaultSlideIndex - 1
        }
        infinite={props.properties.infinite}
      >
        {props.slides.map((slide, index) => (
          <BuilderBlocks
            key={index}
            parentElementId={props.builderBlock.id}
            dataPath={`component.options.slides.${index}.content`}
            blocks={slide.content}
          />
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
