import styled from "styled-components";
import Stat from "./Stat";

export const Container = styled.div``;

export const StatsContainer = styled.div``;

export const ProgressBar = styled.div``;

const Stats = ({ className, stats }) => {
  let key = 3000;

  return (
    <Container className={className}>
      <StatsContainer>
        {stats && stats.map((stat) => <Stat key={key++} />)}
      </StatsContainer>
      <ProgressBar />
    </Container>
  );
};

export default Stats;
