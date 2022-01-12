import React, { Component } from "react";
import Slider from "react-slick";
import storiesData from "./StoriesData";
import userImg from "../images/user6.jpg";
import { FaPlusCircle } from "react-icons/fa";
export default class Stories extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1122,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="recent_stories mt-5 ">
        <Slider {...settings}>
          <div className="stories">
            <div className="story_img_wrap create_your_story text-center">
              <img src={userImg} alt="stories" />
              <div className="see_more_icon add_story">
                <FaPlusCircle />
              </div>
              <div className="story_text">
                <h6>Create Story</h6>
              </div>
            </div>
          </div>
          {storiesData.map((story) => {
            return (
            
                <div key={story.id} className="stories">
                  <div className="story_img_wrap">
                    <img src={story.storyImg} alt="stories" />
                    <div className="story_name">
                      <h6>{story.StoryName}</h6>
                    </div>
                  </div>
                </div>
          
            );
          })}
        </Slider>
      </div>
    );
  }
}