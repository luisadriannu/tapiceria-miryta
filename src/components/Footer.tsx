import { styled } from "styled-components";

export const Footer = () => {
  const styleFooter = { backgroundColor: "#252422", color: "#fff" };

  return (
    <footer style={styleFooter}>
      <MainContent>
        <Info>
          <h4>Tapicería Miryta</h4>
          <div>
            <p>
              José Inocente Lugo Pte., Col del Centro, 40660 Cd Altamirano, Gro.
            </p>
          </div>
          <SocialMedia>
            <div>
              <a href="https://www.facebook.com/adrian.nunez.526">
                Facebook
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                </svg>
              </a>
            </div>
            <div>
              <a href="https://api.whatsapp.com/send?phone=7671028887">
                Whatsapp
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"></path>
                </svg>
              </a>
            </div>
          </SocialMedia>
        </Info>
      </MainContent>
    </footer>
  );
};

const MainContent = styled.article`
  padding: 4rem 5vw;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const Info = styled.div`
  padding: 0 0 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  p {
    margin: 0;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 1.5rem;

  a {
    display: flex;
    gap: 2px;
    color: #fff;
  }
`;
