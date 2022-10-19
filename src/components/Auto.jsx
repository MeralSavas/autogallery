import data from "./helper/data";

const Auto = () => {
  return (
    <>
      <div className="container">
        <div className="text">
          <h1>Vintage Auto</h1>
        </div>
        <div className="box">
          {data.map((item) => {
            return (
              <div className="box1">
                <figure className="picture">
                  <img src={item.src.large} alt="" />
                </figure>
                <p>{item.photographer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Auto;
