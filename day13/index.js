      "use strict";
      function Person(first, last) {
        // 속성과 메소드 정의
        this.first = first;
        this.last = last;
        //...
      }
      var person1 = new Person("Bob", "Smith");
      console.log(person1);
      console.log(Person.prototype);
      console.log(Object.prototype);