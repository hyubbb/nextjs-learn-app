
# 소개

Nextjs, tanStack-query, firebase를 사용하여 만든 영화 검색 사이트입니다.
기능으로는 영화 검색과 좋아요기능이 있습니다.

- 관련포스팅 : <a href="https://velog.io/@hyubbb/Next.jsfirebase-%EC%84%9C%EB%B2%84%EC%82%AC%EC%9D%B4%EB%93%9C%EC%97%90%EC%84%9C-cookie%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8%EC%A0%95%EB%B3%B4-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0">서버사이드에서 로그인정보 유지하기</a>
,
<a href="https://velog.io/write?id=d40952c9-5df9-49f9-b9ea-bbf13fbbc818">useMutation를 사용해서 최신데이터로 유지</a>

- 배포페이지 : https://next-movie-app-rosy.vercel.app/

<br>


![0422-ezgif com-optimize](https://github.com/hyubbb/nextjs-learn-app/assets/32926006/a1c86bd0-8b6d-4178-a415-2e986a4de620)


<br>

# 스택

React, Next.js, Tanstack-Query, Typescript, Recoil, Firebase, Scss, 


<br>

# 기능
- `firebase` 를 이용한 로그인
- 영화 좋아요 기능
  - 좋아요, 좋아요 취소 가능. 개별페이지에서 컨텐츠 확인가능
- 반응형 UI



# 기타

- `next/image` 를 활용하여 데이터 로딩속도 절감
    - 로딩속도가 70%이상 절감을 경험
    - blur 기능을 사용하여 이미지가 렌더링되는 동안에 이미지표시
- `Suspense`를 이용하여 비동기 데이터 처리시 Spinner indicator로 로딩상태 처리
- `recoil` 은 검색창 온.오프에 필요한 변수와 로그인정보를 상태관리를 하기위해서 사용
- `firebase` 를 이용하여 회원가입과 좋아요 기능을 사용하기 위해 DB사용
    - 회원정보 검증을 위해 `firebase sdk`를 이용
- `react-query`로 데이터 관리, 서버로부터 비동기 데이터 (로그인, 좋아요)를 받아와서 캐싱처리
    - Optimistic Update를 이용하여 좋아요버튼을 눌렀을때 즉시 반응하여, 사용자 경험을 향상 시켰습니다.
