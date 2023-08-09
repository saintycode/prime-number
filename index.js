// program to check if a number is prime or not



//Take input from the user

const number = parseInt(prompt("Enter a positive number: "));

let isPrime = true;



//Check if the number is equal to 1

if (number === 1) {

    console.log("1 is neither prime nor composite number.");

}



//Check if the number is greater than 1

else if (number > 1) {



    // looping through 2 to number-1

    for (let i = 2; i < number; i++) {

        if (number % i == 0) {

            isPrime = false;

            break;

        }

    }



    if (isPrime) {

        console.log(`${number} is a prime number`);

    } else {

        console.log(`${number} is a not prime number`);

    }

}



//Check if the number is less than 1

else {

    console.log("The number is not a prime number.");

} "

