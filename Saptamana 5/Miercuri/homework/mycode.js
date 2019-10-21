//ex 1
var is_string = function (ex1){
    if (typeof ex1 === 'string')
    return true;
    else
    return false;
};


//ex 2
var is_Blank = function(blan){
    if (blan.length <= 0 ) 
    return true;
    else
    return false;
};


//ex.3
var string_to_array = function(sta){
var result = sta.split(" ");
return result;
};


//ex.4
var abbrev_name = function(abb){
    var split_word = abb.split(" ");
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
    if ( uppers.charAt(pos) === uppers.charAt(pos).toUpperCase())
        return true;
        else
        return false;
};

//ex.8 
// aici mi-a fost un pic mai greu am facut reseach pe net
var insert = function(in1,in2,in3){
    var inst = [in1.slice(0,in3) + in2 + in1.slice(in3)].join('');
    return inst;
};

//ex.9
var remove_first_occurrence = function(rfo,rfos){
    var rfo_result = rfo.split(rfos);
    return rfo_result;
};

//ex. 10
var compare_strings = function(cs1,cs2){
    if (cs1.toLowerCase() === cs2.toLowerCase() && cs1.toUpperCase() === cs2.toUpperCase() )
    return true;
    else
    return false;
};

// ex. 11
var Uncapitalize = function(uncap){
    var un_cap = uncap.toLowerCase();
    return un_cap;
}
