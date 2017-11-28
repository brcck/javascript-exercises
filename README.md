# JavaScript Exercises

> These are a series of javascript exercises intended to be used alongside the curriculum at ['The Odin Project.'](https://theodinproject.com)  They start very simply, but get more involved as you progress through them.

### simon_says
Today I learned about regular expressions. Found this quotation in [Eloquent Javascript](https://eloquentjavascript.net/09_regexp.html) to be very true.
>Some people, when confronted with a problem, think ‘I know, I’ll use regular expressions.’ Now they have two problems.
>
> --- Jamie Zawinski

### snake_case
The jasmine spec is actually wrong here.

`!0 = 1`

`!0 != 0`

### palindromes
I'm learning I really need to read documentation more closely than I did when I was working in Python. So many methods act just a little differently than I think they should, and I get hungup until I realize, "Oh, I'm using that incorrectly."

### book_titles
Learned the hard way that if a class has a setter, it also *needs* a getter, otherwise trying to access your properties will always return 'undefined.'

### caesar
Found out that JavaScript's modulo operator is what one might consider "broken," when given a negative number. I do not want `-3 % 5 = -3`. I want `-3 % 5 = 2`!

### timer
When using JavaScript it's important to pay attention to compatibility issues. Newer methods are very helpful (and much needed) but not implemented in older browsers. I found the new `String.padStart()` method but its not even implemented in my version of JS.
