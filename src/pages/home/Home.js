import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { spacing } from "../../GlobalStyled";
import { ORIGIN_URL, W500_URL } from "../../constant/imgUrl";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Movies } from "./components/Movies";

const MainBanner = styled.section`
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

export const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, settopData] = useState();
  const [upData, setupData] = useState();
  const [isLoading, setIsLoading] = useState(true); //초기값은 true(로딩 중)

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResult } = await nowPlaying();
        const { results: popResult } = await popular();
        const { results: topResult } = await topRated();
        const { results: upResult } = await upComing();

        console.log(popResult);

        setNowData(nowResult);
        setPopData(popResult);
        settopData(topResult);
        setupData(upResult);

        // 위의 값들이 전부 다 처리가 되고난 뒤(읽혀지고 난 뒤) 로딩이 false 가 됨
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(topData);
  console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MainBanner $BgUrl={nowData[0].backdrop_path}>
            <BlackBg />
            <h3>{nowData[0].title}</h3>
            <p>{nowData[0].overview.slice(0, 100) + "..."}</p>
          </MainBanner>

          <Movies title="현재 상영 영화" movieData={nowData} />
          <Movies title="인기 영화" movieData={popData} />
          <Movies title="평점 좋음" movieData={topData} />
          <Movies title="개봉예정" movieData={upData} />
        </>
      )}
    </>
  );
};

// *예외
// 1. 컴파일 에러 : 프로그램이 실행되기 전에 발생하는 오류
// => 컴파일이란 ? 컴퓨터의 언어로 번역해 주는 것 (100110...)

// 2. 런타임 에러 : 프로그램이 실행 중 발생하는 오류

// * try ~ catch
// => 예외가 발생할 것 같은 코드를 제어함

// ex)
// try{
// => 예외 발생 가능성이 있는 코드 작성
// }catch(error){
// 예외가 발생했을 때 처리
// }finally{
// 예외와 상관없이 무조건 실행해야하는 코드}
