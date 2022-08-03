import styled from "styled-components";
import Stat from "./Stat";

export const Container = styled.div``;

export const StatsContainer = styled.div``;

export const ProgressBar = styled.div``;

const Stats = ({ className, stats }) => {
  return (
    <Container className={className}>
      <StatsContainer></StatsContainer>
      <ProgressBar />
    </Container>
  );
};

export default Stats;
