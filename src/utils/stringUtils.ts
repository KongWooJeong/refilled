/**
 * 주어진 숫자를 한국 숫자 서식에 알맞은 문자열로 바꾸어 반환합니다.
 * @param value 변환할 숫자
 */
export const formatNumber = (value: number): string =>
  new Intl.NumberFormat("ko-KR").format(value);
