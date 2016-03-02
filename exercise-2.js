// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){
	
	if (a>b){
		return a;
	}else{
		return b;
	}
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    if (a>b && a>c){
    	return a;
    }else if(b>a && b>c){
    	return b;
    }else{
    	return c;
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(letter){
	var upperCaseLetter = letter.toUpperCase();

    if (upperCaseLetter === "A" || upperCaseLetter === "E" || upperCaseLetter === "I" || upperCaseLetter === "O" || upperCaseLetter === "U"){
    	return true;
    }else{
    	return false;
    }
}


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
	var upperPhrase = phrase.toUpperCase();
    var letterArray = upperPhrase.split('');
    console.log(letterArray);

    //check if the letter is a consonant, if so add an o, then add another consonant 
    var rovarArray = letterArray.map(function(letter){
    	if (letter !== "A" && letter !== "E" && letter !== "I" && letter !== "O" && letter !== "U" && letter !== " "){
    		return letter + 'O' + letter;
    	}else{
    		return letter;
    	}
    });
    return rovarArray.join('');
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    var splitString = string.split('');
    //reverse array
    var reversedArray = splitString.reverse();
    //rejoin array
    var reversedString = reversedArray.join('');
    return reversedString;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var wordLength;
    var maxLength=0;
    //get length of current word
    	words.forEach(function(word){
    		wordLength = word.length;

    		//check if current length is greater than maxLength
    		if (wordLength > maxLength)
    		//if so, set longest to new greatest length
    		{
    			maxLength = wordLength;
    		}
    	});


    return maxLength;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    var filteredArray = words.filter(function(word){
    	if (word.length > i){
    		return word;
    	}
    });
    return filteredArray;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){

	//break string into indidual arrays
    //each character gets it's own object
    //check if object already exists if(object){add to frequency property somehow}
}
