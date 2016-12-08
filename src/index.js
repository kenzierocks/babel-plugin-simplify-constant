export default function ({ types: t }) {
    return {
        name: "simplify-constant",
        visitor: {
          	UnaryExpression(path) {
                const n = path.node;
              	if (n.operator === '!' &&
                    t.isNumericLiteral(n.argument)) {
                  	path.replaceWith(t.booleanLiteral(!n.argument.value));
                }
            }
        }
    };
}
