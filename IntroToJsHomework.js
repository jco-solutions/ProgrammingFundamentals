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