import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CenterContent from "./components/CenterContent";
import InstantSearch from "./components/InstantSearch";
import DiscoverySections from "./components/DiscoverySections";
import SignUpSection from "./components/SignUpSection";
import ScrollbaleCard from "./components/ScrollbaleCard";
import Footer from "./components/Footer";

const App = () => {
  const artWorkCards = [
    {
      id: 1,
      title: "Beach Corgi Vibes",
      author: "Carlos Puentes",
      image:
        "https://plus.unsplash.com/premium_photo-1707353401897-da9ba223f807?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      likes: 38,
      views: "4.4k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
    {
      id: 2,
      title: "Wildwood Can Packaging",
      author: "MUTI Studio",
      image:
        "https://cdn.dribbble.com/userupload/45791923/file/0baf693d5eeb52645cdb518e2a766aa8.png?format=webp&resize=1200x900&vertical=center",
      likes: 80,
      views: "13.1k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 3,
      title: "Weather & Time UI Concept",
      author: "Nixtio",
      image:
        "https://cdn.dribbble.com/userupload/45789395/file/8e4622bb6f768a28696e34a515ba9641.jpg?crop=0x0-1600x1200&format=webp&resize=400x300&vertical=center",
      likes: 208,
      views: "18.3k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
    {
      id: 4,
      title: "Fox Desktop Logo",
      author: "Type08",
      image:
        "https://cdn.dribbble.com/userupload/45785147/file/36ebd1d5debf21abdf5b06f8b4b6306d.png?format=webp&resize=400x300&vertical=center",
      likes: 97,
      views: "18.6k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 5,
      title: "Circleback UI Snapshot",
      author: "Circleback Studio",
      image:
        "https://cdn.dribbble.com/userupload/45787416/file/b71d5ecb3af4ab2f584c90b267983e5c.jpg?format=webp&resize=400x300&vertical=center",
      likes: 12,
      views: "2.1k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
    {
      id: 6,
      title: "Minimal Black Logo",
      author: "Daniel Bodea",
      image:
        "https://cdn.dribbble.com/userupload/45776317/file/ffb345b036c4f3ec27405994bf53a943.jpg?format=webp&resize=400x300&vertical=center",
      likes: 78,
      views: "12.2k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 7,
      title: "Office Mural Concept",
      author: "Folio Illustration",
      image:
        "https://cdn.dribbble.com/userupload/45789121/file/30a23652f2080622d81b56413ee44104.webp?format=webp&resize=400x300&vertical=center",
      likes: 42,
      views: "9.3k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 8,
      title: "Gurd AI Branding",
      author: "Jeroen van Eerden",
      image:
        "https://cdn.dribbble.com/userupload/45788799/file/f3a1cf21e48a0216455b815a818f6d0c.png?format=webp&resize=400x300&vertical=center",
      likes: 72,
      views: "5.2k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
    {
      id: 9,
      title: "Bright Character Art",
      author: "Lima Studio",
      image:
        "https://cdn.dribbble.com/userupload/45755768/file/40b59d5019a85f3cb5e5be65bc746594.jpg?format=webp&resize=400x300&vertical=center",
      likes: 58,
      views: "6.4k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 10,
      title: "Modern Dashboard UI",
      author: "UxFlow",
      image:
        "https://cdn.dribbble.com/userupload/45787852/file/still-ed48f9da3b4aaa21162a2df5624b82bd.png?format=webp&resize=400x300&vertical=center",
      likes: 134,
      views: "21.7k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
    {
      id: 11,
      title: "3D Glass Icons",
      author: "Pixel Mafia",
      image:
        "https://cdn.dribbble.com/userupload/45472867/file/1d95b569778dafa0ea5c2e3f195d698c.png?format=webp&resize=400x300&vertical=center",
      likes: 41,
      views: "8.8k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 12,
      title: "Gradient Shape Pack",
      author: "Gradify",
      image:
        "https://cdn.dribbble.com/userupload/45785685/file/24b4ab6f3d1d8175115e9d595adfbf66.png?format=webp&resize=400x300&vertical=center",
      likes: 63,
      views: "7.9k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
    {
      id: 13,
      title: "Cute Cat Mascot",
      author: "SoftArt",
      image:
        "https://cdn.dribbble.com/userupload/44599387/file/c6fd8011183e0d5f638d6bde8f80ca01.png?format=webp&resize=400x300&vertical=center",
      likes: 89,
      views: "10.6k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 14,
      title: "Clean Mobile App UI",
      author: "Flow UI",
      image:
        "https://cdn.dribbble.com/userupload/45788269/file/c6079fd4713bd83758ce8342ebb05587.png?format=webp&resize=400x300&vertical=center",
      likes: 54,
      views: "6.7k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
    {
      id: 15,
      title: "Brand Identity Pack",
      author: "Alpha Studios",
      image:
        "https://cdn.dribbble.com/userupload/45778653/file/8f980e96ec64b1ae1e6555cd0754f46f.png?format=webp&resize=400x300&vertical=center",
      likes: 120,
      views: "14.2k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 16,
      title: "Dark Mode UI Kit",
      author: "Nebula UI",
      image:
        "https://cdn.dribbble.com/userupload/45695436/file/cbcec99fb30907571b1ea39ed618247d.jpg?format=webp&resize=400x300&vertical=center",
      likes: 110,
      views: "16.9k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
    {
      id: 17,
      title: "Fun Sticker Pack",
      author: "StickerLab",
      image:
        "https://cdn.dribbble.com/userupload/45790401/file/d947f5e786085393e24fbab68577ca84.png?format=webp&resize=400x300&vertical=center",
      likes: 71,
      views: "9.8k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 18,
      title: "Geometric Shapes Art",
      author: "GeoArt Studio",
      image:
        "https://cdn.dribbble.com/userupload/45792876/file/d54e291d1f4ff5ea7f3620957bf58e05.jpg?format=webp&resize=400x300&vertical=center",
      likes: 46,
      views: "5.6k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
    {
      id: 19,
      title: "Food Illustration Pack",
      author: "YumArt",
      image:
        "https://cdn.dribbble.com/userupload/45759497/file/64e4a17a24ee70c00ba64a73b352a013.png?format=webp&resize=400x300&vertical=center",
      likes: 92,
      views: "12.7k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 20,
      title: "Logo Exploration V3",
      author: "LogoMaster",
      image:
        "https://cdn.dribbble.com/userupload/45782115/file/7f64e31ad1adb5cbf598ff032920c977.png?format=webp&resize=400x300&vertical=center",
      likes: 130,
      views: "17.2k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
    {
      id: 21,
      title: "3D Abstract Render",
      author: "RenderWorld",
      image:
        "https://cdn.dribbble.com/userupload/45781739/file/d7b8a034c8cbbb089e9a8f8c7eeabb89.jpg?format=webp&resize=400x300&vertical=center",
      likes: 48,
      views: "7.3k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 22,
      title: "Minimal UX Wireframes",
      author: "UX Block",
      image:
        "https://cdn.dribbble.com/userupload/45786018/file/f17e592b8e70a283fe7d326ca9f49b79.png?format=webp&resize=400x300&vertical=center",
      likes: 69,
      views: "8.0k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
    {
      id: 23,
      title: "Typography Poster Design",
      author: "TypeCraft",
      image:
        "https://cdn.dribbble.com/userupload/45615295/file/fdf7d94c57108811d7809c3658a33308.png?format=webp&resize=400x300&vertical=center",
      likes: 83,
      views: "11.5k",
      isLiked: false,
      isSaved: false,
      isPro: true,
    },
    {
      id: 24,
      title: "Bright Illustration Grid",
      author: "ColorPop",
      image:
        "https://cdn.dribbble.com/userupload/45788823/file/338096670388961145d8e86c04e6b160.png?crop=0x0-3201x2401&format=webp&resize=400x300&vertical=center",
      likes: 56,
      views: "6.9k",
      isLiked: false,
      isSaved: false,
      isPro: false,
    },
  ];

  const searchBaraData = [
    {
      btnName: "Shots",
      placeholder: "What type of design are you interested in?",
      tags: [
        "dashboard",
        "landing page",
        "e-commerce",
        "logo",
        "card",
        "icons",
      ],
      isVisible: true,
      isActive: true,
    },
    {
      btnName: "Designers",
      placeholder: "What type of designer do you need?",
      tags: [
        "app design",
        "landing page",
        "web design",
        "dashboard",
        "logo design",
      ],
      isVisible: false,
      isActive: false,
    },
    {
      btnName: "Services",
      placeholder: "What do you need designed?",
      tags: [
        "branding",
        "logo design",
        "mobile app",
        "illustration",
        "animation",
      ],
      isVisible: false,
      isActive: false,
    },
  ];

  const categories = [
    {
      title: "Illustration",
      image:
        "https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=320x240&vertical=center 320w, https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=400x300&vertical=center 400w, https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=640x480&vertical=center 640w, https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=752x564&vertical=center 752w, https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=1024x768&vertical=center 1024w, https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=1200x900&vertical=center 1200w, https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=1504x1128&vertical=center 1504w, https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=2048x1536&vertical=center 2048w, https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=317x238&vertical=center 317w, https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=634x476&vertical=center 634w, https://cdn.dribbble.com/userupload/45061726/file/still-cfc1804383dd4aa5a4b61b5341304c30.png?format=webp&resize=200x150&vertical=center 200w",
    },
    {
      title: "Typography",
      image:
        "https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=320x240&vertical=center 320w, https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=400x300&vertical=center 400w, https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=640x480&vertical=center 640w, https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=752x564&vertical=center 752w, https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=1024x768&vertical=center 1024w, https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=1200x900&vertical=center 1200w, https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=1504x1128&vertical=center 1504w, https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=2048x1536&vertical=center 2048w, https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=317x238&vertical=center 317w, https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=634x476&vertical=center 634w, https://cdn.dribbble.com/userupload/43838672/file/original-d6313eb40eac20ba2f4dd8638b3067cf.jpg?format=webp&resize=200x150&vertical=center 200w",
    },
    {
      title: "Branding",
      image:
        "https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=320x240&vertical=center 320w, https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=400x300&vertical=center 400w, https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=640x480&vertical=center 640w, https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=752x564&vertical=center 752w, https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=1024x768&vertical=center 1024w, https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=1200x900&vertical=center 1200w, https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=1504x1128&vertical=center 1504w, https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=2048x1536&vertical=center 2048w, https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=317x238&vertical=center 317w, https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=634x476&vertical=center 634w, https://cdn.dribbble.com/userupload/43200390/file/original-ade45dbb987e40dd76cad00f5cc7be23.png?crop=0x0-2400x1800&format=webp&resize=200x150&vertical=center 200w",
    },
    {
      title: "Web Design",
      image:
        "https://cdn.dribbble.com/userupload/45319531/file/still-d222504340fc2c4acb1337407feaf4e4.png?format=webp&resize=320x240&vertical=center 320w, https://cdn.dribbble.com/userupload/45319531/file/still-d222504340fc2c4acb1337407feaf4e4.png?format=webp&resize=400x300&vertical=center 400w, https://cdn.dribbble.com/userupload/45319531/file/still-d222504340fc2c4acb1337407feaf4e4.png?format=webp&resize=640x480&vertical=center 640w, https://cdn.dribbble.com/userupload/45319531/file/still-d222504340fc2c4acb1337407feaf4e4.png?format=webp&resize=752x564&vertical=center 752w, https://cdn.dribbble.com/userupload/45319531/file/still-d222504340fc2c4acb1337407feaf4e4.png?format=webp&resize=1024x768&vertical=center 1024w, https://cdn.dribbble.com/userupload/45319531/file/still-d222504340fc2c4acb1337407feaf4e4.png?format=webp&resize=1200x900&vertical=center 1200w, https://cdn.dribbble.com/userupload/45319531/file/still-d222504340fc2c4acb1337407feaf4e4.png?format=webp&resize=1504x1128&vertical=center 1504w, https://cdn.dribbble.com/userupload/45319531/file/still-d222504340fc2c4acb1337407feaf4e4.png?format=webp&resize=2048x1536&vertical=center 2048w, https://cdn.dribbble.com/userupload/45319531/file/still-d222504340fc2c4acb1337407feaf4e4.png?format=webp&resize=317x238&vertical=center 317w, https://cdn.dribbble.com/userupload/45319531/file/still-d222504340fc2c4acb1337407feaf4e4.png?format=webp&resize=634x476&vertical=center 634w, https://cdn.dribbble.com/userupload/45319531/file/still-d222504340fc2c4acb1337407feaf4e4.png?format=webp&resize=200x150&vertical=center 200w",
    },
    {
      title: "Mobile",
      image:
        "https://cdn.dribbble.com/userupload/16047520/file/original-316d435ea42f78653e25af2e6bc47743.jpg?format=webp&resize=320x240&vertical=center 320w, https://cdn.dribbble.com/userupload/16047520/file/original-316d435ea42f78653e25af2e6bc47743.jpg?format=webp&resize=400x300&vertical=center 400w, https://cdn.dribbble.com/userupload/16047520/file/original-316d435ea42f78653e25af2e6bc47743.jpg?format=webp&resize=640x480&vertical=center 640w, https://cdn.dribbble.com/userupload/16047520/file/original-316d435ea42f78653e25af2e6bc47743.jpg?format=webp&resize=752x564&vertical=center 752w, https://cdn.dribbble.com/userupload/16047520/file/original-316d435ea42f78653e25af2e6bc47743.jpg?format=webp&resize=1024x768&vertical=center 1024w, https://cdn.dribbble.com/userupload/16047520/file/original-316d435ea42f78653e25af2e6bc47743.jpg?format=webp&resize=1200x900&vertical=center 1200w, https://cdn.dribbble.com/userupload/16047520/file/original-316d435ea42f78653e25af2e6bc47743.jpg?format=webp&resize=1504x1128&vertical=center 1504w, https://cdn.dribbble.com/userupload/16047520/file/original-316d435ea42f78653e25af2e6bc47743.jpg?format=webp&resize=2048x1536&vertical=center 2048w, https://cdn.dribbble.com/userupload/16047520/file/original-316d435ea42f78653e25af2e6bc47743.jpg?format=webp&resize=317x238&vertical=center 317w, https://cdn.dribbble.com/userupload/16047520/file/original-316d435ea42f78653e25af2e6bc47743.jpg?format=webp&resize=634x476&vertical=center 634w, https://cdn.dribbble.com/userupload/16047520/file/original-316d435ea42f78653e25af2e6bc47743.jpg?format=webp&resize=200x150&vertical=center 200w",
    },
  ];

  const [cardData, setCardData] = useState(artWorkCards);
  const handleLike = (id) => {
    setCardData((prev) => {
      return prev.map((item, index) => {
        if (index == id) {
          return item.isLiked
            ? { ...item, isLiked: !item.isLiked, likes: item.likes - 1 }
            : { ...item, isLiked: !item.isLiked, likes: item.likes + 1 };
        } else {
          return item;
        }
      });
    });
  };
  const handleSave = (id) => {
    setCardData((previous) => {
      return previous.map((item, index) => {
        if (index === id) {
          return item.isSaved
            ? { ...item, isSaved: !item.isSaved }
            : { ...item, isSaved: !item.isSaved };
        } else {
          return item;
        }
      });
    });
  };

  const [searchbarData, setSearchbarData] = useState(searchBaraData);
  const handleSearchBarData = (id) => {
    setSearchbarData((previousSearchBar) => {
      return previousSearchBar.map((item, index) => {
        return index == id
          ? { ...item, isVisible: true, isActive: true }
          : { ...item, isVisible: false, isActive: false };
      });
    });
  };

  const [categoryData, setCategoryData] = useState(categories);
  return (
    <div>
      <Navbar />
      <CenterContent
        handleSearchBarData={handleSearchBarData}
        searchbarData={searchbarData}
      />
      <InstantSearch />
      <DiscoverySections
        cardData={cardData}
        handleLike={handleLike}
        handleSave={handleSave}
      />
      <SignUpSection />
      <ScrollbaleCard categoryData={categoryData} />
      <Footer />
    </div>
  );
};

export default App;
