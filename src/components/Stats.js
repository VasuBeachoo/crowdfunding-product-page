import styled from "styled-components";
import { mixinSection } from "../mixins";
import Stat from "./Stat";

export const Container = styled.div`
  ${mixinSection}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  width: 100%;
  margin: 0 0 1.5rem 0;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const Divider = styled.hr`
  height: 3rem;
  opacity: 0.5;
  margin: 0;

  @media (max-width: 1000px) {
    width: 30%;
    height: auto;
  }
`;

export const ProgressBar = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 0.75rem;
  background-color: ${(props) => props.bgColor || "hsl(0, 0%, 95%)"};
  border-radius: 1rem;
`;

const Stats = ({ className, stats }) => {
  const textStats = [
    {
      heavyText: `$${Number(stats.amtBacked).toLocaleString("en-us")}`,
      lightText: `of $${Number(stats.amtGoal).toLocaleString("en-us")} backed`,
    },
    {
      heavyText: Number(stats.totalBackers).toLocaleString("en-us"),
      lightText: "total backers",
    },
    {
      heavyText: Number(stats.daysLeft).toLocaleString("en-us"),
      lightText: "days left",
    },
  ];

  function displayStats(textStats) {
    let key = 3000;
    const renderedStats =
      textStats &&
      textStats.map((stat) => (
        <Stat
          key={key++}
          heavyText={stat.heavyText}
          lightText={stat.lightText}
        />
      ));

    let i = 0;
    let newRenderedStats = [];
    while (i < renderedStats.length) {
      newRenderedStats.push(renderedStats[i]);
      if (i !== renderedStats.length - 1) {
        newRenderedStats.push(<Divider key={key++ + 1000} />);
      }
      i++;
    }
    return newRenderedStats;
  }

  return (
    <Container className={className}>
      <StatsContainer>{displayStats(textStats)}</StatsContainer>
      <ProgressBar width="100%">
        <ProgressBar
          width={Math.min((stats.amtBacked / stats.amtGoal) * 100, 100) + "%"}
          bgColor="var(--Moderate-cyan)"
        />
      </ProgressBar>
    </Container>
  );
};

export default Stats;
