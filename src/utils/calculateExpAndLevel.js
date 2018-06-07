// @flow
function calculateExpAndLevel(totalExp) {
  let exp = totalExp;
  let level = 1;
  while (exp >= level) {
    exp -= level;
    level++;
  }
  return { exp, level };
}

export default calculateExpAndLevel;
