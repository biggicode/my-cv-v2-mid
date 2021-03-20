import styled from "styled-components";
import urlImage from "../../asset/image/cv2.jpg";
import { Icon } from '../../component/icomoon'

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 16px;
  }

  @media (min-width: 1366px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;

export const StyledRow = styled.div`
  grid-column: 1/-1;

  @media (min-width: 1366px) {
    grid-column: span 9;
  }
`

export const StyledImageDiv = styled.div`
  background-color: #fff;
  padding-top: 100%;
  grid-column: span 4;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-bottom: 30px;

  &::after {
    content: "";
    background-image: url(${urlImage});
    background-size: cover;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    border-radius: 6px;
  }
`;
export const StyledIconWrapper = styled.div`
  display: block;
  transition: 250ms;
  background-color: #1875f0;
  border-radius: 50%;
  padding-top: 100%;
  position: relative;
  color: #fff;
  cursor: pointer;
`;
const utf8 = {
  "icon__arrow-down": "e900",
  "icon__arrow-up": "e901",
  icon__book: "e902",
  icon__codetap: "e903",
  icon__codewars: "e904",
  icon__commits: "e905",
  icon__cross: "e906",
  icon__download: "e907",
  icon__earth: "e908",
  icon__facebook: "e909",
  icon__forks: "e90a",
  icon__github: "e90b",
  icon__heart: "e90c",
  icon__info: "e90d",
  icon__instagram: "e90e",
  icon__link: "e90f",
  icon__linkedin: "e910",
  icon__menu: "e911",
  icon__rotate: "e912",
  icon__skype: "e913",
  icon__stackoverflow: "e914",
  icon__stars: "e915",
  icon__trophy: "e916",
  icon__twitter: "e917",
  icon__udemy: "e918",
  icon__user: "e919",
  icon__youtube: "e91a",
};
export const StyledContactIcon = styled.i`
  position: absolute;
  font-family: "my-cv-v2-junior";
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '${({ icon }) =>"\\" + utf8[`icon__${icon}`]}';
    font-size: 8vw;
    font-weight: normal;
    font-style: normal;

    @media (min-width: 768px) {
      font-size: 4vw;
    }
  }
`;

export const StyledBoxIcon = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  position: relative;
  margin-top: 1rem;

  &::after {
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    top: -7px;
    left: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    clip-path: polygon(-6px -6px,100% 0,0 100%);
    transform: rotate(45deg);
    background-color: #fff;
  }
`
export const StyledBoxHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`

export const StyledBoxHeaderText = styled.div`
  flex-grow: 1;
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;
  color: #808080;
  text-transform: capitalize;
`

export const StyledBoxContent = styled.div`
  border-top: 2px solid #f5f5f5;
  border-bottom: 2px solid #f5f5f5;
  padding: 20px;
`

export const StyledBoxContentText = styled.p`
  font-size: 14px;
  line-height: 30px;
  color: #707070;
  font-weight: 600;
`

export const StyledBoxFooter = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`

export const StyledCloseIcon = styled(Icon)`
  background-color: #1875f0;
  border-radius: 50%;
  padding: 10px;
`

export const IconsWrapper = styled.div`
  grid-column: span 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 16px;
`
