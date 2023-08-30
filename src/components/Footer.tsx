import { styled } from "styled-components";

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
        </Info>
      </MainContent>
    </footer>
  );
};

const MainContent = styled.article`
  padding: 5vw;

  @media screen and (min-width: 768px) {
    display: flex;
  }
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
  margin-top: 1.5rem;
  i {
    color: #fff;

    font-size: 1.5rem;
  }
`;
