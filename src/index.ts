import * as readline from "readline";

const readType = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Step 1: Read Name
readType.question("Enter your name: ", (name: string) => {
  if (!name.trim()) {
    console.log(` Name cannot be empty`);
    readType.close();
    return;
  }

  // Step 2: Read Age
  readType.question("Enter your age: ", (ageInput: string) => {
    const age: number = Number(ageInput);

    if (Number.isNaN(age) || age <= 0) {
      console.log(` Invalid age`);
      readType.close();
      return;
    }

    // Step 3: Read Sex
    readType.question("Enter your sex (M/F): ", (sex: string) => {
      const sexUpper = sex.toUpperCase();

      if (sexUpper !== "M" && sexUpper !== "F") {
        console.log(`❌ Sex must be 'M' or 'F'`);
        readType.close();
        return;
      }

      // ✅ All Valid → Output using Template Literal
      console.log(`
✅ User Information
-------------------
Name : ${name}
Age  : ${age}
Sex  : ${sexUpper === "M" ? "Male" : "Female"}
`);

      readType.close();
    });
  });
});
