import "./Styles.css";

const Loading = () => {
  return (
    <article className="modal">
      <div className="content-loader">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h4>Enviando</h4>
      </div>
    </article>
  );
};

export default Loading;
