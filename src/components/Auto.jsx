import data from "./helper/data";

const Auto = () => {
  return (
    <>
      <div className="container">
        <h1>Vintage Auto</h1>

        <div className="box">
          {data.map((item) => {
            return (
              <div className="box1">
                <figure className="picture">
                  <img src={item.src.large} alt="img" />
                </figure>
                <p>{item.photographer}</p>
              </div>
            );
          })}
        </div>
        <p className="name">-- Product by Meral Savas --</p>
      </div>
    </>
  );
};
export default Auto;
