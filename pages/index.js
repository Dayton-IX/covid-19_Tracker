import { createGlobalStyle } from 'styled-components';
import Stats from '../components/Stats';
// import CountrySelector from '../components/CountrySelector';
import Layout from '../components/Layout/Layout';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #ccd1d1;
    color: #212f3c;
    scrollbar-width: thin;
    text-align: center;
  }
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <h2>Global Statistics:</h2>
        <Stats url="https://covid19.mathdro.id/api"></Stats>
        <h2>United States Statistics:</h2>
        <Stats url="https://covid19.mathdro.id/api/USA"></Stats>
      </Layout>
    </div>
  );
}