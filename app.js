var emotion = ["기쁜", "슬픈", "행복한", "심심한", "졸린"]
var color = ["빨간색", "주황색", "노란색", "초록색", "파란색", "남색", "보라색"]
var animal = ["카피바라", "기린", "토끼", "호랑이", "사자", "말", "재규어", "고양이"]

function getRandomElement(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}
function getRandomNumber() {
    return Math.floor(Math.random() * 999) + 1
}

var randomEmotion = getRandomElement(emotion)
var randomColor = getRandomElement(color)
var randomAnimal = getRandomElement(animal)
var randomNumber = getRandomNumber()
var nickName = randomEmotion + "_" + randomColor + "_" + randomAnimal + "_" + randomNumber