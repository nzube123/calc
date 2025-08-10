for (let i = 0; i < buttons.length; i++) {
   const c = buttons[i];
   c.addEventListener("click", () => {
    const input = input_output.innerHTML;
      const keywords = ["sin(", "cos(", "tan(", "log(", "ln(", "sqrt(", "exp("];
    
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
            

            // creating a token for keywords 
            if (/[a-zA-Z_]/.test(indchar)) {
                let value = '';
                while (/[a-zA-Z_]/.test(indchar)) {
                    value += indchar;
                    indchar = input[current++]
                }

                const type = keywords.includes(value) ? 'KEYWORD :' : 'identifier';
                tokens.push({type, value});
                continue;
            }
            throw new Error(`Unexpected character: ${indchar}`);
        }
        return tokens;
        } 
        
                // console.log(lexer(input));

                // parser function
                function parse(tokens) {
                    let current = 0;

                    function parsing() {
                        let token = token = tokens[current];


                        // functionality declaration (sin cos tan)
                        if (token.type === 'keywords' && ["sin(", "cos(", "tan(", "log(", "ln(", "sqrt(", "exp("].includes(token.value)) {
                            const correct = token.value;
                            current++;

                            const identifier = tokens[current];
                            if (identifier.type !== 'identifier') {
                                throw new Error("hi");
                            }
                            current++;


                            const left = parsePrimary();
                            const expression = parseBinaryExpression(left);

                            return {
                                type: 'FunctionDeclaration', kind,
                                identifier: identifier.value,
                                value: expression
                            };
                        }
                    }

                    // parsing a single number
                        function parsePrimary() {
                            const token = tokens[current];

                            if (token.type === 'Number') {
                                current++;
                                return {
                                    type: 'sNumber',
                                    value: token.value
                                };
                            }
                        }


                        // parse a complete expression

                        // RETURN THE PARSER
                        console.log(parse(tokens));
                        
                }
                // LOG THE PARSED OBJECT                
        })
}
