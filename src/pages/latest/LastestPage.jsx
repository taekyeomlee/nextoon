import styled from 'styled-components';

import PageTemplate from '../../components/base/PageTemplate';

function LastestPage() {
  return (
    <PageTemplate>
      <SubHeaderWrapper>
        <GenreTitle>NEW! 요즘 대세 콘텐츠</GenreTitle>
      </SubHeaderWrapper>
    </PageTemplate>
  );
}

const SubHeaderWrapper = styled.div`
  height: 68px;
  padding: 0 60px;
  font-size: 0.75vw;
`;

const GenreTitle = styled.span`
  font-size: 38px;
  font-weight: 700;
  margin-right: 15px;
`;

export default LastestPage;
