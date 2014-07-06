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
{ 
var exampleprompts = [
"I founded a public speaking after-school program for middle schoolers in East St.Louis, MO.",
"I had to demonstrate strong oratorical abilities to lead by example. In addition, maintaining a respectful, productive classroom required social intelligence and constructive discipline skills, which are valuable leadership skills.",
"By mentoring the next generation, I effectively combated education inequality.", 
"I plan to become a lawyer. The ability to mentor others and deliver a clear, persuasive message will help me achieve this career.",
"Starting a new organization or business, holding a position like President, Vice President, Treasurer, and/or Secretary in a club, being strong during a tough time, like a family member’s death."
]

var tips = []

var prompts = [
"Write one sentence summarizing a time when you did something cool. Like a volunteer experience, sailing a boat, starting a business, going on a service trip, joining a club, or writing a story. Just one, it’s easy!", 
"How did you show leadership skills during this experience?",
"How did this experience demonstrate a commitment to community service?", 
"How could this experience relate to your career?"] 
var nextParagraphPrompt = [
"What are 3 leadership experiences you’ve had?"
]
var nextExamplesParagraph = [
]
this.question = ko.observable (prompts[0]);
 
this.example = ko.observable (exampleprompts[0])

this.count = ko.observable (0);  
 
 this.sentence = ko.observable ();   
 this.results = ko.observable ("");  
 this.printparagraph = ko.computed (function () {return this.count () >= prompts.length}, this);
 this.connect = function ()
 
 {
     this.results (this.results () + " " + this.sentence ())
     this.sentence ("")
     this.count ( this.count () + 1);
     this.question (prompts [this.count ()])
     this.example (exampleprompts [this.count ()])
     if(this.printparagraph())
     {
        this.results(this.results() + " I have demonstrated leadership skills, committed to community service, and prepared for my career in various ways.")
     }
     
 }
 var introparagraph = ""
     introparagraph + this.results
     
     
}

$(document).ready(function() {
  ko.applyBindings (new myapp (), document.getElementById("#essayERApp"))	
})
