
    const cell = (num) => {
      return { foo: num, }
    };

    const section = async (arr) => {
      const a = arr.map((async (num) => {
        return await cell(num)
      })); // a is now a Promise
      return Promise.all(a); // a will not be returned until f() resolves
    };

    console.log('foos: ', await section([1,2,3]))