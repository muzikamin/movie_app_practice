import { useEffect, useState } from "react";
import { movieDetail } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { ORIGIN_URL } from "../../constant/imgUrl";
import { spacing } from "../../GlobalStyled";

// ---------------------------------------------

const Container = styled.div`
  width: 100%;
  padding: ${spacing.side};
  display: flex;
  flex-direction: row;
  background-color: #1d1d1d;

  img {
    width: 50%;
  }
`;

const Con = styled.div`
  width: 50%;
  padding: ${spacing.side} 50px;

  p {
    font-size: 20px;
    line-height: 30px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 50px;
`;

// ---------------------------------------------

export const Detail = () => {
  const [detailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Container>
            <img src={ORIGIN_URL + detailData.poster_path} alt="" />
            <Con>
              <Title>{detailData.title}</Title>
              <p>{`런타임 : ${detailData.runtime} 분`}</p>
              <br />
              <p>{`개봉일 : ${detailData.release_date}`}</p>
              <br />
              <p>
                장르 <br />
                {`- ${detailData.genres[0].name}`}
                <br />
                {`- ${detailData.genres[1].name}`}
              </p>
              <br />
              <p>
                줄거리 <br />
                {detailData.overview}
              </p>
            </Con>
          </Container>
        </>
      )}
    </>
  );
};
