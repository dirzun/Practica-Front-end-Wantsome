//ex 1
var is_string = function (ex1){
    return typeof ex1 === 'string';
};


//ex 2
var is_Blank = function(blank){
    return blank === ""; 
    
};


//ex.3
var string_to_array = function(sta){
var result = sta.split(" ");
return result;
};


//ex.4
var abbrev_name = function(abvrev){
    var split_word = abvrev.split(" ");
    var result = split_word[0] + " " + split_word[1].charAt(0)+".";
    return result;
};

//ex.5
var capitalize = function(word){
    var cap = word.charAt(0).toUpperCase() + word.slice(1);
    return cap;
};

//ex.6
var truncate_string = function(trs,num){
    var trunc = trs.slice(0,num);
    return trunc;
};

// ex.7
var isUpperCaseAt = function(uppers,pos){
    return uppers.charAt(pos) === uppers.charAt(pos).toUpperCase();     
};

//ex.8 
// aici mi-a fost un pic mai greu am facut reseach pe net
var insert = function(insert1,insert2,insert3){
    var insrt = [insert1.slice(0,insert3) + insert2 + insert1.slice(insert3)].join('');
    return insrt;
};

//ex.9
var remove_first_occurrence = function(rfo,rfos){
    var rfo_result = rfo.split(rfos);
    return rfo_result.join();
};
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

//ex. 10
var compare_strings = function(comparestring1,comparestring2){
    return comparestring1.toLowerCase() === comparestring2.toLowerCase() && comparestring1.toUpperCase() === comparestring2.toUpperCase();
};

// ex. 11
var Uncapitalize = function(uncap){
    var un_cap = uncap[0].toLowerCase() + uncap.slice(1);
    return un_cap;
}
