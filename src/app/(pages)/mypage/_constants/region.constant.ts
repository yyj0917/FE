export type RegionType =
  | '특별시'
  | '광역시'
  | '특별자치시'
  | '특별자치도'
  | '도'
  | '시'
  | '군'
  | '구';

export interface Place {
  name: string;
  type: RegionType;
}

// 상위 행정구역 타입 정의
export type ProvinceKey =
  | '강원'
  | '경기'
  | '경남'
  | '경북'
  | '광주'
  | '대구'
  | '대전'
  | '부산'
  | '서울'
  | '세종'
  | '울산'
  | '인천'
  | '전남'
  | '전북'
  | '제주'
  | '충남'
  | '충북';

export type RegionsMap = Record<ProvinceKey, Place[]>;

// 각 도/광역시별 행정구역 상수
export const KOREA_REGIONS: RegionsMap = {
  강원: [
    { name: '춘천시', type: '시' },
    { name: '원주시', type: '시' },
    { name: '강릉시', type: '시' },
    { name: '동해시', type: '시' },
    { name: '태백시', type: '시' },
    { name: '속초시', type: '시' },
    { name: '삼척시', type: '시' },
    { name: '홍천군', type: '군' },
    { name: '횡성군', type: '군' },
    { name: '영월군', type: '군' },
    { name: '평창군', type: '군' },
    { name: '정선군', type: '군' },
    { name: '철원군', type: '군' },
    { name: '화천군', type: '군' },
    { name: '양구군', type: '군' },
    { name: '인제군', type: '군' },
    { name: '고성군', type: '군' },
    { name: '양양군', type: '군' },
  ],

  경기: [
    { name: '수원시', type: '시' },
    { name: '성남시', type: '시' },
    { name: '의정부시', type: '시' },
    { name: '안양시', type: '시' },
    { name: '부천시', type: '시' },
    { name: '광명시', type: '시' },
    { name: '평택시', type: '시' },
    { name: '동두천시', type: '시' },
    { name: '안산시', type: '시' },
    { name: '고양시', type: '시' },
    { name: '과천시', type: '시' },
    { name: '구리시', type: '시' },
    { name: '남양주시', type: '시' },
    { name: '오산시', type: '시' },
    { name: '시흥시', type: '시' },
    { name: '군포시', type: '시' },
    { name: '의왕시', type: '시' },
    { name: '하남시', type: '시' },
    { name: '용인시', type: '시' },
    { name: '파주시', type: '시' },
    { name: '이천시', type: '시' },
    { name: '안성시', type: '시' },
    { name: '김포시', type: '시' },
    { name: '화성시', type: '시' },
    { name: '광주시', type: '시' },
    { name: '양주시', type: '시' },
    { name: '포천시', type: '시' },
    { name: '여주시', type: '시' },
    { name: '연천군', type: '군' },
    { name: '가평군', type: '군' },
    { name: '양평군', type: '군' },
  ],

  경남: [
    { name: '창원시', type: '시' },
    { name: '진주시', type: '시' }, // 원본에 오타 "진주신" -> "진주시"로 수정
    { name: '통영시', type: '시' },
    { name: '사천시', type: '시' },
    { name: '김해시', type: '시' },
    { name: '밀양시', type: '시' },
    { name: '거제시', type: '시' },
    { name: '양산시', type: '시' },
    { name: '의령군', type: '군' },
    { name: '함안군', type: '군' },
    { name: '창녕군', type: '군' },
    { name: '고성군', type: '군' },
    { name: '남해군', type: '군' },
    { name: '하동군', type: '군' },
    { name: '산청군', type: '군' },
    { name: '함양군', type: '군' },
    { name: '거창군', type: '군' },
    { name: '합천군', type: '군' },
  ],

  경북: [
    { name: '포항시', type: '시' },
    { name: '경주시', type: '시' },
    { name: '김천시', type: '시' },
    { name: '안동시', type: '시' },
    { name: '구미시', type: '시' },
    { name: '영주시', type: '시' },
    { name: '영천시', type: '시' },
    { name: '상주시', type: '시' },
    { name: '문경시', type: '시' },
    { name: '경산시', type: '시' },
    { name: '의성군', type: '군' },
    { name: '청송군', type: '군' },
    { name: '영양군', type: '군' },
    { name: '영덕군', type: '군' },
    { name: '청도군', type: '군' },
    { name: '고령군', type: '군' },
    { name: '성주군', type: '군' },
    { name: '칠곡군', type: '군' },
    { name: '예천군', type: '군' },
    { name: '봉화군', type: '군' },
    { name: '울진군', type: '군' },
    { name: '울릉군', type: '군' },
  ],

  광주: [
    { name: '동구', type: '구' },
    { name: '서구', type: '구' },
    { name: '남구', type: '구' },
    { name: '북구', type: '구' },
    { name: '광산구', type: '구' },
  ],

  대구: [
    { name: '중구', type: '구' },
    { name: '동구', type: '구' },
    { name: '서구', type: '구' },
    { name: '남구', type: '구' },
    { name: '북구', type: '구' },
    { name: '수성구', type: '구' },
    { name: '달서구', type: '구' },
    { name: '달성군', type: '군' },
    { name: '군위군', type: '군' },
  ],

  대전: [
    { name: '동구', type: '구' },
    { name: '중구', type: '구' },
    { name: '서구', type: '구' },
    { name: '유성구', type: '구' },
    { name: '대덕구', type: '구' },
  ],

  부산: [
    { name: '중구', type: '구' },
    { name: '서구', type: '구' },
    { name: '동구', type: '구' },
    { name: '영도구', type: '구' },
    { name: '부산진구', type: '구' },
    { name: '동래구', type: '구' },
    { name: '남구', type: '구' },
    { name: '북구', type: '구' },
    { name: '해운대구', type: '구' },
    { name: '사하구', type: '구' },
    { name: '금정구', type: '구' },
    { name: '강서구', type: '구' },
    { name: '연제구', type: '구' },
    { name: '수영구', type: '구' },
    { name: '사상구', type: '구' },
    { name: '기장군', type: '군' },
  ],

  서울: [
    { name: '종로구', type: '구' },
    { name: '중구', type: '구' },
    { name: '용산구', type: '구' },
    { name: '성동구', type: '구' },
    { name: '광진구', type: '구' },
    { name: '동대문구', type: '구' },
    { name: '중랑구', type: '구' },
    { name: '성북구', type: '구' },
    { name: '강북구', type: '구' },
    { name: '도봉구', type: '구' },
    { name: '노원구', type: '구' },
    { name: '은평구', type: '구' },
    { name: '서대문구', type: '구' },
    { name: '마포구', type: '구' },
    { name: '양천구', type: '구' },
    { name: '강서구', type: '구' },
    { name: '구로구', type: '구' },
    { name: '금천구', type: '구' },
    { name: '영등포구', type: '구' },
    { name: '동작구', type: '구' },
    { name: '관악구', type: '구' },
    { name: '서초구', type: '구' },
    { name: '강남구', type: '구' },
    { name: '송파구', type: '구' },
    { name: '강동구', type: '구' },
  ],

  세종: [{ name: '세종특별자치시', type: '특별자치시' }],

  울산: [
    { name: '중구', type: '구' }, // 제목에만 있어서 ID 없음
    { name: '남구', type: '구' },
    { name: '동구', type: '구' },
    { name: '북구', type: '구' },
    { name: '울주군', type: '군' },
  ],

  인천: [
    { name: '중구', type: '구' },
    { name: '동구', type: '구' },
    { name: '미추홀구', type: '구' },
    { name: '연수구', type: '구' },
    { name: '남동구', type: '구' },
    { name: '부평구', type: '구' },
    { name: '서구', type: '구' },
    { name: '계양구', type: '구' },
    { name: '강화군', type: '군' },
    { name: '옹진군', type: '군' },
  ],

  전남: [
    { name: '목포시', type: '시' },
    { name: '여수시', type: '시' },
    { name: '순천시', type: '시' },
    { name: '나주시', type: '시' },
    { name: '광양시', type: '시' },
    { name: '담양군', type: '군' },
    { name: '곡성군', type: '군' },
    { name: '구례군', type: '군' },
    { name: '고흥군', type: '군' },
    { name: '보성군', type: '군' },
    { name: '화순군', type: '군' },
    { name: '장흥군', type: '군' },
    { name: '강진군', type: '군' },
    { name: '해남군', type: '군' },
    { name: '영암군', type: '군' },
    { name: '무안군', type: '군' },
    { name: '함평군', type: '군' },
    { name: '영광군', type: '군' },
    { name: '장성군', type: '군' },
    { name: '완도군', type: '군' },
    { name: '진도군', type: '군' },
    { name: '신안군', type: '군' },
  ],

  전북: [
    { name: '전주시', type: '시' },
    { name: '군산시', type: '시' },
    { name: '익산시', type: '시' },
    { name: '정읍시', type: '시' },
    { name: '남원시', type: '시' },
    { name: '김제시', type: '시' },
    { name: '완주군', type: '군' },
    { name: '진안군', type: '군' },
    { name: '무주군', type: '군' },
    { name: '장수군', type: '군' },
    { name: '임실군', type: '군' },
    { name: '순창군', type: '군' },
    { name: '고창군', type: '군' },
    { name: '부안군', type: '군' },
  ],

  제주: [
    { name: '제주시', type: '시' },
    { name: '서귀포시', type: '시' },
  ],

  충남: [
    { name: '천안시', type: '시' },
    { name: '공주시', type: '시' },
    { name: '보령시', type: '시' },
    { name: '아산시', type: '시' },
    { name: '서산시', type: '시' },
    { name: '논산시', type: '시' },
    { name: '계룡시', type: '시' },
    { name: '당진시', type: '시' },
    { name: '금산군', type: '군' },
    { name: '부여군', type: '군' },
    { name: '서천군', type: '군' },
    { name: '청양군', type: '군' },
    { name: '홍성군', type: '군' },
    { name: '예산군', type: '군' },
    { name: '태안군', type: '군' },
  ],

  충북: [
    { name: '청주시', type: '시' },
    { name: '충주시', type: '시' },
    { name: '제천시', type: '시' },
    { name: '보은군', type: '군' },
    { name: '옥천군', type: '군' },
    { name: '영동군', type: '군' },
    { name: '증평군', type: '군' },
    { name: '진천군', type: '군' },
    { name: '괴산군', type: '군' },
    { name: '음성군', type: '군' },
    { name: '단양군', type: '군' },
  ],
};
