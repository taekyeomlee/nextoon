import styled from 'styled-components';

function RowHeader({ title, onOpen }) {
  return (
    <RowHeaderBlock onClick={onOpen}>
      <RowTitle>{title}</RowTitle>
    </RowHeaderBlock>
  );
}

const RowHeaderBlock = styled.div`
  margin: 0 64px 0.5em 64px;
`;

const RowTitle = styled.h2`
  margin: 0;
`;

export default RowHeader;
