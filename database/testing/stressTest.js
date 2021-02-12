/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '15s', target: 600 },
    { duration: '30s', target: 2000 },
    { duration: '2m', target: 3000 },
    { duration: '30s', target: 2000 },
    { duration: '10s', target: 600 },
  ],
};

// eslint-disable-next-line func-names
export default function () {
  // for retrieving just review data:
  const productId = Math.ceil(Math.random() * 1000000);
  const res = http.get(`http://localhost:3003/api/rawReviews/${productId}`);

  // for testing combined review and product data (route selects a productid at random already):
  // const res = http.get('http://localhost:3003/productReviews');
  // eslint-disable-next-line eqeqeq
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
