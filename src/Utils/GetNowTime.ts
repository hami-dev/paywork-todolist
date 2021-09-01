// createdAt에 들어갈 날짜, 시간 정보 생성
export function getNowTime() {
  const date = new Date();
  return date.toISOString();
}
