
import Inventory from "./Images/Inventory.png";
import Carousel from "react-material-ui-carousel";
export const CarouselProject2 = (props) => {

  // object for images
  const items = [


    {      image: Inventory,
    },
    
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
