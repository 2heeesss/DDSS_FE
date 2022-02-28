// 지수, 주식, 가상화폐 tickers
export default {
  crypto: [
    { id: 1, name: '비트코인', symbol: 'BINANCE:BTCUSDT', category: 'CRYPTO' },
    { id: 2, name: '이더리움', symbol: 'BINANCE:ETHUSDT', category: 'CRYPTO' },
    {
      id: 3,
      name: '바이낸스코인',
      symbol: 'BINANCE:BNBUSDT',
      category: 'CRYPTO',
    },
    { id: 4, name: '리플', symbol: 'BINANCE:XRPUSDT', category: 'CRYPTO' },
    { id: 5, name: '에이다', symbol: 'BINANCE:ADAUSDT', category: 'CRYPTO' },
    { id: 6, name: '루나', symbol: 'BINANCE:LUNAUSDT', category: 'CRYPTO' },
    { id: 7, name: '아발란체', symbol: 'BINANCE:AVAXUSDT', category: 'CRYPTO' },
    { id: 8, name: '도지코인', symbol: 'BINANCE:DOGEUSDT', category: 'CRYPTO' },
  ],
  stock: [
    { id: 1, name: '애플', symbol: 'AAPL', category: 'NASDAQ' },
    { id: 2, name: '구글', symbol: 'GOOG', category: 'NASDAQ' },
    { id: 3, name: '테슬라', symbol: 'TSLA', category: 'NASDAQ' },
    { id: 4, name: '아마존', symbol: 'AMZN', category: 'NASDAQ' },
    { id: 5, name: '페이팔', symbol: 'PYPL', category: 'NASDAQ' },
    { id: 6, name: '알리바바', symbol: 'BABA', category: 'NASDAQ' },
    { id: 7, name: '비자', symbol: 'V', category: 'NASDAQ' },
    { id: 8, name: '엔비디아', symbol: 'NVDA', category: 'NASDAQ' },
    { id: 9, name: 'JP모건', symbol: 'JPM', category: 'NASDAQ' },
    { id: 10, name: '존슨앤존슨', symbol: 'JNJ', category: 'NASDAQ' },
    { id: 11, name: '월마트', symbol: 'WMT', category: 'NASDAQ' },
    { id: 12, name: '마스터카드', symbol: 'MA', category: 'NASDAQ' },
    { id: 13, name: '뱅크 오브 아메리카', symbol: 'BAC', category: 'NASDAQ' },
    { id: 14, name: '홈디포', symbol: 'HD', category: 'NASDAQ' },
    { id: 15, name: '월트 디즈니', symbol: 'DIS', category: 'NASDAQ' },
  ],
  //   index: {
  //     FB: {
  //       name: '나스닥 100',
  //       symbol: 'FB',
  //     },
  //     ADBE: {
  //       name: '다우존스 30',
  //       symbol: 'ADBE',
  //     },
  //     ADI: {
  //       name: 'S&P 500',
  //       symbol: 'ADI',
  //     },
  //     ADP: {
  //       name: '코스피',
  //       symbol: 'ADP',
  //     },
  //     ADSK: {
  //       name: '코스닥',
  //       symbol: 'ADSK',
  //     },
  //     FIS: {
  //       name: '러셀 2000',
  //       symbol: 'FIS',
  //     },
  //     MU: {
  //       name: 'CBOE VIX',
  //       symbol: 'MU',
  //     },
  //     ABNB: {
  //       name: '캐나다 S&P',
  //       symbol: 'ABNB',
  //     },
  //     MDLZ: {
  //       name: '브라질 보베스파',
  //       symbol: 'MDLZ',
  //     },
  //     ZTS: {
  //       name: 'DAX',
  //       symbol: 'ZTS',
  //     },
  //     INFY: {
  //       name: '영국 FTSE',
  //       symbol: 'INFY',
  //     },
  //     GM: {
  //       name: '프랑스 CAC',
  //       symbol: 'GM',
  //     },
  //     MO: {
  //       name: '유로 스톡스 50',
  //       symbol: 'MO',
  //     },
  //     PTR: {
  //       name: '네덜란드 AEX',
  //       symbol: 'PTR',
  //     },
  //     CCI: {
  //       name: '스위스 SMI',
  //       symbol: 'CCI',
  //     },
  //   },
} as const;
