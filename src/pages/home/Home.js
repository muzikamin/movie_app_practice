import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import { Loading } from "../../components/Loading";

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

  return <>{isLoading ? <Loading /> : "홈"}</>;
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
