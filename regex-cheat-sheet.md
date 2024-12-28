# Regex Cheet Sheet
## Metacharacters
### Position
| Symbol | Means                        | Examples                      |
|--------|------------------------------|-------------------------------|
| ^      | start of the line            | **^dis** starts with dis      |
| $      | end of the line              | **er$** ends with er          |
| \b     | word boundary                | **\bcat\b** cat in "i am cat" |
| (?=)   | lookahead (toward the right) |                               |
| (?<=)  | lookbehind (toward the left) |                               |
| (?!)   | negative lookahead           |                               |
| (?<!)  | negative lookbehind          |                               |
### Character
| Symbol     | Means                | Examples                                                     |
|------------|----------------------|--------------------------------------------------------------|
| []         | any character listed | **[abc]** a, b or c<br>**[0-9]** 0 through 9<br>**[-.+]** dash, dot, or plus<br>**[\^A-Z]** not A through Z |
| .          | any one character    | **se.** sea, see or se@                                      |
| \meta-char | escape               | **1\\.2** only match 1.2                                     |
| \s         | space                | [ \n\t\r\f\v]                                                |
| \w         | word                 | [0-9a-zA-Z_]                                                 |
| \d         | digit                | [0-9]                                                        |
### Expression
| Symbol | Means                                                        | Examples                                                     |
|--------|--------------------------------------------------------------|--------------------------------------------------------------|
| \|     | one of several subexpressions                                | **gray\|grey** gray or grey<br>**gr(a\|e)y** gray or grey    |
| ()     | 1. limit scope of \|<br>2. group subexpression<br>3. group and capture | **gr(a\|e)y** gray or grey<br>**1(st)?** 1 or 1st<br>**([a-z]) ([0-9])** $1, $2 |
| \num   | backreference                                                | **([a-z]+) \1** match "the the" or "at at"                   |
| (?:)   | group but do not capture                                     | **([a-z]) (?:[0-9])** $1                                     |
### Quantifiers
| Symbol     | Means           | Examples                                     |
|------------|-----------------|----------------------------------------------|
| ?          | optional        | **July?** Jul or July<br>**1(st)?** 1 or 1st |
| *          | any number      |                                              |
| +          | one or more     |                                              |
| {min, max} | specified range |                                              |
## Options

| Option | Means            |
|--------|------------------|
| i      | case insensitive |
| m      | multi-lines      |
