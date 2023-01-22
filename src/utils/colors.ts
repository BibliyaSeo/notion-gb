export const dayColors = (day: string) => {
  return day === 'Day 1'
    ? 'bg-pink-100'
    : day === 'Day 2'
    ? 'bg-purple-100'
    : day === 'Day 3'
    ? 'bg-blue-100'
    : day === 'Day 4'
    ? 'bg-orange-100'
    : day === 'Day 5'
    ? 'bg-green-100'
    : day === 'Day 6'
    ? 'bg-red-100'
    : 'bg-gray-200';
};

export const typeColors = (type: string) => {
  return type === '교통'
    ? 'bg-sky-100'
    : type === '비행기'
    ? 'bg-sky-200'
    : type === '숙소'
    ? 'bg-lime-100'
    : type === '식당'
    ? 'bg-amber-200'
    : type === '관광'
    ? 'bg-purple-100'
    : type === '쇼핑'
    ? 'bg-rose-200'
    : 'bg-slate-200';
};

export const regionColors = (region: string) => {
  return region === '오사카'
    ? 'bg-red-200'
    : region === '고베'
    ? 'bg-sky-200'
    : region === '교토'
    ? 'bg-yellow-200'
    : region === '유니버셜 스튜디오'
    ? 'bg-green-200'
    : 'bg-white';
};

export const menuColors = (region: string) => {
  return region === '라멘'
    ? 'bg-yellow-200'
    : region === '스시'
    ? 'bg-pink-200'
    : 'bg-gray-200';
};
