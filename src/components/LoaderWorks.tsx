import { styled } from "styled-components";

export const LoaderWorks = () => {
  return (
    <ContentLoader>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ContentLoader>
  );
};

const ContentLoader = styled.article`
  text-align: center;
  padding: 0.75rem 0 0.75rem 0;
`;
