function truncateString(str, num) {

  if (str.length > 3 && str.length > num && num > 3) {
    str  = str.slice(0, (num - 3)) + "...";
  } else if (num <= 3 && str.length > num) {
    str = str.slice(0, num) + "...";
  }


  // Clear out that junk in your trunk
  console.log(str);
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

truncateString("A-", 1);

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);

truncateString("Absolutely Longer", 2);