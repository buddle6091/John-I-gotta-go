# 🤬This is the note which makes me remind for developing "John, I gotta go"

## It means I`ll write own study subject in korean after this line. If you want to read this, plz translate your language

----------------------- 필   기 ----------------------------
<!--After Formated PC-->
# 🤬 ERROR COLLECTION
  1. yarn을 설치하려하는 도중 이 시스템에서 스크립트를 실행할 수 없다는 것을 표시 => no ExecutionPolicy
    = 1. 관리자 권한으로 power shell 실행
      2. Get-ExecutionPolicy 명령어로 권한상태 확인
      3. 없다하면 Set-ExecutionPolicy RemoteSigned, 변경하시겠습니까? -> Y
      4. 그 후 다시 Get-ExecutionPolicy로 확인해보면 remote 권한 획득에 성공. 다시 npm i 하면 잘 만 깔린다.

<!--TypeScript-->
# 🤬 ERROR COLLECTION
 1. Cannot write file ~ because it would overwrite input file
  = OutDir 옵션을 따로 지정해서 그럼.
  a ) tsconfig.json -> compilerOption -> allowJS를 true -> false
 2. These relative modules were not found
  = 대부분 경로나 import 한 파일 이름을 틀린 채로 module을 깔아서 충돌로 인한 오류
  a ) 에러 첫번째 문단이랑, 마지막 문단으로 파일을 추적해서 오타 수정 후 모듈 삭제한 다음  > npm install
 3. Could not find a declaration file for module '~~'
  = 파일명 및 경로도 정확했고, 모듈 폴더를 삭제 후 다시 깔아도 이런 오류가 발생하면
  tsconfig.json - noImplicitAny 를 false 값으로 바꾼다. 
4. 
<!--GitHub-->
# re
> git log로 버전 확인 (이때 최신 버전은 HEAD -> MASTER)
> git reset --hard HEAD (HEAD가 가장 최신 버전이니까 그 하위의 버전은 ~1, ~2, 이런식으로 선택하여 되돌리기)

# npm install github open source
 clone으로 복사하고 깔았는데 사용에 실패하면 제작자가 패키지 이름이나 컴포넌트 이름을 잘못설정했을 확률이 높으니, 대소문자 구분해서 설정해보자

# clone
> git clone [repository url] 그 후 해당 폴더로 들어가(cd) > code . -r 을 하면 현재 화면에서 바로 표시됨
# reset / revert
reset : 커밋을 없애고 그 커밋으로 되돌아가는 기능이다. 그리고 그냥 git reset 만 하면 commit들이 다 지워지는... 
> git reset [commitHASH]
revoke : commit과 반대로 commit을 유지하며 되돌리는 방법이다.
> git revert [commitHASH]

# git push 가 안되는 경우
 ❗ fetal: regusing to merge unrelated histories
 > git pull origin [branch] --allow-unrelated-histories -> pull 을 이용해 프로젝트 병합
 반대로 pull 이 안되면 
 > git branch -> branch 확인
 > git checkout master  -> master로 체크아웃
 > git branch --set-upstream-to=origin/master master -> 로컬 master가 origin/master를 추적하게끔 해줌

# init
> git init 으로 버전 관리
❗ 만약 Reinitialized existing Git repository in ~ 오류가 발생하면 > git remote -v 으로 원격 리모트 주소가 아닌경우에는 삭제하면 됨

# CRLF error
LF will be replaced by CRLF in package-lock.json.LF will be replaced by CRLF in package-lock.json. 라는 에러 발생 시
> git config --global core.autocrlf true

<!--node js-->
# NVM (Node Version Manager)

# command
1. node - v : node.js current version

# npm run serve error
에러 내용 : error - digital envelope routines::unsupported
 "scripts": {
    "serve": "SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
    "build": "SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build",
    "lint": "SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service lint"
  },
  을 package.json에 교체 추가 해주면 됨.

# 'vue-cli-service'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다. error
위의 백업 기능이 여러 branch의 충돌로 인해서 먹히지 않는다면. clone으로 가져와서 백업을 진행하였고, powershell에서 npm run serve를 하는데 위와 같은 에러가 발생한다.
1. vue가 깔려있는지 확인. >npm i -g vue
2. module을 지우고 다시 >npm i 로 모듈설치
3. 다시 서버 실행 시키기

# ERR! ERESOlVE unable to resolve dependency tree for
라이브러리 다운 중, npm의 의존성 문제에 충돌하여 설치가 안된다. 
패키지 명 뒤에 --save --legacy-peer-deps 추가하면 성공


<!--css-->
# icon (google material icon)
패키지를 설치 후 index.html에 import 로 코딩해놓은 후부터 사용가능. 
쉽게 사용하는 법은 <i class="material-icons"> cloud </i>
❗ 선택자 다음에 class="material-icons" 후에 구간 사이에 https://fonts.google.com/icons?selected=Material+Icons 에서 원하는 아이콘의 이름을 작성하면 바로 표기됨.
❗❗ 이 material-icons는 font 형태로 되어있기에, 일반 css스타일로 width, height 이런거 안먹힘... font-size 로 크기 조절해야됩니다..

# 정렬 / 배치

## align 
가장 큰 컨테이터 안의 요소들을 가로 정렬을 하고 싶다..!! 그렇다면 부모 컨테이너에 display: flex; flex-direction: row;를 해 놓으면 1자로 정렬된다. (단 자식들 중에서도 같은 순위에 있는 애들 끼리)

오른쪽부터 정렬을 하고 싶다면 row -> row-reverse
세로는 row -> column

## position
요소의 위치 지정 기준

static : 기준 x
relative : 자신을 기준
    ❕top, bottom, left, right : 웹에 px, rem 등으로 지정 가능
absolute : 위치 상 부모 요소를 기준 
    ❗ 항상 부모 요소 확인
fixed : viewport(브라우저)를 기준
sticky : 스크롤 영역 기준

# CSS selector

## *
전체 요소 선택자. 그러나 브라우저에 과부하가 걸릴 가능성 O,\
보통 margin: 0, padding: 0에 많이 사용

## X Y (descendant)
선택자를 이용하여 더 상세히 작업해야할 때 사용, 구분짓기
ex ) li a {}

## X:visited / X:link
클릭하기 전 상태의 앵커 태그 전체를 대상으로 하려고 :link 가상 클래스 사용
:visitied 가상 클래스는 이미 클릭했거나 방문했던 페이지에 있는 앵커 태그에만 특정한 스타일 적용
ex ) a:link {}

## X + Y
인접 선택자, 앞의 요소 바로 뒤에 있는 요소만 해당됨
ex ) li + span {}

## X > Y
일반 X Y 와 다르게 직계 자식만을 선택하는 것이다.
ex ) div > ul

## X ~ Y
X + Y 와 같은 형제 선택자이지만 관대한 버젼으로, 하위의 모든 요소를 선택가능하다.

## X[title]
속성 선택자, title 속성이 있는 앵커 태그만을 선택, title이 없는 태그에는 특정한 스타일이 적용되지 않는다. -> 상세한 작업 추천
ex ) a[title] {}

## X[href="foo"] / X[href*="nettuts"] / X[href^="http"] / X[href$=".jpg"] / X[data-*="foo"] / X[foo~="bar"]

## X:checked
라디오나 체크박스 같은 체크되는 사용자 인터페이스 요소만을 대상으로 한다. 
ex ) input[type=radio]: checked {}

## X::after(before)
클래스 선택된 요소 주변에 콘텐츠를 생성 = 삽입해주는 요소
content라는 속성과 함께 쓰임
ex ) .clearfix::after {
  content: ""
}

## X:hover
사용자가 요소 위에 커서를 올리면 특정 스타일 적용

## X:focus
해당 컨테이너를 한번이라도 클릭 -> 지정 하면 동작. 
만약 동작하지 않는 요소라면 ex ) <div class=" " tabindex="-1">

## X:not(선택자)
원하는 요소를 선택하고 싶은데 그중에 특정 요소만 제외하고 싶을 때 쓰임
ex ) div:not(#container) {
  color: blue;
}

## X::가상요소
첫 번째 줄이나 첫 글자와 같이 요소 일부분에 스타일을 적용하는데 가상 요소 (::로 표기되는)를 사용할 수 있다. 블록 레벨 요소에 적용

## X:nth-child(n)

## X:only-of-type

## data-@@-##
해당 요소에 있는 값을 JS에서도 만질 수 있게 해줌
ex ) <span data-car-name= "mercedes"> 메르세데스 </span>
JS ex ) [data-car-name] {
  color: royalblue;
}

# animation
## colapse Tip
  https://developers.google.com/web/updates/2017/03/performant-expand-and-collapse
  getBoundingClientRect() : 뷰포트를 기준으로 요소의 크기와 해당 위치를 반환
  왼쪽, 위쪽, 오른쪽, 아래, x, y, 너비, 높이,  8개의 속성 반환

# 스타일 상속

## 상속되는 CSS 속성 (대부분 글자/문자 관련 속성)
font-style : 글자 기울기
font-weight : 글자 두께
font-size : 글자 크기
line-height : 줄 높이
font-family : 폰트(서체)
color : 글자 색상
text-align : 정렬을

## inherit - 강제상속
예를 들어 부모 요소의 height: 3rem인데 자식 요소들도 다 일일이 3rem 칠 필요 없이 height : inherit 치면 강제 상속이 된다.

# modal 창 만들기

## 모달창이 작동할 때 뒤의 요소들보다 가장 앞에 표시하고 싶을 때는 Modal component를 가장 뒤에 놓기

# datepicker

<div>
    <datepicker
      class="picker"
      v-model="selected"
      :locale="locale"
      :upperLimit="to"
      :lowerLimit="from"
      :clearable="true"
			:disabledDates="{ predicate: isToday }"
    >
      <template v-slot:clear="{ onClear }">
        <button @click="onClear">x</button>
      </template>
    </datepicker>
  </div>

<!--JS-->
# Date()
## make single digit format -> 2 digit format
  기본적으로 getMonth(), getDate()는 getFullYear()와 달리 1의 자리수는 싱글 포맷으로 표기됨.
  ("0" + this.getDate()).slice(-2)
  ("0" + (this.getMonth() + 1)).slice(-2) // month는 0부터 시작하기 때문

# ||, && 연산자
## || (or) 변수 초기화 연산자
  ex ) function() {documentDate(theDate)
  thedate = theDate || 20211121} // 인자값이 존재하지 않다면 or 연산자 오른쪽의 20211121이 리턴

  documentDate("20211222") // "20211222"
  documentDate() // "20211121"

## && (and) 조건문 연산자
  ex ) function isAdult(age) { if (age && age > 17) { return true; } else { return false; } } // age 라는 전달인자가 존재하고, 17보다 크게되면 true라는 boolean 값을 반환, 그게 아니라면 false

  ex ) function enter(userName) { userName && logIn(userName) || signUp (); }
  // usernName 인자를 받았다면 logIn 함수 실행, 아니라면 signUp 함수 실행

# String.prototype
## replace(oldvar, newvar): oldvar를 newvar로 대체, ''으로 공백을 주어 없애는 것도 가능
  ### 모든 문자를 한번에 바꾸려면 정규식 사용 (/oldvar/)
  '//' 사이에 검색할 문자를 입력 (여기서 부터 시작임)
  '||' 로 여러개의 문자를 바꾸기도 가능 (ex /oldvar1|oldvar2|.../)
  1 ) / 뒤에 g : 발생할 모든 패턴에 대한 전역 검색 (Gloval search), 2 ) i : 대/소문자 구분 무시 (Case-insensitive search), 3 ) m : 여러줄 검색 (Multi-line search)
<!--vue-->
# vue warn
  ❗ "Property [ ] was accessed during render but is not defined on instance."
  -> 정의를 안해놓은것을 가져다 쓰고 있다..? 

# API 숨기기
  dotenv 이용

# watch()
  Data (val, oldVal)
  val 은 변경데이터, oldVal 은 변경 전 데이터

# methods() vs computed()
  methods에서는 안에 언급되지 않은 데이터의 변경될 때도 재실행 가능, computed에서는 자신이 참고하고있는 데이터의 변경에만 재실행

  계속 methods에서 굴리다가 application이 필요 없는 데이터까지 계산에 넣어서 돌아가느라 부하가 걸릴 수 있으니, 자신과 관계없는 데이터는 x, 정해진 데이터에만 반응하는 함수는 computed

# 조건부 (toggle) 에 따른 class 효과 부여하기
 ex ) 
 <div class="selectContainer__total" @click="Active()" :class="{'is-active': isActive, [className]: true}">

  # vuex
    vuex data 불러오기. {{ $store.state.name }}
    ❗ state의 데이터를 컴포넌트에서 억지로 변경 x -> 컴포넌트의 수가 많으면 나중에 버그 났을때
     = > store.js에 요청하기
    만약 데이터 수정하려면 데이터 수정방법인 mutations 항목에서 처리하면 가능

    ❗ mutations 에서 ajax 처리는 X -> 처리 기간에 따라 다른 mutations의 항목들이 동작하는 데 까지 딜레이가 예상됨 => 대신 actions 를 이용
 
    ❗ actions 에서 vuex의 구조상 api data를 바로 state에 전달이 불가능하고, mutations 통해서 state에 전달 가능, actions에서 state 요소를 사용하고 싶어서 this.$store.state~ 이렇게 쓰면 vscode에선 에러가 잡히지 않아도, server에서 명령을 실행시키면 오류때문에 실행이 안됨. actions 함수 인자에 state 추가해야함


<!--Back End-->

# OPEN API
## error
  cors(cross origin resource sharing) 에러 : 도메인이 다르기에 발생 / port 차이
  vue.config.js에서 수정 -> proxy root url 추가
  ❗ 공공데이터에서 제공하는 api인 경우 cors 부분은 해당 api 배포서버에서 해결해줘야하는 부분이기에 여기서 건들일 방법이 전무하다. 그러므로 개발 단계에서 사용하는 크롬 브라우저에 플러그인을 추가해 임시로 보호를 해제한다.

  https://velog.io/@qortmdalsdl/CORS-%EC%A0%95%EB%A6%AC%EC%99%80-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-Chrome


