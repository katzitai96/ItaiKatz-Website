setupTransition();

function setupTransition() {

  function changeClass1(){
    if(document.querySelector("#arnona_problem_1").className == "common_problem_hover"){
      document.querySelector("#arnona_problem_1").className = "common_problem";
    }
    else{
      document.querySelector("#arnona_problem_1").className = "common_problem_hover";
    }
  }

  function changeClass2(){
    if(document.querySelector("#arnona_problem_2").className == "common_problem_hover"){
      document.querySelector("#arnona_problem_2").className = "common_problem";
    }
    else{
      document.querySelector("#arnona_problem_2").className = "common_problem_hover";
    }
  }

  function changeClass3(){
    if(document.querySelector("#arnona_problem_3").className == "common_problem_hover"){
      document.querySelector("#arnona_problem_3").className = "common_problem";
    }
    else{
      document.querySelector("#arnona_problem_3").className = "common_problem_hover";
    }
  }

  document.querySelector("#arnona_problem_1").addEventListener("mouseenter", changeClass1);
  document.querySelector("#arnona_problem_1").addEventListener("mouseleave", changeClass1);

  document.querySelector("#arnona_problem_2").addEventListener("mouseenter", changeClass2);
  document.querySelector("#arnona_problem_2").addEventListener("mouseleave", changeClass2);

  document.querySelector("#arnona_problem_3").addEventListener("mouseenter", changeClass3);
  document.querySelector("#arnona_problem_3").addEventListener("mouseleave", changeClass3);
}
