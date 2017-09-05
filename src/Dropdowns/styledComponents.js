import styled from 'styled-components';

export const DropdownItem = styled.div`
  margin: 0 auto;
  position: relative;
`;
export const Btn = styled.button`
  display: block;
  width: 220px;
  padding: 10px 5px;
  border: none;
  position: relative;
  &:after{
    transform:${props => props.active ? 'rotate(90deg)' : 'rotate(0deg)'};
    transition: 0.2s ease-out;
    display: block;
    top: 20%;
    right: 5%;
    background-image: url(../src/img/next.svg);
    background-position: center;
    background-repeat: no-repeat;
    content: '';
    width: 10px;
    height: 20px;
    position: absolute;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  padding: 10px;
  border-bottom: 1px #e8e8e8 solid;
  cursor: pointer;
`;
export const Content = styled.div`
  width: 220px;
  border: 1px #e8e8e8 solid;
  border-radius: 5px;
  background: #fff;
  position: absolute;
  top: 120%;
  z-index: 1000;
  > ul {
    margin: 0;
    padding: 0;
  }
`;
export const Input = styled.input`
  width: 100%;
  margin-top: 5px;
  line-height: 24px;
  box-sizing: border-box;
`;
