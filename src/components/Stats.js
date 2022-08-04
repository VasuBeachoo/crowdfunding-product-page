import styled from "styled-components";
import Stat from "./Stat";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ProgressBar = styled.div`
  width: 100%;
`;

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
