export default function Media() {
  return (
    // <div className="grid grid-cols-3 gap-2 ">
    //   <img src="/img/bts.jpg" className="w-full h-32 object-cover" />
    //   <img src="/img/bts1.jpg" className="w-full h-32 object-cover" />
    //   <img src="/img/bg1.jpg" className="w-full h-32 object-cover" />
    //   <img src="/img/bg7.jpg" className="w-full h-32 object-cover" />
    //   {/* Tambahkan media lainnya */}
    // </div>

    <div className="grid grid-cols-3 gap-2">
      {[
        "/img/bts.jpg", 
        "/img/bts1.jpg", 
        "/img/bg1.jpg", 
        "/img/bg7.jpg",
        
      ].map(
        (src, i) => (
          <div
            key={i}
            className="relative w-full aspect-square overflow-hidden"
          >
            <img
              src={src}
              className="absolute inset-0 w-full h-full object-cover"
              alt={`media-${i}`}
            />
          </div>
        )
      )}
    </div>
  );
}

