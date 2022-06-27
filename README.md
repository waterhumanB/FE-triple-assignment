# 트리플 기업 과제

![ezgif com-gif-maker](https://user-images.githubusercontent.com/69314161/175961834-1b3ccd35-cf8b-4cb1-8814-fce656ca88e6.gif)

[배포 주소](https://waterhumanb.github.io/FE-triple-assignment/)

# 1. 프로젝트 실행 방법

git 레포 클론

```
git clone https://github.com/waterhumanB/FE-triple-assignment.git
```

사용한 라이브러리 설치

```
npm install
```

웹 실행하기

```
npm start
```

# 2. 사용한 기술과 선택한 이유

### 사용한 기술 스택

```
React, TypeScript, Styled-components
```

### 기술 선정 이유

- TypeScript

  - 동적인 자바스크립트를 사용할 때 발생하는 오류 포괄적인 문법 오류들을
    정적 타입을 통하여 오류를 정확하게 포착 할 수 있습니다.
  - 명시적인 정적 타입 지정은 개발자의 의도를 명확하게 코드로 기술할 수 있어,
    코드의 가독성을 높이고 예측할 수 있어 디버깅을 좀 더 쉽게 할 수 있습니다.

- Styled-components
  - scss 라이브러리 설치 없으 scss 문법을 사용할 수 있습니다.
  - 자유로운 CSS커스텀 컴포넌트를 만들 수 있습니다.
  - 컴포넌트의 props를 참조할 수 있고, props의 값에 따라 스타일을 다르게 코딩
    할 수 있습니다

# 3. 요구 사항

- [x] 문구, 이미지의 레이아웃과 스타일은 트리플 홈페이지와 동일해야 합니다. 단,
      반응형 레이아웃은 고려하지 않습니다. 최소 화면 폭을 1200px로 고정합니다.
- [x] Google Chrome 최신 버전에서 동작해야 합니다.
- [x] README.md를 작성합니다. 아래 내용을 반드시 포함하되, 이외 내용은 자유롭게  
       추가할 수 있습니다.
- [x] 린팅/포매팅 셋업 시 titicacadev/eslint-config-triple을 적용해주세요.  
       애니메이션 명세
      영역별 등장 애니메이션
- [x] 좌측 이미지, 지표 문구, 수상 내역 순으로 표시해야 합니다.
- [x] 살짝 위로 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션을  
       적용해야 합니다.
- [x] 등장 애니메이션의 duration은 700ms이고, 애니메이션 사이 간격은
      100ms입니다.
      숫자가 올라가는 애니메이션
- [x] 각 숫자는 0부터 시작합니다.
- [x] 세 숫자 모두 2초 동안 증가하고, 동시에 끝나야 합니다.
- [x] 증가 속도가 느려지는 효과를 구현해야 합니다.
- [x] React와 DOM API만을 이용해 구현해야 합니다.

# 4. 구현 방법

### 각 영역 등장 애니메이션

- CSS animation을 활용해서 구현했습니다.
- 애니메이션 duration 및 delay값은 요구사항대로 구현했습니다.

### 숫자 증가 애니메이션

- setInterval을 사용해서 state에 값이 일정 간격 동안 저장되게 구현 했습니다.
  마지막에 느려지는 효과는 easeOutExpo의 변화율을 사용해서 애니메이션 효과를 구현했습니다.
