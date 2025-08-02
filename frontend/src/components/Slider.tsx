interface SliderProps {
  images: string[];
}

function Slider({ images }: SliderProps) {
  if (images.length === 0) return null;

  return (
    <div className="w-full space-y-4">
      {/* All Images in Same Size Boxes */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg border border-gray-100 shadow-md hover:shadow-lg transition-all duration-200"
          >
            <img
              src={img}
              alt={`Property image ${index + 1}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;