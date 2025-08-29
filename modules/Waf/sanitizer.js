import xss from 'xss';
 
export function sanitizeInput(input){
if(typeof input != 'object' || input === null){
    return input;}
    for( const key in input)
    {
        if (typeof input[key] === 'string') {
            input[key] = xss(input[key]);
        }
        else if (typeof input[key] === 'object') {
            sanitizeInput(input[key]);
        }
    }
    return input;
}