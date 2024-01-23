import styled from "styled-components";
import { ListItems } from "./ListItems";

const ItemsObject = [
  {
    id: 1,
    Name: "SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest (Whisper Quiet Gaming Switch)",
    price: 49.99,
    stars: 4.7,
    photo: "public/img/effc53c323454adb844d9cf442660284.jpeg",
  },
  {
    id: 2,
    Name: "SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest (Whisper Quiet Gaming Switch)",
    price: 49.99,
    stars: 4.7,
    photo:
      "public/img/Sony-PlayStation-5-Gaming-Console_02021359-c4bb-410e-940a-12930acbfd57.4d050069b07b687682d48144eb9d9032.webp",
  },
  {
    id: 10,
    Name: "SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest (Whisper Quiet Gaming Switch)",
    price: 49.99,
    stars: 4.7,
    photo:
      "public/img/SteelSeries-Apex-3-RGB-Gaming-Keyboard-10-Zone-RGB-Illumination-IP32-Water-Resistant-Premium-Magnetic-Wrist-Rest-Whisper-Quiet-Gaming-Switch_545ebb22-d861-4cd7-b352-b58954.webp",
  },
  {
    id: 23,
    Name: "SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest (Whisper Quiet Gaming Switch)",
    price: 49.99,
    stars: 4.7,
    photo: "public/img/6558601_sd.jpg",
  },
  {
    id: 4,
    Name: "SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest (Whisper Quiet Gaming Switch)",
    price: 49.99,
    stars: 4.7,
    photo: "public/img/LD0005526008_2.jpg",
  },
  {
    id: 7,
    Name: "SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest (Whisper Quiet Gaming Switch)",
    price: 49.99,
    stars: 4.7,
    photo: "public/img/17012498369036.jpg",
  },
  {
    id: 5,
    Name: "SteelSeries Apex 3 RGB Gaming Keyboard – 10-Zone RGB Illumination – IP32 Water Resistant – Premium Magnetic Wrist Rest (Whisper Quiet Gaming Switch)",
    price: 49.99,
    stars: 4.7,
    photo:
      "public/img/SteelSeries-Apex-3-RGB-Gaming-Keyboard-10-Zone-RGB-Illumination-IP32-Water-Resistant-Premium-Magnetic-Wrist-Rest-Whisper-Quiet-Gaming-Switch_545ebb22-d861-4cd7-b352-b58954.webp",
  },
];

const DivItems = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  height: 10px;
`;
export const Items = () => {
  return (
    <DivItems>
      {ItemsObject.map((items, index) => (
        <ListItems key={index} items={items} />
      ))}
    </DivItems>
  );
};
