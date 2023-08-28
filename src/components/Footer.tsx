import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const styleFooter = { backgroundColor: "#000", color: "#fff" };

  return (
    <footer style={styleFooter}>
      <MainContent>
        <Info>
          <h4>Tapicería Miryta</h4>
          <div>
            <p>
              José Inocente Lugo Pte., Col del Centro, 40660 Cd Altamirano, Gro.
            </p>
            <p>Teléfono: 767-102-8887</p>
          </div>
        </Info>
        <SocialMedia>
          <div>
            <a href="https://www.facebook.com/adrian.nunez.526">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
          <div>
            <a href="https://api.whatsapp.com/send?phone=7671028887">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </SocialMedia>
        <Links>
          <div>
            <NavLink to="/acerca">Acerca de</NavLink>
          </div>
          <div>
            <NavLink to="/servicios">Servicios</NavLink>
          </div>
          <div>
            <NavLink to="/contacto">Contacto</NavLink>
          </div>
        </Links>
      </MainContent>
    </footer>
  );
};

const MainContent = styled.article`
  padding: 1.5rem;
`;

const Info = styled.div`
  padding: 0 0 1rem;
  p {
    margin: 0;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10px;
  i {
    color: #fff;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem 0 0;

  a {
    text-decoration: none;
    color: #fff;
  }
`;
