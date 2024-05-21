export function FetchAPI() {
  const URL = "https://cat-fact.herokuapp.com/facts";
  const factPara = document.querySelector("#fact");
  const btn = document.querySelector("#button");

  const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL); //By default GET request in case there is no option we send
    console.log(response.url);

    let data = await response.json();

    var message = "";

    data.forEach((element) => {
      console.log(element.text);
      message = message + element.text;
    });

    factPara.innerHTML = message;
  };

  //   function getFacts() {
  //     var message = "";
  //     fetch(URL)
  //       .then((resposne) => {
  //         return resposne.json();
  //       })
  //       .then((data) => {
  //         data.forEach((element) => {
  //           console.log(element.text);
  //           message = message + element.text;
  //         });

  //         factPara.innerHTML = message;
  //       });
  //   }

  btn.addEventListener("click", getFacts);
}

//AJAX => Asynchronous JS and XML
// JSON => Javascript object notation
// json() method :  returns a second promise with the result of parsing the response body text as json
//json method la input json and output javascript cha object dete.
