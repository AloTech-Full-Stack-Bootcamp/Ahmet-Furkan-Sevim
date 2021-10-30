const Card = props => {
  const onChangePage = () => {
    const name = props.card.name;
    props.onClick(name);
  };

  return (
    <>
      <div className=" col-lg-4 ">
        <div
          className="card text-white bg-dark mb-3"
          style={{ width: '18rem' }}
          onClick={onChangePage}
        >
          <img src={props.card.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{props.card.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
