function Settings() {
  this.category = document.querySelector('#category');
  this.tags = document.querySelector('#tags');
  this.numberOfQuestions = document.querySelector('#questions');
  this.difficulty =[document.querySelector('#easy'),
  document.querySelector('#medium'),
  document.querySelector('#hard')]
  this.quiz = {};

  let updateTags = ()=>{
    var selectedValue = this.category.value;
    if (selectedValue == 'Linux') {
      // document.getElementById('tag').style.display = 'block';
      this.tags.innerHTML = 
      `
      <option value="BASH">BASH</option>
      <option value="Linux">Linux</option>
      <option value="Kubernetes">Kubernetes</option>`;
    } else if (selectedValue == 'code') {
      // document.getElementById('tag').style.display = 'block';
      document.getElementById('tags').innerHTML = 
      `
      <option value="php">php</option>
      <option value="javascript">javascript</option>
      <option value="HTML">HTML</option>
      <option value="Laravel">Laravel</option>`;
    } else if (selectedValue == 'DevOps'){
      // document.getElementById('tag').style.display = 'block';
      document.getElementById('tags').innerHTML = 
      `
      <option value="Kubernetes">Kubernetes</option>
      <option value="DevOps">DevOps</option>`;
    } else if (selectedValue == 'sql'){
      // document.getElementById('tag').style.display = 'block';
      document.getElementById('tags').innerHTML = 
      `
      <option value="mysql">mysql</option>
      `
    } else if (selectedValue == 'CMS'){
      // document.getElementById('tag').style.display = 'block';
      document.getElementById('tags').innerHTML = 
      `
      <option value="wordpress">WordPress</option>
      <option value="bash">BASH</option>`;
    }
  }
  window.onload = updateTags;
  document.getElementById('category').addEventListener('change',updateTags);
}

Settings.prototype.geturl = function() {
    const limit = this.getAmount();
    const category = this.category.value;
    const tags = this.tags.value;
    const difficulty = this.getCurrentDifficulty();
    console.log("ok")
    const url = `https://quizapi.io/api/v1/questions?category=${category}&difficulty=${difficulty}&limit=${limit}&tags=${tags}&apiKey=uHwxfvQjSD6C5xhF5A8zDby70UoisYksXQwLzL5T`
    console.log(url)
    return url;
}

Settings.prototype.getCurrentDifficulty = function() {
  const checkedDifficulty = this.difficulty.filter(element => element.checked);
  console.log(checkedDifficulty)
  if (checkedDifficulty.length === 1) {
    return checkedDifficulty[0].id;
  } else {
    // throw new Error('Please select a difficulty!');
    var mssg=document.getElementById("showdeff")
    mssg.innerHTML="enter the difficulty please &#128530;"
    Settings.prototype.getCurrentDifficulty()
  }
  
}

Settings.prototype.getAmount = function() {
  const amount = this.numberOfQuestions.value;
  // Not negative, not 0 and not over 20
  if (amount > 0 && amount < 21) {
    return amount;
  }else {
    var mssg=document.getElementById("numberquisError")
    mssg.innerHTML="enter the a number and the number most bettwen 0to 20 &#128530; "
    Settings.prototype.getAmount()
  }
  //throw new Error('Please enter a number of questions between 1 and 20!');
} 

export default Settings;