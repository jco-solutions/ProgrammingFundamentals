function hello(name) {
    console.log("Hello, " + name + "!")
  }
  hello('Mustache');

  function hello(name = "world") {
    console.log("Hello, " + name + "!")
  }
  hello();

  function madlib(name, subject){
      console.log(name + "'s favorite subject in school is " + subject + ".")
  }

  madlib("Anushka", "art")

  function tipAmount(amount, rating){
      if (rating === "good") {
          console.log(amount * .2);
      } else if (rating === "fair") {
          console.log(amount *.15);
      } else {
          console.log (amount * .1)
      }
  }
  tipAmount(100, "good")
  tipAmount(40, "fair")

  function totalAmount(amount, rating){
    if (rating === "good") {
        console.log((amount * .2) + amount);
    } else if (rating === "fair") {
        console.log((amount *.15) + amount);
    } else {
        console.log((amount * .1) + amount);
    }
}
totalAmount (100, "good")
totalAmount (40, "fair")

function splitAmount(amount, rating, population){

    if (rating === "good") {
        console.log(((amount * .2) + amount) / population);
    } else if (rating === "fair") {
        console.log(((amount *.15) + amount) / population);
    } else {
        console.log(((amount * .1) + amount) / population);
    }
}
splitAmount (100, "good", 5)
splitAmount (40, "fair", 2)