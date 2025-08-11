for (let i = 0; i < buttons.length; i++) {
   const c = buttons[i];
   c.addEventListener("click", () => {
    const input = input_output.innerHTML;
      const symbol = [".", "(", ")"];
    
    // lexer and parser
    function lexer(input) {
        // token arrays 
        const tokens = [];
        // will be used to trace characters in the input with name character
        let current = 0;
        
        while (current < input.length) {
            // selecting the individual character in the input
            let indchar = input[current];
            
            // creating a number token
            if (/\d/.test(indchar)) {
                let value = '';
                while (/\d/.test(indchar)) {
                    value += indchar;
                    indchar = input[current++];
                }
                tokens.push({ type: 'NUMBER', value});
                continue;
            }

            // creating an operator token
            if (/[+\-*/]/.test(indchar)) {
                tokens.push({ type: 'OPERATOR', value: indchar });
                current++;
                continue;
            }

            // preventing repetition of operators
               const lastOperator = tokens[tokens.length - 1];
                       if (lastOperator && lastOperator.type === 'OPERATOR' && lastOperator.value === indchar) {
                        if (indchar === '+' || indchar === '-' || indchar === '*' || indchar === '/') {
                            // delete the last operator from the input
                            input_output.innerHTML.slice(0, -curre);
                            tokens.pop(); // remove the last operator token
                            current--; // move back one character
                            
                           continue; 
                        
                       }
               }
            
            // lexer for symbols
            if (/[)\(./]/.test(indchar)) {
                tokens.push({type: 'Symbol', value:indchar})
                current++;
                continue;
            }

            throw new Error(`Unexpected character: ${indchar}`);
        }
        return tokens;
        } 
        
                console.log(lexer(input));
                
                // parsing function
                function parse(tokens) {
                    let single = {type: "literal", value: tokens[0].value};

                    for (let i = 1; i < array.length; i+=2) {
                        const operator = [i].value;
                        const rightOperand = {type:'literal', value: tokens[i + 1].value};

                        single = {
                            type: "BinaryExpression",
                            operator: operator,
                            left: single,
                            left: rightOperand
                        };
                    }
                    return single;
                }
        })
}
