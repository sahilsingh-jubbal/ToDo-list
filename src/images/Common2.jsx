var [fromFirst, setFromFirst] = useState(1);
var [fromSecond, setFromSecond] = useState(1000);
var number;
function OnChangeFirst(eve) {
    var valueForFirst = document.getElementById('firstfor').value;
    var selectFirst = document.getElementById('selectOne').value;
    var valueForSecond = document.getElementById('secondfor').value;
    var selectSecond = document.getElementById('selectTwo').value;
    console.log(selectFirst, 'and', selectSecond);

    var lengthOne = time(valueForFirst).from(selectFirst).to(selectSecond);
    console.log(lengthOne);
    setFromFirst(valueForFirst);
    setFromSecond(lengthOne.value);


}
function OnChangeSecond(eve) {
    var valueForFirst = document.getElementById('firstfor').value;
    var selectFirst = document.getElementById('selectOne').value;
    var valueForSecond = document.getElementById('secondfor').value;
    var selectSecond = document.getElementById('selectTwo').value;
    console.log(selectFirst, 'and', selectSecond);

    var lengthOne = time(valueForSecond).from(selectSecond).to(selectFirst);
    console.log(lengthOne);
    setFromFirst(lengthOne.value);
    setFromSecond(valueForSecond);

}