import React from "react";
import Dijkstra1 from "./Images/Dijkstra1.png";
import Dijkstra2 from './Images/Dijkstra2.png'
import Dijkstra3 from "./Images/Dijkstra3.png"
import Dijkstra4 from "./Images/Dijkstra4.png"
import Carousel from "react-material-ui-carousel";


export const CarouselProject = (props) => {
  const items = [
    {
      image: Dijkstra1,
    },
    {
      image: Dijkstra2
    },
    {
      image: Dijkstra3
    },
    {
      image: Dijkstra4
    }
  ];
  return (
    <Carousel autoPlay = {false} swipe = {true}>
        {items.map((item, i) => (
            <Item key = {i} item = {item}></Item>
        )

        )}
    </Carousel>
  );
};

function Item(props) {
    return <img style = {{height: "225px", width: "400px"}} alt = "screen show of project" src={props.item.image} />;
  }
