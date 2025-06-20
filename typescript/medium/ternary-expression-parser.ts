function isTernaryExpression(expression: string): boolean {
  return expression.includes("?") && expression.includes(":");
}

function splitTernaryExpression(expression: string) {
  const index = expression.indexOf("?");
  const colonIndex = expression.lastIndexOf(":");

  const condition = expression.slice(0, index).trim();
  const if_expression = expression.slice(index + 1, colonIndex).trim();

  const else_expression = expression.slice(colonIndex + 1).trim();

  return {
    condition,
    if_expression,
    else_expression,
  };
}

const ternaryExpressionParser = (expression: string) => {
  const { condition, if_expression, else_expression } =
    splitTernaryExpression(expression);

  if (condition === "T" && !isTernaryExpression(if_expression)) {
    return if_expression;
  }

  if (condition === "F" && !isTernaryExpression(else_expression)) {
    return else_expression;
  }

  if (condition === "T") {
    return ternaryExpressionParser(if_expression);
  }

  if (condition === "F") {
    return ternaryExpressionParser(else_expression);
  }
};

console.log(ternaryExpressionParser("T?T?F:5:3"));
