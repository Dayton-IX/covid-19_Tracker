import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatBlock = styled.div`
  box-sizing: border-box;
  padding: 10px;
  border-radius: 50px;
  background: #3498db;
  box-shadow: inset 32px 32px 65px #2c81ba, 
              inset -32px -32px 65px #3caffc;
  font-size: 1.5rem;
  align-items: center;
  justify-items: center;
  text-align: center;
  width: 45%;
  display: inline-block;
  margin-right: 20px;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  return (
      <StatBlock>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
      </StatBlock>
  );
}