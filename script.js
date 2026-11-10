function sayHello() {
      alert("hello");
      let iterations = 0
      while (true) {
        console.log("Hello!")
        iterations = iterations + 1
        if (iterations == 10) {
          break
        }
      }
    }