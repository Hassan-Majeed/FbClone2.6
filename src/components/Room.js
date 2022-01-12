import React, { Component } from "react";
import Slider from "react-slick";
import { FaVideo } from "react-icons/fa";
import RoomData from './RoomData';
export default class Room extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
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

      <div className="create_room text-center">

        <Slider {...settings}>
          <div className="roomBtn">
            <button className=" primarybtn">
              <FaVideo /> Create Room
            </button>
          </div>
          {
            RoomData.map((room) => {
              return (
                <img key={room.id}
                  src={room.RoomUser}
                  className="room_imgs rounded-circle "
                  alt="user_Img"
                />
              )
            })
          }


        </Slider>
      </div>

    );
  }
}

