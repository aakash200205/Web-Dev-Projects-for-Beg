let courseName = "abcd";
let coursePrice = 500;
let courseGoals = ["low-price", "Accurate", "Enjoyable"];
alert(courseName);
alert(coursePrice);
alert(courseGoals);
let groupIng = { name: "abcd", price: 500, goals: ["low-price", "Accurate", "Enjoyable"]};
alert(groupIng.name);
alert(groupIng.goals[1]);

let listItem =getListItem(courseGoals,1);
alert(listItem);

function getListItem(array,arrayIndex)
{
  let listItem = array[arrayIndex];
  return listItem;
}