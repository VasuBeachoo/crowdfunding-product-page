import styled from "styled-components";
import Stat from "./Stat";

export const Container = styled.div``;

export const StatsContainer = styled.div``;

export const ProgressBar = styled.div``;

const Stats = ({ className, stats }) => {
  const textStats = [
    {
      heavyText: `$${stats.amtBacked}`,
      lightText: `of $${stats.amtBacked} backed`,
    },
    { heavyText: stats.totalBackers, lightText: "total backers" },
    { heavyText: stats.daysLeft, lightText: "days left" },
  ];

  let key = 3000;

  return (
    <Container className={className}>
      <StatsContainer>
        {textStats &&
          textStats.map((stat) => (
            <Stat
              key={key++}
              heavyText={stat.heavyText}
              lightText={stat.lightText}
            />
          ))}
      </StatsContainer>
      <ProgressBar />
    </Container>
  );
};

export default Stats;
