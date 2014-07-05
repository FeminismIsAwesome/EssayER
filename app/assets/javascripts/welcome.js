//execute a handler for the enter key
ko.bindingHandlers.enter = {
    init: function(element, valueAccessor, allBindingsAccessor, data) {
        //wrap the handler with a check for the enter key
        var wrappedHandler = function(data, event) {
            if (event.keyCode === 13) {
                 valueAccessor().call(this, data, event);
            }      
        };
        //call the real event binding for 'keyup' with our wrapped handler
        ko.bindingHandlers.event.init(element, function() { return { keyup: wrappedHandler }; }, allBindingsAccessor, data);        
    } 
};
var myapp = function ()
{ this.question = ko.observable ("Write one sentence about a volunteer experience.");
 
this.example = ko.observable ("Example: I founded a public speaking after-school program for middle schoolers in East St. Louis, MO.")

var exampleprompts = ["Example: For 8 months, I taught a public speaking after-school program to middle schoolers in East St. Louis, MO.", "I had to demonstrate strong oratorical abilities to lead by example. In addition, maintaining a respectful, productive classroom required social intelligence and constructive discipine skills, which are valuable leadership skills.", "I plan to become a lawyer. The ability to mentor others and deliver a clear, persuasive message will help me achieve this career.", "This experience showed that I am compassionate for the next generation."]


var prompts = ["Write one sentence summarizing a volunteer experience. Just one. (I know it's hard)", "How did you show leadership skills during this volunteer experience?", "How could this relate to your career?", "How did this volunteer experience show a positive character quality?"] 
this.count = ko.observable (0);  
 
 this.sentence = ko.observable ();   
 this.results = ko.observable ("");  
 this.printparagraph = ko.computed (function () {return this.count () == prompts.length}, this);
 this.connect = function ()
 
 {
     this.results (this.results () + " " + this.sentence ())
     this.sentence ("")
     this.count ( this.count () + 1);
     this.question (prompts [this.count ()])
     this.example (exampleprompts [this.count ()])
     
 }
 var introparagraph = ""
     introparagraph + this.results
     
     
}

$(document).ready(function() {
  ko.applyBindings (new myapp (), document.getElementById("#essayERApp"))	
})
