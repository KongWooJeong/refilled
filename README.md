<br>

# 💻  Refilled
<br>

# ⚙️ Installation
```
  1. npm i
  2. npm run dev
```

<br>

# 🔨 기술 스택
```
  - nextjs 13 with typescript
  - redux-toolkit
  - scss
```

<br>

# 🛠 Folder Structure
```
- src
  - app: 화면 페이지 관련 컴포넌트
  - components: 화면에 필요한 컴포넌트
  - data
    - api: api 관련 메소드
    - repository: 클라이언트단에 내려주는 데이터 메소드
  - hooks: 사용자 정의 훅 (리덕스 상태 업데이트 함수 래핑)
  - redux: 리덕스 스토어 및 리듀서 
  - utils: 화면에 필요한 유틸 함수
```

<br>

# 💡 구현 사항
### 1. shop 페이지 구현
  - 상품 리스트 데이터 가져오기 (api)
  - 상품 선택시 옵션 모달 열기
  - 옵션 모달에서 장바구니 담기 기능
### 2. cart 페이지 구현
  - 장바구니에 담겨진 상품 노출 
  - 해당 상품들에서 갯수 및 총 가격 노출 
```
 자세한 각 기능 구현에 대해서는 PR 내용을 참고 한번 해주시면 감사하겠습니다.
```

<br>

# 🔍 구현 세부 사항

### 1. 폰트 적용
  - next/font 사용
```
 next/font 는 구글 폰트를 자동으로 호스팅되어 브라우저 구글로 별도의 요청을 보내지 않는 장점이 있습니다.
```
### 2. 이미지 적용
  - next/image 사용
```
 기본 브라우저 지연로딩이 적용되어 이미지에 지연로딩을 별도로 적용하지 않아도 되어 뷰포트에 들어올때(브라우저에서 노출될때)만 로드된다.

 많은 이미지 수를 사용하고 화면에 보여주는 이미지는 한정적일때 사용하면 아주 큰 장점이 될것 같습니다.
 모든 이미지를 한번 로드하지 않으므로 이미지때문에 한번에 많은 네트워크요청을 줄여 네트워크 병목 현상을 해결 할 수도 있을것 같습니다.

 그리고 첫 화면을 보여주는데까지 걸리는 시간 단축될수도 있다고 생각합니다.
```
### 3. 로딩, 에러 화면
  - nextjs 13 에서는 app 폴더 하위에 loading, error 컴포넌트를 적용하여 사용
```
nextjs 13 app 라우터를 사용할때 app 라우터 하위요소 loading 컴포넌트 파일이 존재하면 nextjs 에서 자동으로 <Suspence> 가 래핑되어 적용되므로 더 쉽게 구현할 수 있었습니다.

또한 error 컴포넌트 파일도 같은 위치에 존재하면 nextjs에서 자동으로 <ErroBoundary> 가 래핑되어 적용되므로 더 쉽게 구현할 수 있었습니다.
```
### 4. 모달 
  - 공통 컴포넌트를 생성하여 내부에 내용만 변경할 수 있도록 적용
  - createPotal 를 사용하여 적용
```
  리액트 createPotal를 사용하여 적용하여 특정위치에 모달이 노출되도록 적용하였습니다.
```
### 5. 외부 API를 통해 데이터 가져오기 
  - api 호출 메소드 래핑 (경로: app/data/api)
  - api 로 부터 가져온 데이터와 클라이언트단에 사용하는 데이터 분리 (경로: app/data/repository)
```
외부 api를 호출 구현부를 한번 래핑(추상화)를 통해 직접 사용하는 곳에서는 어떻게 호출되는지를 모르게하여 api 호출 구현부 변경할시에 해당 구현부만 수정하면 되고 클라이언트단은 수정할 필요가 없는 장점이 있다.

외부 api에서 받아온 데이터 와 클라이언트단에 사용하는 데이터를 분리하여 서버에 받아온 데이터 변경시에 클라이언트단 수정없이 해당 repository 만 수정하면 되고, 클라이언트단에 보여주는 데이터가 어떤 데이터와 조합해서 사용할때 더 쉽게 구현할 수 있는 장점이 있다고 생각합니다.
```
### 6. 전역상태 이용
  - 리덕스와 상태 업데이트 함수를 커스텀훅으로 래핑하여 사용
```
리덕스 상태 업데이트 하는 함수를 커스텀훅으로 래핑하여 사용하여 전역상태 관리 툴을 변경을 할때 컴포넌트단은 어떠한 전영상태 관리툴을 사용하는지 모르고 있기 때문에 해당 훅만 수정하면 되므로 상태관리툴을 변경가능성에 대해서는 더 쉽게 관리할 수 있다고 생각합니다.
```
### 7. 장바구니 아이템 담기
  - nanoid 를 사용하여 유니크키를 생성하여 같은 상품이여도 옵션이 다른 상황에도 장바구니에 담기도록 구현하였습니다.
### 8. 상품리스트 
  - 상품리스트가 여러개일때도 사용자가 해당 상품들을 쉽게 볼 수 있도록 스크롤 되게끔 구현하였습니다.
<br>


