const aboutMeInfo = document.querySelector('.js-about-me-info');

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

function paintInfo() {
  for (let i = 0; i < images.length; i++) {
    const divInfo = document.createElement('div');
    const divImage = document.createElement('div');
    const divField = document.createElement('div');
    const divLabel = document.createElement('div');
    const divValue = document.createElement('div');
    const infoImg = document.createElement('img');
    infoImg.src = images[i];
    divLabel.innerHTML = label[i];
    divValue.innerHTML = value[i];
    divInfo.classList = 'about-me-info-wrapper';
    divImage.classList = 'about-me-img-wrapper';
    divField.classList = 'about-me-field';
    divLabel.classList = 'about-me-label';
    divValue.classList = 'about-me-value';
    infoImg.classList = 'about-me-img';
    divImage.appendChild(infoImg);
    divField.append(divLabel, divValue);
    divInfo.append(divImage, divField);
    aboutMeInfo.appendChild(divInfo);
  }
}

function init() {
  paintInfo();
}

init();
