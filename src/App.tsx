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
    <div className="md:mx-auto my-4 md:max-w-3xl">
      <div className="md:max-w-2xl mx-2 md:mx-0 ">
        <h1 className="text-3xl font-bold mb-2">
          React Instagram Photo Gallery
        </h1>
        <p className="text-sm md:text-lg">
          Styled with vanilla tailwind it has a style similar to Instagram, with
          a grid where the photos can be opened, are fully responsive, and can
          also be swiped with a finger.
        </p>
      </div>
      <PhotoGallery images={images} />
    </div>
  );
}

export default App;
