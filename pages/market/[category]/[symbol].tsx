import { NextPageContext } from 'next';

import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';

import styles from 'pages/market/Market.module.scss';

import { useRouter } from 'next/router';

import MarketDetail from 'components/MarketDetail';
import Header from 'components/Header';
import IconButton from 'components/IconButton';

export interface MarketDetailProps {
  symbol: string;
  category: string;
}

export default function MarketDetailPage({
  symbol,
  category,
}: MarketDetailProps): JSX.Element {
  const router = useRouter();
  return (
    <>
      <Header>
        <IconButton
          onClick={() => router.push('search/market')}
          icon={faSearch}
        />
        <IconButton
          onClick={() => console.log('관심목록에 추가')}
          icon={faStar}
        />
      </Header>
      <div className={styles.ly_market}>
        <MarketDetail symbol={symbol} category={category} />
      </div>
    </>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const { query } = context;
  if (!query || !query.symbol || !query.category) {
    return {
      props: {
        symbol: '',
        category: '',
      },
    };
  }

  return {
    props: {
      symbol: query.symbol,
      category: query.category,
    },
  };
}
