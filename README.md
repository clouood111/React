## 컴포넌트 속성 검사


<p>스캐폴딩 과제에서 생성했던 구조를 토대로 진행했다.</p>

<hr>
<h4>폴더 구조</h4>

```week2-hw
   ├─ .npmrc
   ├─ eslint.config.js
   ├─ index.html
   ├─ jsconfig.json
   ├─ package-lock.json
   ├─ package.json
   ├─ public
   │  ├─ icon
   │  │  ├─ Facebook.svg
   │  │  ├─ Instagram.svg
   │  │  ├─ Twitter.svg
   │  │  └─ Youtube.svg
   │  └─ react.svg
   ├─ README.md
   ├─ src
   │  ├─ components
   │  │  ├─ SnsLinks.jsx
   │  │  └─ SnsLinksList.jsx
   │  ├─ main.jsx
   │  └─ styles
   │     ├─ reset.css
   │     └─ SnsLinksList.css
   └─ vite.config.js
   ```

<hr>
<strong>주요 컴포넌트</strong> 

- **SnsLinks** : 개별 링크로 url, icon, ariaLabel 속성을 받아 링크를 생성하고, PropTypes를 이용해 속성 타입을 검사한다.
-  **SnsLinksList** :  여러 SNS 링크를 포함하는 리스트로, links 배열을 순회하여 각각의 SnsLink 컴포넌트를 생성했다. 

PropTypes를 통해 각 속성이 올바르게 전달되는지 검사하고, 속성 누락이나 잘못된 타입의 속성이 전달될 경우 콘솔에 경고가 출력된다.

</p>

<hr>
<h4>느낀 점</h4>
<p>피그마 사용이 익숙하지 않아서 간단한 푸터 sns 링크 컴포넌트를 생성했다. 수업을 들으면서 리액트가 너무 어렵다고 느껴졌는데, JS 기본기가 부족한 것 같아서 복습을 열심히 해야할 것 같다. 과제를 수행하면서 내가 짠 코드가 제대로 작성된 것이 맞는지 의문이 들어서 개선해야 할 점에 대해 날카로운 피드백을 받고 싶다.
</p>


