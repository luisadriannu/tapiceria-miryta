import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const scrollTop = () => {
  scrollTo({
    top: 0,
  });
};

export const Services = () => {
  return (
    <section className="container">
      <ContentMain className="section">
        <h2>Servicios</h2>
        <div>
          <h4>En tapicería Miryta ofrecemos los siguientes servicios:</h4>
        </div>
        <div>
          <div>
            <h5>Tapizado de automóvil</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              placeat obcaecati voluptate unde sapiente eligendi? Inventore,
              animi iure. Odit, eos quibusdam quasi ipsa laboriosam
              exercitationem sapiente reiciendis possimus. Ullam,
              necessitatibus.
            </p>
          </div>
          <div>
            <h5>Tapizado de asientos de moto</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              placeat obcaecati voluptate unde sapiente eligendi? Inventore,
              animi iure. Odit, eos quibusdam quasi ipsa laboriosam
              exercitationem sapiente reiciendis possimus. Ullam,
              necessitatibus.
            </p>
          </div>
          <div>
            <h5>Reparación y tapizado de salas</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              placeat obcaecati voluptate unde sapiente eligendi? Inventore,
              animi iure. Odit, eos quibusdam quasi ipsa laboriosam
              exercitationem sapiente reiciendis possimus. Ullam,
              necessitatibus.
            </p>
          </div>
          <div>
            <h5>Servicio a domicilio</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              placeat obcaecati voluptate unde sapiente eligendi? Inventore,
              animi iure. Odit, eos quibusdam quasi ipsa laboriosam
              exercitationem sapiente reiciendis possimus. Ullam,
              necessitatibus.
            </p>
          </div>
        </div>
      </ContentMain>
      <Clients>
        <h4>Algunos de mis clientes</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          laudantium et incidunt eveniet ea omnis laborum consequatur commodi,
          est quos illum expedita reiciendis rerum natus dicta dolor in
          similique consequuntur!
        </p>
        <p>Name of the client</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
          fugiat dolor quo corporis consectetur odit blanditiis. Sed laudantium
          doloremque possimus consequuntur quis temporibus praesentium itaque
          illo impedit ad. Est, suscipit!
        </p>
      </Clients>
      <Contact>
        <div>
          <div>
            <div>
              <h4>Traenos tu sala para transformarla</h4>
            </div>
            <ContentButton>
              <div>
                <NavLink onClick={scrollTop} to="/contacto">
                  Contacto
                </NavLink>
              </div>
            </ContentButton>
          </div>
        </div>
      </Contact>
    </section>
  );
};

const ContentMain = styled.article`
  margin-top: 6rem;
`;

const Clients = styled.article`
  color: #fff;
  background-color: #000;
  padding: 1rem;
`;

const Contact = styled.article`
  padding: 1rem 0;
  /* height: 250px; */

  & > div {
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: start; */
    padding: 0 1.5rem;

    & > div {
      margin-top: 0px;
      margin-bottom: 0px;
      padding-top: 7vw;
      padding-bottom: 7vw;
    }
  }

  h4 {
    margin: 0;
  }

  a {
    display: inline-block;
    padding: 1rem 2rem;
    text-decoration: none;
    color: #fff;
  }
`;

const ContentButton = styled.div`
  width: min-content;
  margin-top: 1.5rem;
  background-color: #000;
`;

export { ContentMain };
