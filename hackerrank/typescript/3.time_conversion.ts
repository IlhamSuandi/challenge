//NOTE test url : https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

// My Answers
function timeConversion(s: string): string {
  // Write your code here
  const stringSplit = s.split(":");

  const getTime = stringSplit[2].slice(2);

  const formattedDate = stringSplit.reduce((prev, curr, index) => {
    let hour = stringSplit[0];
    if (getTime === "PM") {
      hour = +stringSplit[0] + 12 === 24 ? "00" : `${+stringSplit[0] + 12}`;
    }

    return `${hour}:${stringSplit[1]}:${stringSplit[2].slice(0, 2)}`;
  });

  return formattedDate;
}

console.log(timeConversion("12:45:54PM"));
