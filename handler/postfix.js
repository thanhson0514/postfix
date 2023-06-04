/**
 *
 * @param {string} infix
 * @param {string} postfix
 * @returns {void}
 */
const infixtoPostfix = (infix) => {
  const S = [];
  let x, token;
  let i = 0,
    j = 0; // i-index of infix,j-index of postfix

  const postfix = new Array(infix.length);
  for (i = 0; i < infix.length; i++) {
    token = infix[i];
    if (
      (token.toString().charCodeAt() >= 97 &&
        token.toString().charCodeAt() <= 122) ||
      (token >= "0" && token <= "9")
    )
      postfix[j++] = token;
    else if (token == "(") S.push("(");
    else if (token == ")")
      while (S.pop() != "(") {
        x = S.pop();
        postfix[j++] = x;
      }
    else {
      while (precedence(token) <= precedence(S[S.length - 1]) && S.length) {
        x = S.pop();
        postfix[j++] = x;
      }
      S.push(token);
    }
  }

  while (S.length) {
    x = S.pop();
    postfix[j++] = x;
  }

  return postfix;
};

/**
 * Xét độ ưu tiên của các toán tử
 * @param {string} x
 * @returns {number}
 */
const precedence = (x) => {
  if (x == "(") return 0;
  if (x == "+" || x == "-") return 1;
  if (x == "*" || x == "/" || x == "%") return 2;

  return 3;
};

/**
 *
 * @param {string} postfix
 * @returns {number}
 */
const Evaluate = (postfix) => {
  const S = [];
  let p;
  let op1, op2, result;
  let top = -1;

  let i = 0;
  while (i < postfix.length) {
    if (postfix[i] === undefined) break;
    while (postfix[i] == " " || postfix[i] == "\t") {
      i++;
    }
    if (postfix[i] >= "0" && postfix[i] <= "9") {
      let num = 0;
      let p = 0;
      while (p < postfix[i].length) {
        num = num * 10 + +postfix[i][p];
        p++;
      }
      S.push(num);
    } else {
      op1 = S.pop();
      op2 = S.pop();
      switch (postfix[i]) {
        case "+":
          result = op2 + op1;
          break;
        case "-":
          result = op2 - op1;
          break;
        case "/":
          result = op2 / op1;
          break;
        case "*":
          result = op2 * op1;
          break;
        default:
          console.log("\nInvalid Operator");
          return 0;
      }
      S.push(result);
    }
    ++i;
  }

  result = S.pop();
  return result;
};

module.exports = {
  Evaluate,
  infixtoPostfix,
};
