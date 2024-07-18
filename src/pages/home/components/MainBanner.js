import styled from "styled-components";
import { ORIGIN_URL } from "../../../constant/imgUrl";
import { spacing } from "../../../GlobalStyled";

const Container = styled.section`
  height: 80vh;
  background: url(${ORIGIN_URL}${(props) => props.$BgUrl}) no-repeat center /
    cover;
  padding: 450px ${spacing.side} 0 ${spacing.side};
  // 왼쪽 오른쪽을 변수로 만들기, 나중에 수정하기 편함
  position: relative;
  h3 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative;
    z-index: 15;
  }

  p {
    width: 600px;
    line-height: 30px;
    font-size: 20px;
    opacity: 0.7;
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    padding: 550px ${spacing.moSide} 0 ${spacing.moSide};
    h3 {
      font-size: 40px;
      margin-bottom: 15px;
    }

    p {
      max-width: 500px;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 18%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const MainBanner = ({ data }) => {
  return (
    <Container $BgUrl={data.backdrop_path}>
      <BlackBg />
      <h3>{data.title}</h3>
      <p>{data.overview.slice(0, 100) + "..."}</p>
    </Container>
  );
};
