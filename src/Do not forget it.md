# 🤬This is the note which makes me remind for developing "John, I gotta go"

## It means I`ll write own study subject in korean after this line. If you want to read this, plz translate your language

----------------------- 필   기 ----------------------------

<!--GitHub-->
# reset
> git log로 버전 확인 (이때 최신 버전은 HEAD -> MASTER)
> git reset --hard HEAD (HEAD가 가장 최신 버전이니까 그 하위의 버전은 ~1, ~2, 이런식으로 선택하여 되돌리기)

# npm install github open source
 clone으로 복사하고 깔았는데 사용에 실패하면 제작자가 패키지 이름이나 컴포넌트 이름을 잘못설정했을 확률이 높으니, 대소문자 구분해서 설정해보자

<!--node-->
# NVM (Node Version Manager)

# command
1. node - v : node.js current version

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

<!--Back End-->

# OPEN API
## error
  cors(cross origin resource sharing) 에러 : 도메인이 다르기에 발생 / port 차이
  vue.config.js에서 수정 -> proxy root url 추가


