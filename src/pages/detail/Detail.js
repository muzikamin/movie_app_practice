import { useEffect } from "react";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Loading";

export const Detail = () => {
  const [detailData, setDetailData] = usestate();
  const [isLoading, setIsLoading] = usestate(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(1022789);
        console.log(data);
        setDetailData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(detailData);

  return (
    <>
      {" "}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <img />
            <Con>
              <Title>{detailData.title}</Title>
              <p>{`런타임 : ${detailData.runtime}`}</p>
              <p>{`런타임 : `}</p>
              <p>{`런타임 : `}</p>
              <p>{`런타임 : `}</p>
            </Con>
          </Container>
        </>
      )}
    </>
  );
};
