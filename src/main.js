// json부터 데이터를 받아오는 함수
function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// json에서 가져온 item 데이터들을 이용해서, 이를 목록에 해당하는 HTML을 생성 후 반환
function jsonToHTML(json) {
  const itemsHTML = json.map(item => createHTMLString(item));
  return itemsHTML;
}

// 주어진 데이터를 바탕으로 HTML코드를 반환하는 함수
function createHTMLString(item) {
  return `
          <li class="item" data-type="${item.type}" data-color="${item.color}">
            <img src="${item.image}" alt="${item.type}" class="item__thumnail"  />
            <span class="item__description">${item.gender}, ${item.size}</span>
          </li>
          `;
}


// parameter로 들어온 html문을 class속성값이 items라는 위치에 추가하여 역할을 하는 함수 (= 초기 전체 데이터 목록 렌더링)
function displayHTML(html) {
  const container = document.querySelector('.container');
  container.innerHTML = html.join('');
}


// json에서 가져온 item 데이터들을 이용해서, 이를 목록에 해당하는 HTML을 생성 후, class속성값이 items라는 위치에 추가하여 역할을 하는 함수 (= 초기 전체 데이터 목록 렌더링)
function onButtonClick(event) {

  // 각 필터 버튼에 해당하는 html요소에 주었던 dataset을 이용하여 이들을 구분할 목적 (event객체를 통해, 이벤트 발동한 html요소를 구분)
  const dataSet = event.target.dataset;

  // 해당 필터 html요소의 data-key, data-value에 해당하는 값 (= 이를 통해 json형식으로 작성된 각 데이터의 멤버변수의 값을 지정할 예정) 
  const key = dataSet.key;
  const value = dataSet.value;

  // (성능 이슈) 필터된 데이터로 다시 랜더링을 하는건, 비효율적임
  // displayItems(items.filter(item => item[dataKey] == dataValue) );

  // (성능 해결) 이미 로딩된 녀석들을 조건에 따라 display 속성만 변경해줌
  filteredItemDisplay(key, value);
}

// 필터버튼에 따라 해당하는 아이템 개별요소의 display값을 변경
function filteredItemDisplay(key, value){

  const items = document.querySelectorAll('.item');

  // data-key, data-value가 없는 요소인 로고 필터를 클릭하면, 전체 list를 보여줌
  if(key == null || value == null){
    items.forEach(li => li.style.display = '');
    return;
  }

  // data-key, data-value가 있는 요소를 클릭하면, 그에 맞는 key값을 참고하여, list의 멤버요소의 값을 참고하여, 필터 요소의 value값과 맞는 녀석만 전시
  items.forEach((li) => {
    li.dataset[key] == value ? li.style.display = '' : li.style.display = 'none';
  });

}


// main 영역
//  : 세부적 코드를 나열하지 말고, 추상화된 함수를 통한 의사코드(pseudocode) 같은 느낌으로 어떤 단계로 일처리 논리적으로 진행될지를 개발자로 하여금 짐작가능하게 하자
loadItems()                   // json의 item 멤버속성의 데이터를 받는데 성공시
  .then(items => {
    const itemList = jsonToHTML(items);      // 그 데이터를 통해 html화면에 item들을 랜더링하고
    displayHTML(itemList);

    const logo = document.querySelector('.logo');
    logo.addEventListener('click', event => onButtonClick(event));

    const filter = document.querySelector('.filter');
    filter.addEventListener('click', event => onButtonClick(event));

  })
  .catch(console.log);