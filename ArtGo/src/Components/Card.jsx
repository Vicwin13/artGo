import artPieces from "./ArtPieces";

export default function Card() {
  return (
    <>
      <div className="border-5 border-orange-700 grid">
        {artPieces.map((art, index) => {
          return (
            <div key={index}>
              <div className="border-2  border-red-500 w-fit ">
                a
                <div>
                  <img src={art.image} alt={art.title} />
                </div>
                <div>
                  <div className="border-2 p-3 border-green-700 flex items-center justify-between">
                    <p>
                      {art.title} | {art.amount}
                    </p>
                    <div className="flex gap-3">
                      <img width="15px" src={art.likeEmoji} alt="" />
                      <img width="15px" src={art.addToCartEmoji} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
