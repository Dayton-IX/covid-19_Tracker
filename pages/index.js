import { createGlobalStyle } from 'styled-components';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import Layout from '../components/Layout/Layout';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #071e3d;
    color: white;
  }
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <h2>Global Statistics:</h2>
        <Stats url="https://covid19.mathdro.id/api"></Stats>
        <CountrySelector></CountrySelector>
      </Layout>
    </div>
  );
}