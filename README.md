# React Instagram Photo Gallery

A react grid instagram style gallery.

## To see it in action:

Demo:

http://gondor.welinux.cl/

```
git clone https://github.com/hanspoo/react-instagram-gallery
cd react-instagram-gallery
npm install
npm run dev
```

## Dependencies

Besides react and tailwind, it uses:

- framer-motion
- react-swipeable

## Usage

copy the component src/PhotoGallery.tsx where you have your components and use.

## Motivation

Hi! I had to create a photo gallery for a project, and it turned out quite well.

Styled with vanilla tailwind it has a style similar to Instagram, with a grid where the photos can be opened, are fully responsive, and can also be swiped with a finger.

This isn’t an npm package. The idea is that in any project using Tailwind, you can simply include the PhotoGallery.tsx component wherever you need it and call it with your list of images — just like in the example shown in App.tsx.

```jsx
import { PhotoGallery } from "./PhotoGallery";

const images = [
  "1331748889_b84a7c9789_b.jpg",
  "1479807165_2a15cac917_b.jpg",
  "3616410491_c62c086153_b.jpg",
  "3658287658_a23fafd3ea_b.jpg",
  "3830796189_a9ecc529a7_b.jpg",
  "3831640774_f48dc05093_b.jpg",
  "4147219583_fbc4492540_k.jpg",
  "5543008608_7054580a8e_k.jpg",
  "i-L59fHbf-X2.jpg",
  "leopardo.jpg",
  "orca.jpg",
  "oso.jpg",
  "puma.jpg",
  "tigre.jpg",
];

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">React Instagram Photo Gallery</h1>
      <PhotoGallery images={images} />
    </>
  );
}

export default App;
```

## DOcker

```
docker build -t react-instagram-gallery .
docker run -d -p 9876:80 react-instagram-gallery
```
