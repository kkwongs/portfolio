const aboutMeContainer = document.querySelector('.js-about-me-container');

const label = ['이름', '생년월일', '주소지', '연락처', '이메일', '학력'];
const value = [
  '권기현',
  '95.10.26',
  '경기도 용인시 기흥구',
  '010-6512-5741',
  'kihyun5741@gmail.com',
  '단국대학교<br />소프트웨어학과',
];
const images = [
  'images/person-fill.svg',
  'images/calendar-fill.svg',
  'images/geo-alt-fill.svg',
  'images/telephone-fill.svg',
  'images/envelope-fill.svg',
  'images/pencil-fill.svg',
];

function paintContainer() {
  for (let i = 0; i < images.length; i++) {
    const divContainer = document.createElement('div');
    const divImage = document.createElement('div');
    const divField = document.createElement('div');
    const divLabel = document.createElement('div');
    const divValue = document.createElement('div');
    const containerImg = document.createElement('img');
    containerImg.src = images[i];
    divLabel.innerHTML = label[i];
    divValue.innerHTML = value[i];
    divContainer.classList = 'about-me-container-wrapper';
    divImage.classList = 'about-me-img-wrapper';
    divField.classList = 'about-me-field';
    divLabel.classList = 'about-me-label';
    divValue.classList = 'about-me-value';
    containerImg.classList = 'about-me-img';
    divImage.appendChild(containerImg);
    divField.append(divLabel, divValue);
    divContainer.append(divImage, divField);
    aboutMeContainer.appendChild(divContainer);
  }
}

function init() {
  paintContainer();
}

init();
