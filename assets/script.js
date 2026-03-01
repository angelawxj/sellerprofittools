// assets/script.js
function toggleTheme(){
    document.body.classList.toggle('dark');
  }
  
  // 通用计算器函数模板
  function calculateFormula(inputs, formulaFunc, resultId){
    const values = {};
    for(const key in inputs){
      values[key] = parseFloat(document.getElementById(key).value) || 0;
    }
    const result = formulaFunc(values);
    document.getElementById(resultId).textContent = result;
  }