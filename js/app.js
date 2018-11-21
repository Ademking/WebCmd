/* By Adem KOUKI */
/* GitHub : https://github.com/Ademking/WebCmd */

let TEXTCOLOR = "#00FF00"; // Default text color
let BGCOLOR = "#000000"; // Default Background Color
let USERNAME = "User";
let MYIP = "";
let NOTES = [];
let CUSTOM_CMDS = [];
let AVAILABLE_TAGS = [
    "facebook",
    "google ",
    "wiki ",
    "stackoverflow ",
    "translate ",
    "ip",
    "quote",
    "joke",
    "calc ",
    "restart",
    "set user ",
    "linkedin",
    "github",
    "twitter",
    "outlook",
    "soundcloud",
    "hotmail",
    "gmail",
    "reddit",
    "youtube",
    "bing",
    "music lofi",
    "music jazz",
    "music rock",
    "weather",
    "notes",
    "settings",
    "history",
    "bookmarks",
    "extensions",
    "cmd add",
    "cmd list",
    "cmd remove ",
    "cmd clear"
];

// Help Text
let helptext = "Help" + "\n";
helptext = "----------" + "\n";
helptext += "cls | clear\t\t\t\tClear the screen" + "\n";
helptext += "restart\t\t\t\t\tRestart WebCmd" + "\n";
helptext += "facebook | fb\t\t\t\tOpen Facebook" + "\n";
helptext += "twitter\t\t\t\t\tOpen Twitter" + "\n";
helptext += "youtube\t\t\t\t\tOpen Youtube" + "\n";
helptext += "github\t\t\t\t\tOpen GitHub" + "\n";
helptext += "soundcloud\t\t\t\tOpen Soundcloud" + "\n";
helptext += "linkedin\t\t\t\tOpen Linkedin" + "\n";
helptext += "reddit\t\t\t\t\tOpen Reddit" + "\n";
helptext += "bing\t\t\t\t\tOpen Bing" + "\n";
helptext += "gmail\t\t\t\t\tOpen Gmail" + "\n";
helptext += "outlook\t\t\t\t\tOpen Outlook" + "\n";
helptext += "google\t\t\t\t\tOpen Google" + "\n";
helptext += "google {something}\t\t\tSearch Google for something specific" + "\n";
helptext += "wiki | wikipedia\t\t\tOpen wikipedia" + "\n";
helptext += "wiki {something}\t\t\tSearch Wikipedia for something specific" + "\n";
helptext += "stackoverflow {something}\t\tSearch Stackoverflow for something specific" + "\n";
helptext += "ip\t\t\t\t\tYour IP address" + "\n";
helptext += "calc {formula}\t\t\t\tMathematical expressions calculator. for more help type \"calc -h\"" + "\n";
helptext += "set user {name}\t\t\t\tChange your username" + "\n";
helptext += "quote\t\t\t\t\tRandom Quote about programming" + "\n";
helptext += "joke\t\t\t\t\tRandom Joke about programming" + "\n";
helptext += "translate {lang1} {lang2} {phrase}\tTranslate phrase using Google Translate" + "\n";
helptext += "\t\t\t\t\t┗ Example: \"translate en fr dog\"" + "\n";
helptext += "music {type}\t\t\t\tPlay Music [Types : lofi , jazz , rock]" + "\n";
helptext += "weather {location}\t\t\tWeather in your location" + "\n";
helptext += "settings\t\t\t\tOpen your browser settings" + "\n";
helptext += "history\t\t\t\t\tOpen your browser history" + "\n";
helptext += "bookmarks\t\t\t\tOpen your browser bookmarks" + "\n";
helptext += "extensions\t\t\t\tOpen your browser extensions" + "\n";
helptext += "reset\t\t\t\t\tReset WebCmd (Remove saved parameters)" + "\n";
helptext += "notes\t\t\t\t\tCreate / Remove Notes ... for more help type \"notes -h\" " + "\n";
helptext += "cmd add\t\t\t\t\tCreate Custom commands to open websites " + "\n";
helptext += "cmd list\t\t\t\tShow list of custom commands " + "\n";
helptext += "cmd remove {index}\t\t\tRemove custom commands by index" + "\n";

// Programming quotes (45 quotes)
let programming_quotes = [{
    "author": "Bill Sempf",
    "id": 44,
    "quote": "QA Engineer walks into a bar. Orders a beer. Orders 0 beers. Orders 999999999 beers. Orders a lizard. Orders -1 beers. Orders a sfdeljknesv.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/44"
}, {
    "author": "Phil Karlton",
    "id": 43,
    "quote": "There are only two hard things in Computer Science: cache invalidation, naming things and off-by-one errors.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/43"
}, {
    "author": "Jeff Atwood",
    "id": 42,
    "quote": "In software, we rarely have meaningful requirements. Even if we do, the only measure of success that matters is whether our solution solves the customer\u2019s shifting idea of what their problem is.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/42"
}, {
    "author": "Robert Sewell",
    "id": 41,
    "quote": "If Java had true garbage collection, most programs would delete themselves upon execution.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/41"
}, {
    "author": "Gavin Russell Baker",
    "id": 40,
    "quote": "C++ : Where friends have access to your private members.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/40"
}, {
    "author": "Bjarne Stroustrup",
    "id": 39,
    "quote": "In C++ it\u2019s harder to shoot yourself in the foot, but when you do, you blow off your whole leg.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/39"
}, {
    "author": "Alan Kay",
    "id": 38,
    "quote": "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/38"
}, {
    "author": "Larry DeLuca",
    "id": 37,
    "quote": "I\u2019ve noticed lately that the paranoid fear of computers becoming intelligent and taking over the world has almost entirely disappeared from the common culture.  Near as I can tell, this coincides with the release of MS-DOS.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/37"
}, {
    "author": "Mark Gibbs",
    "id": 36,
    "quote": "No matter how slick the demo is in rehearsal, when you do it in front of a live audience, the probability of a flawless presentation is inversely proportional to the number of people watching, raised to the power of the amount of money involved.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/36"
}, {
    "author": "Henry Petroski",
    "id": 35,
    "quote": "The most amazing achievement of the computer software industry is its continuing cancellation of the steady and staggering gains made by the computer hardware industry.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/35"
}, {
    "author": "Jeremy S. Anderson",
    "id": 34,
    "quote": "There are two major products that come out of Berkeley: LSD and UNIX.  We don\u2019t believe this to be a coincidence.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/34"
}, {
    "author": "Sam Ewing",
    "id": 33,
    "quote": "Computers are like bikinis. They save people a lot of guesswork.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/33"
}, {
    "author": "Jamie Zawinski",
    "id": 32,
    "quote": "Linux is only free if your time has no value.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/32"
}, {
    "author": "Dick Brandon",
    "id": 31,
    "quote": "Documentation is like sex; when it's good, it's very, very good, and when it's bad, it's better than nothing.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/31"
}, {
    "author": "Richard Moore",
    "id": 30,
    "quote": "The difference between theory and practice is that in theory, there is no difference between theory and practice.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/30"
}, {
    "author": "Michael Sinz",
    "id": 29,
    "quote": "Programming is like sex: one mistake and you\u2019re providing support for a lifetime.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/29"
}, {
    "author": "Bjarne Stroustrup",
    "id": 28,
    "quote": "There are only two kinds of programming languages: those people always bitch about and those nobody uses.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/28"
}, {
    "author": "Donald Knuth",
    "id": 27,
    "quote": "Beware of bugs in the above code; I have only proved it correct, not tried it. ",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/27"
}, {
    "author": "Tom Van Vleck",
    "id": 26,
    "quote": "We know about as much about software quality problems as they knew about the Black Plague in the 1600s. We\u2019ve seen the victims\u2019 agonies and helped burn the corpses. We don\u2019t know what causes it; we don\u2019t really know if there is only one disease. We just suffer \u2014 and keep pouring our sewage into our water supply.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/26"
}, {
    "author": "N.J. Rubenking",
    "id": 25,
    "quote": "Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/25"
}, {
    "author": "C. A. R. Hoare",
    "id": 24,
    "quote": "There are two ways of constructing a software design; one way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/24"
}, {
    "author": "James O. Coplien",
    "id": 23,
    "quote": "You should name a variable using the same care with which you name a first-born child.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/23"
}, {
    "author": "Fred Brooks",
    "id": 22,
    "quote": "Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. No such faith comforts the software engineer.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/22"
}, {
    "author": "Unknown",
    "id": 21,
    "quote": "XML is like violence \u2013 if it doesn\u2019t solve your problems, you are not using enough of it.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/21"
}, {
    "author": "Unknown",
    "id": 20,
    "quote": "Saying that Java is good because it works on all platforms is like saying anal sex is good because it works on all genders.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/20"
}, {
    "author": "Douglas Adams",
    "id": 19,
    "quote": "I love deadlines. I like the whooshing sound they make as they fly by.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/19"
}, {
    "author": "Keith Bostic",
    "id": 18,
    "quote": "Perl \u2013 The only language that looks the same before and after RSA encryption.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/18"
}, {
    "author": "Albert Einstein",
    "id": 17,
    "quote": "Two things are infinite: the universe and human stupidity; and I\u2019m not sure about the universe.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/17"
}, {
    "author": "Yogi Berra",
    "id": 16,
    "quote": "In theory, theory and practice are the same. In practice, they\u2019re not.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/16"
}, {
    "author": "E. W. Dijkstra",
    "id": 15,
    "quote": "It is practically impossible to teach good programming style to students that have had prior exposure to BASIC. As potential programmers, they are mentally mutilated beyond hope of regeneration.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/15"
}, {
    "author": "E. W. Dijkstra",
    "id": 14,
    "quote": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/14"
}, {
    "author": "Mitch Ratcliffe",
    "id": 13,
    "quote": "A computer lets you make more mistakes faster than any other invention in human history, with the possible exceptions of handguns and tequila.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/13"
}, {
    "author": "Bjarne Stroustrup",
    "id": 12,
    "quote": "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/12"
}, {
    "author": "Ovidiu Platon",
    "id": 11,
    "quote": "I don\u2019t care if it works on your machine! We are not shipping your machine!",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/11"
}, {
    "author": "Rich Cook",
    "id": 10,
    "quote": "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/10"
}, {
    "author": "Rick Osborne",
    "id": 9,
    "quote": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/9"
}, {
    "author": "Charles Babbage",
    "id": 8,
    "quote": "On two occasions I have been asked, \u2018Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?\u2019 I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question.\u201d",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/8"
}, {
    "author": "Jon Ribbens",
    "id": 7,
    "quote": "PHP is a minor evil perpetrated and created by incompetent amateurs, whereas Perl is a great and insidious evil, perpetrated by skilled but perverted professionals.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/7"
}, {
    "author": "Bill Gates",
    "id": 6,
    "quote": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/6"
}, {
    "author": "Brian Kernighan",
    "id": 5,
    "quote": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/5"
}, {
    "author": "Jamie Zawinski",
    "id": 4,
    "quote": "Some people, when confronted with a problem, think \u201cI know, I\u2019ll use regular expressions.\u201d Now they have two problems.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/4"
}, {
    "author": "Hofstadter\u2019s Law",
    "id": 3,
    "quote": "It always takes longer than you expect, even when you take into account Hofstadter\u2019s Law.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/3"
}, {
    "author": "Edward V Berard",
    "id": 2,
    "quote": "Walking on water and developing software from a specification are easy if both are frozen.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/2"
}, {
    "author": "C. A. R. Hoare",
    "id": 1,
    "quote": "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil.",
    "permalink": "http://quotes.stormconsultancy.co.uk/quotes/1"
}]

let jokes = [{
        "id": 1,
        "type": "general",
        "setup": "What did the fish say when it hit the wall?",
        "punchline": "Dam."
    },
    {
        "id": 2,
        "type": "general",
        "setup": "How do you make a tissue dance?",
        "punchline": "You put a little boogie on it."
    },
    {
        "id": 3,
        "type": "general",
        "setup": "What's Forrest Gump's password?",
        "punchline": "1Forrest1"
    },
    {
        "id": 4,
        "type": "general",
        "setup": "What do you call a belt made out of watches?",
        "punchline": "A waist of time."
    },
    {
        "id": 5,
        "type": "general",
        "setup": "Why can't bicycles stand on their own?",
        "punchline": "They are two tired"
    },
    {
        "id": 6,
        "type": "general",
        "setup": "How does a train eat?",
        "punchline": "It goes chew, chew"
    },
    {
        "id": 7,
        "type": "general",
        "setup": "What do you call a singing Laptop",
        "punchline": "A Dell"
    },
    {
        "id": 8,
        "type": "general",
        "setup": "How many lips does a flower have?",
        "punchline": "Tulips"
    },
    {
        "id": 9,
        "type": "general",
        "setup": "How do you organize an outer space party?",
        "punchline": "You planet"
    },
    {
        "id": 10,
        "type": "general",
        "setup": "What kind of shoes does a thief wear?",
        "punchline": "Sneakers"
    },
    {
        "id": 11,
        "type": "general",
        "setup": "What's the best time to go to the dentist?",
        "punchline": "Tooth hurty."
    },
    {
        "id": 12,
        "type": "knock-knock",
        "setup": "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?",
        "punchline": "Never mind. It's pointless."
    },
    {
        "id": 13,
        "type": "knock-knock",
        "setup": "Knock knock. \n Who's there? \n Cows go. \n Cows go who?",
        "punchline": "No, cows go moo."
    },
    {
        "id": 14,
        "type": "knock-knock",
        "setup": "Knock knock. \n Who's there? \n Little old lady. \n Little old lady who?",
        "punchline": "I didn't know you could yodel!"
    },
    {
        "id": 15,
        "type": "programming",
        "setup": "What's the best thing about a Boolean?",
        "punchline": "Even if you're wrong, you're only off by a bit."
    },
    {
        "id": 16,
        "type": "programming",
        "setup": "What's the object-oriented way to become wealthy?",
        "punchline": "Inheritance"
    },
    {
        "id": 17,
        "type": "programming",
        "setup": "Where do programmers like to hangout?",
        "punchline": "The Foo Bar."
    },
    {
        "id": 18,
        "type": "programming",
        "setup": "Why did the programmer quit his job?",
        "punchline": "Because he didn't get arrays."
    },
    {
        "id": 19,
        "type": "general",
        "setup": "Did you hear about the two silk worms in a race?",
        "punchline": "It ended in a tie."
    },
    {
        "id": 20,
        "type": "general",
        "setup": "What do you call a laughing motorcycle?",
        "punchline": "A Yamahahahaha."
    },
    {
        "id": 21,
        "type": "general",
        "setup": "A termite walks into a bar and says...",
        "punchline": "'Where is the bar tended?'"
    },
    {
        "id": 22,
        "type": "general",
        "setup": "What does C.S. Lewis keep at the back of his wardrobe?",
        "punchline": "Narnia business!"
    },
    {
        "id": 23,
        "type": "programming",
        "setup": "Why do programmers always mix up Halloween and Christmas?",
        "punchline": "Because Oct 31 == Dec 25"
    },
    {
        "id": 24,
        "type": "programming",
        "setup": "A SQL query walks into a bar, walks up to two tables and asks...",
        "punchline": "'Can I join you?'"
    },
    {
        "id": 25,
        "type": "programming",
        "setup": "How many programmers does it take to change a lightbulb?",
        "punchline": "None that's a hardware problem"
    },
    {
        "id": 26,
        "type": "programming",
        "setup": "If you put a million monkeys at a million keyboards, one of them will eventually write a Java program",
        "punchline": "the rest of them will write Perl"
    },
    {
        "id": 27,
        "type": "programming",
        "setup": "['hip', 'hip']",
        "punchline": "(hip hip array)"
    },
    {
        "id": 28,
        "type": "programming",
        "setup": "To understand what recursion is...",
        "punchline": "You must first understand what recursion is"
    },
    {
        "id": 29,
        "type": "programming",
        "setup": "There are 10 types of people in this world...",
        "punchline": "Those who understand binary and those who don't"
    },
    {
        "id": 30,
        "type": "general",
        "setup": "What did the duck say when he bought lipstick?",
        "punchline": "Put it on my bill"
    },
    {
        "id": 31,
        "type": "general",
        "setup": "What happens to a frog's car when it breaks down?",
        "punchline": "It gets toad away"
    },
    {
        "id": 32,
        "type": "general",
        "setup": "did you know the first French fries weren't cooked in France?",
        "punchline": "they were cooked in Greece"
    },
    {
        "id": 33,
        "type": "programming",
        "setup": "Which song would an exception sing?",
        "punchline": "Can't catch me - Avicii"
    },
    {
        "id": 34,
        "type": "knock-knock",
        "setup": "Knock knock. \n Who's there? \n Opportunity.",
        "punchline": "That is impossible. Opportunity doesn’t come knocking twice!"
    },
    {
        "id": 35,
        "type": "programming",
        "setup": "Why do Java programmers wear glasses?",
        "punchline": "Because they don't C#"
    },
    {
        "id": 36,
        "type": "general",
        "setup": "Why did the mushroom get invited to the party?",
        "punchline": "Because he was a fungi."
    },
    {
        "id": 37,
        "type": "general",
        "setup": "Why did the mushroom get invited to the party?",
        "punchline": "Because he was a fungi."
    },
    {
        "id": 38,
        "type": "general",
        "setup": "I'm reading a book about anti-gravity...",
        "punchline": "It's impossible to put down"
    },
    {
        "id": 39,
        "type": "general",
        "setup": "If you're American when you go into the bathroom, and American when you come out, what are you when you're in there?",
        "punchline": "European"
    },
    {
        "id": 40,
        "type": "general",
        "setup": "Want to hear a joke about a peice of paper?",
        "punchline": "Never mind...it's tearable"
    },
    {
        "id": 41,
        "type": "general",
        "setup": "I just watched a documentary about beavers.",
        "punchline": "It was the best dam show I ever saw"
    },
    {
        "id": 42,
        "type": "general",
        "setup": "If you see a robbery at an Apple Store...",
        "punchline": "Does that make you an iWitness?"
    },
    {
        "id": 43,
        "type": "general",
        "setup": "A ham sandwhich walks into a bar and orders a beer. The bartender says...",
        "punchline": "I'm sorry, we don't serve food here"
    },
    {
        "id": 44,
        "type": "general",
        "setup": "Why did the Clydesdale give the pony a glass of water?",
        "punchline": "Because he was a little horse"
    },
    {
        "id": 45,
        "type": "general",
        "setup": "If you boil a clown...",
        "punchline": "Do you get a laughing stock?"
    },
    {
        "id": 46,
        "type": "general",
        "setup": "Finally realized why my plant sits around doing nothing all day...",
        "punchline": "He loves his pot."
    },
    {
        "id": 47,
        "type": "general",
        "setup": "Don't look at the eclipse through a colander.",
        "punchline": "You'll strain your eyes."
    },
    {
        "id": 48,
        "type": "general",
        "setup": "I bought some shoes from a drug dealer.",
        "punchline": "I don't know what he laced them with, but I was tripping all day!"
    },
    {
        "id": 49,
        "type": "general",
        "setup": "Why do chicken coops only have two doors?",
        "punchline": "Because if they had four, they would be chicken sedans"
    },
    {
        "id": 50,
        "type": "general",
        "setup": "What do you call a factory that sells passable products?",
        "punchline": "A satisfactory"
    },
    {
        "id": 51,
        "type": "general",
        "setup": "When a dad drives past a graveyard: Did you know that's a popular cemetery?",
        "punchline": "Yep, people are just dying to get in there"
    },
    {
        "id": 52,
        "type": "general",
        "setup": "Why did the invisible man turn down the job offer?",
        "punchline": "He couldn't see himself doing it"
    },
    {
        "id": 53,
        "type": "general",
        "setup": "How do you make holy water?",
        "punchline": "You boil the hell out of it"
    },
    {
        "id": 54,
        "type": "general",
        "setup": "I had a dream that I was a muffler last night.",
        "punchline": "I woke up exhausted!"
    },
    {
        "id": 55,
        "type": "general",
        "setup": "Why is peter pan always flying?",
        "punchline": "Because he neverlands"
    },
    {
        "id": 56,
        "type": "programming",
        "setup": "How do you check if a webpage is HTML5?",
        "punchline": "Try it out on Internet Explorer"
    },
    {
        "id": 57,
        "type": "general",
        "setup": "What do you call a cow with no legs?",
        "punchline": "Ground beef!"
    },
    {
        "id": 58,
        "type": "general",
        "setup": "I dropped a pear in my car this morning.",
        "punchline": "You should drop another one, then you would have a pair."
    },
    {
        "id": 59,
        "type": "programming",
        "setup": "Lady: How do I spread love in this cruel world?",
        "punchline": "Random Dude: [...💘]"
    },
    {
        "id": 60,
        "type": "programming",
        "setup": "A user interface is like a joke.",
        "punchline": "If you have to explain it then it is not that good."
    },
    {
        "id": 61,
        "type": "knock-knock",
        "setup": "Knock knock. \n Who's there? \n Hatch. \n Hatch who?",
        "punchline": "Bless you!"
    },
    {
        "id": 62,
        "type": "general",
        "setup": "What do you call sad coffee?",
        "punchline": "Despresso."
    },
    {
        "id": 63,
        "type": "general",
        "setup": "Why did the butcher work extra hours at the shop?",
        "punchline": "To make ends meat."
    }
];







// init
$(document).ready(function () {



    init_colors();
    init_notes();
    getUsername();
    startTime();
    welcomeMsg();
    create_new_empty_line();

    custom_cmds_init();


});

// when "Enter" is pressed, validate the command
$(document).keypress(function (event) {
    init_autocompleteUI();
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        validator();
    }
});

// Every mouse click => focus on last input 
$(document).on("click", function () {
    $("input").last().focus();
});



/**
 * Commands 
 */
function validator() {
    // get last command
    let last_cmd = $("input:last").val();

    if (last_cmd.toLowerCase() == 'help') {
        create_result_multiline(helptext);
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'cls' || last_cmd.toLowerCase() == 'clear') {
        cls();
    } else if (last_cmd.toLowerCase() == 'restart') {
        location.reload();
    } else if (last_cmd.toLowerCase() == 'facebook' || last_cmd.toLowerCase() == 'fb') {
        window.open('https://facebook.com', '_blank');
        create_result_line("Opening Facebook...");
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'settings' || last_cmd.toLowerCase() == 'setting') {
        chrome.tabs.create({
            url: 'chrome://settings'
        })
        create_result_line("Opening Settings...");
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'history') {
        chrome.tabs.create({
            url: 'chrome://history'
        })
        create_result_line("Opening History...");
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'download' || last_cmd.toLowerCase() == 'downloads') {
        chrome.tabs.create({
            url: 'chrome://downloads'
        })
        create_result_line("Opening Downloads...");
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'extensions') {
        chrome.tabs.create({
            url: 'chrome://extensions/'
        })
        create_result_line("Opening Extensions...");
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'dino') {
        chrome.tabs.update({
            url: 'chrome://dino/'
        })
        create_result_line("Opening Dino Game...");
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'bookmarks') {
        chrome.tabs.create({
            url: 'chrome://bookmarks/'
        })
        create_result_line("Opening History...");
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'wiki' || last_cmd.toLowerCase() == 'wikipedia') {

        create_result_line("Opening Wikipedia...");
        sleep(300).then(() => {
            window.open('https://www.wikipedia.org/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase().includes('wiki ')) {

        let s = last_cmd.replace("wiki ", "");
        create_result_line("Searching for " + "'" + s + "'" + "...");
        sleep(300).then(() => {
            create_new_empty_line();
            window.open('https://wikipedia.org/wiki/' + s, '_blank');
        });
    } else if (last_cmd.toLowerCase().includes('notes remove ')) {

        let i = last_cmd.replace("notes remove ", "");
        removeNoteByIndex(i);
        create_result_line("Note " + i + "# removed successfully");
        create_new_empty_line();

    } else if (last_cmd.toLowerCase() == 'google') {
        create_result_line("Opening Google...");
        sleep(300).then(() => {
            window.open('https://www.google.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'youtube') {
        create_result_line("Opening Youtube...");
        sleep(300).then(() => {
            window.open('https://www.youtube.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'gmail') {
        create_result_line("Opening Gmail...");
        sleep(300).then(() => {
            window.open('https://gmail.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'reddit') {
        create_result_line("Opening reddit...");
        sleep(300).then(() => {
            window.open('https://reddit.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'soundcloud') {
        create_result_line("Opening Soundcloud...");
        sleep(300).then(() => {
            window.open('https://soundcloud.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'twitter') {
        create_result_line("Opening Twitter...");
        sleep(300).then(() => {
            window.open('https://twitter.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'outlook') {
        create_result_line("Opening Outlook...");
        sleep(300).then(() => {
            window.open('https://outlook.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'hotmail') {
        create_result_line("Opening Hotmail...");
        sleep(300).then(() => {
            window.open('https://hotmail.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'messenger') {
        create_result_line("Opening Facebook Messenger...");
        sleep(300).then(() => {
            window.open('https://messenger.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'github') {
        create_result_line("Opening Github...");
        sleep(300).then(() => {
            window.open('https://github.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'notes') {
        showAllNotes();
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'notes add') {
        storeNote(); //using swal
    } else if (last_cmd.toLowerCase().includes('notes add ')) {
        let n = last_cmd.replace("notes add ", "");
        NOTES.push(n);
        localStorage.setItem("notes", JSON.stringify(NOTES));
        create_result_line("Note added Successfully!")
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'notes clear') {
        removeAllNotes();
        create_result_line("All Notes removed successfully !");
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'notes -h') {
        let h = "";
        h += "Notes (Options) : " + "\n";
        h += "---------------------------" + "\n";
        h += "notes add {note}\t\tCreate note" + "\n";
        h += "\t\t\t\t┗ Example: \"notes add buy milk\"" + "\n";
        h += "notes remove {index}\t\tRemove note using index (you can get the index by typing 'notes')" + "\n";
        h += "\t\t\t\t┗ Example: \"notes remove 2\"" + "\n";
        h += "notes\t\t\t\tShow all notes" + "\n";
        h += "notes clear\t\t\tRemove all notes" + "\n";

        create_result_multiline(h);
        create_new_empty_line();

    } else if (last_cmd.toLowerCase() == 'linkedin') {
        create_result_line("Opening linkedin...");
        sleep(300).then(() => {
            window.open('https://linkedin.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'bing') {
        create_result_line("Opening Bing...");
        sleep(300).then(() => {
            window.open('https://bing.com/', '_blank');
        });
        create_new_empty_line();
    } else if (last_cmd.toLowerCase().includes('weather ')) {

        let s = last_cmd.replace("weather ", "");
        create_result_line("Weather in " + "'" + s + "'" + " ...");

        sleep(300).then(() => {
            create_new_empty_line();
            window.open('https://www.wunderground.com/cgi-bin/findweather/getForecast?query=' + s, '_blank');
        });
    } else if (last_cmd.toLowerCase() == "reset") {
        reset();
    } else if (last_cmd.toLowerCase().includes('google ')) {

        let s = last_cmd.replace("google ", "");
        create_result_line("Searching for " + "'" + s + "'" + "...");

        sleep(300).then(() => {
            create_new_empty_line();
            window.open('https://www.google.com/search?q=' + s, '_blank');
        });
    } else if (last_cmd.toLowerCase().includes('stackoverflow ')) {

        let s = last_cmd.replace("stackoverflow ", "");
        create_result_line("Searching for " + "'" + s + "'" + "...");

        sleep(300).then(() => {
            create_new_empty_line();
            window.open('https://stackoverflow.com/search?q=' + s, '_blank');
        });
    } else if (last_cmd.toLowerCase() == "calc -h" || last_cmd.toLowerCase() == "calc -help" || last_cmd.toLowerCase() == "calc --h" || last_cmd.toLowerCase() == "calc --help") {
        create_result_multiline(`
To calculate a formula, just type "calc {your forumla}"
Example : "calc (1+3)^5"
------------
Useful functions : 
------------
abs(x)\t\tReturns the absolute value of a number/expression
atan(x)\t\tReturns the inverse of tan.
ceil(x)\t\tReturns the ceiling of a number.
cos(x)\t\tReturns cos
deg(x)\t\tReturns the degree of the polynomial. Specify the variable to use in multivariate polynomials.
exp(x)\t\tMaps directly to Math.exp(x) if numeric.
expand(x)\tExpands a function or expression.
fact(x)\t\tCalculates the factorial of a number.
floor(x)\tReturns the floor of a number. Maps directly to Math.floor(x) if numeric.
invert(x)\tInverts a matrix
log(x)\t\tCalculates the log of a number base e.
log10(x)\tCalculates the log of a number base 10.
max(x)\t\tReturns the maximum of a set of numbers. 
min(x)\t\tReturns the min of a set of numbers.
mod(x)\t\tCalculates the modulo of two numbers.
nthroot(x)\tCalculates the nth root of a number.
rect(x)\t\tThe rectangular function
roots(x)\tFinds the roots of a univariate polynomial.
round(x)\tRounds a number to the nearest integer.
sin(x)\t\tReturn sin
sqrt(x)\t\tCalculates the square root of a number
tan(x)\t\tReturn tan
------
For more information, visit http://nerdamer.com/documentation.html
------`);
        create_new_empty_line();
    } else if (last_cmd.toLowerCase().includes("calc")) {
        let func = last_cmd.replace("calc", "");
        try {
            if (func == "" || func == null || func == " ") {
                create_result_line("Error... Please write your Math formula. Example: calc 1+2");
                create_new_empty_line();
                return;
            }
            let result = nerdamer(func).evaluate();
            create_result_line(func + " = " + result);
            create_new_empty_line();
        } catch (e) {
            create_result_line("Error... Please check your Math formula");
            create_new_empty_line();
        }
    } else if (last_cmd.toLowerCase().includes("set user ")) {
        let user = last_cmd.replace("set user ", "");
        USERNAME = user;
        localStorage.setItem('username', capitalizeFirstLetter(user));

        sleep(1000).then(() => {
            create_result_line(`Username "${user} saved successfully!"`);
        })
        location.reload();
        create_new_empty_line();

    } else if (last_cmd.toLowerCase() == "ip") {
        myIP();
    } else if (last_cmd.toLowerCase().includes("music ")) {
        let genre = last_cmd.replace("music ", "");
        if (genre == "jazz") {

            create_result_line("Playing Jazz Music ...");
            create_result_line("");
            music("jazz");
            create_result_line("");
            create_new_empty_line();

        } else if (genre == "lofi") {

            create_result_line("Playing Lofi Music ...");
            create_result_line("");
            music("lofi");
            create_result_line("");
            create_new_empty_line();

        } else if (genre == "rock") {
            create_result_line("Playing Rock Music ...");
            create_result_line("");
            music("rock");
            create_result_line("");
            create_new_empty_line();
        }

    } else if (last_cmd.toLowerCase() == "quote") {
        let quote = getQuote();
        create_result_multiline(quote);
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == "joke") {
        let joke = getJoke();
        create_result_multiline(joke);
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == "cmd add") {
        custom_cmd_add_ui();
        create_new_empty_line();
    } else if (last_cmd.toLowerCase() == 'cmd clear') {
        removeAllCMD();
        create_result_line("All Custom Commands removed successfully !");
        create_new_empty_line();
    } else if (last_cmd.toLowerCase().includes('cmd remove ')) {

        let i = last_cmd.replace("cmd remove ", "");
        removeCMDByIndex(i);
        create_result_line("Custom Command " + i + "# removed successfully");
        create_new_empty_line();

    } else if (last_cmd.toLowerCase() == "cmd list") {

        show_list_custom_cmd();
        create_new_empty_line();


    } else if (last_cmd.toLowerCase().includes("translate ")) {

        let words = last_cmd.replace("translate ", "").split(" ");
        if (words.length >= 3) {
            let arg0 = words[0];
            let arg1 = words[1];
            let phrase = words.slice(2, words.length).join(" "); //get the phrase after remove arguments
            sleep(500).then(() => {
                create_result_line(`Translating ${phrase}...`);
                //https://translate.google.com/#fr/ar/chien
                window.open(`https://translate.google.com/#${arg0}/${arg1}/${phrase}`, "_blank");
                create_new_empty_line();
            })



        } else {
            // missing argument ..
            create_result_line(`Error! you're missing an argument! Please check HELP for more information`);
            create_new_empty_line();
        }


    } else if (isCustomCmd(last_cmd)) {
        let url = getURLbyCmd(last_cmd);
        window.open(url, '_blank');
    } else {

        try {
            if (last_cmd == "" || last_cmd == null || last_cmd == undefined) {
                create_new_empty_line();
                return;
            }
            let l = eval(last_cmd);
            create_result_line(l);
            create_new_empty_line();
        } catch (e) {
            //create_result_line(e);
            create_new_error_line();
            create_new_empty_line();
        }

    }
}

function init_colors() {

    if (localStorage.getItem("textcolor") === null) {
        localStorage.setItem("textcolor", TEXTCOLOR)
    }

    if (localStorage.getItem("bgcolor") === null) {
        localStorage.setItem("bgcolor", BGCOLOR)
    }


    if (localStorage.getItem("textcolor") != TEXTCOLOR) {
        let newTEXTCOLOR = localStorage.getItem("textcolor");
        $("*").css("color", newTEXTCOLOR);
        TEXTCOLOR = newTEXTCOLOR;
        document.getElementById("textselect").value = TEXTCOLOR;

    }
    if (localStorage.getItem("bgcolor") != BGCOLOR) {
        let newBGCOLOR = localStorage.getItem("bgcolor");
        $("*").css("background-color", newBGCOLOR);
        BGCOLOR = newBGCOLOR;
        document.getElementById("bgselect").value = BGCOLOR;

    }
}

function init_autocompleteUI() {
    var availableTags = AVAILABLE_TAGS.concat(getCustomCmdArray());

    $("input").autocomplete({
        open: function () {
            $(".ui-menu-item-wrapper").css('color', TEXTCOLOR);
            $(".ui-menu-item-wrapper").css('background-color', adjustBrightness(BGCOLOR, 50));
            $('.ui-autocomplete').css('width', '300px'); // width HERE
        },
        source: function (request, response) {
            var matches = $.map(availableTags, function (acItem) {
                if (acItem.toUpperCase().indexOf(request.term.toUpperCase()) === 0) {
                    return acItem;
                }
            });
            response(matches);
        },
        autoFocus: true,
        minLength: 1,
        delay: 100,
        select: function (event, ui) {

            this.value = ui.item.value;

            if (event.keyCode == 9) {
                event.preventDefault();
                this.value = this.value;
                $("input").last().focus();
            }

            return false;
        }
    });
}


// Adjust Brightness of HEX color
// from: https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
function adjustBrightness(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var R = parseInt(col.substring(0, 2), 16);
    var G = parseInt(col.substring(2, 4), 16);
    var B = parseInt(col.substring(4, 6), 16);

    // to make the colour less bright than the input
    // change the following three "+" symbols to "-"
    R = R + amt;
    G = G + amt;
    B = B + amt;

    if (R > 255) R = 255;
    else if (R < 0) R = 0;

    if (G > 255) G = 255;
    else if (G < 0) G = 0;

    if (B > 255) B = 255;
    else if (B < 0) B = 0;

    var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return (usePound ? "#" : "") + RR + GG + BB;


}




/**
 * Clear the screen
 */
function cls() {
    $(".console").html('');
    //$("header").html('');
    create_new_empty_line();
}

/**
 * Create empty line message
 */
function create_new_empty_line() {
    $("input .cmdinput").attr('disabled', 'disabled'); //disable old inputs
    $(".console").append(`<div class="line"><span style="color: ${TEXTCOLOR}" class="path">WebCmd:~ ${USERNAME}$ </span><input style="color: ${TEXTCOLOR}; background-color: ${BGCOLOR}" class="cmdinput" value=""/></div>`)
    $("input").last().focus();
}

function create_new_audio_line(url) {
    $("input .cmdinput").attr('disabled', 'disabled'); //disable old inputs
    $(".console").append(`<div class="line"><audio autoplay controls src="${url}"> Your browser does not support the <code>audio</code> element.</audio></div>`)
    $("input").last().focus();
}

/**
 * Create single line message
 */
function create_result_line(text) {
    $("input .cmdinput").attr('disabled', 'disabled'); //disable old inputs
    $(".console").append(`<div class="line"><input style="color: ${TEXTCOLOR}; background-color: ${BGCOLOR}" class="cmdinput" value="${text}"/></div>`)
    $("input").last().focus();
}


/**
 * Create multiLine message
 */
function create_result_multiline(text) {
    let nb_lines = text.split(/\r\n|\r|\n/).length;
    if (nb_lines == 1 || nb_lines == 0) nb_lines = 3;
    $("input .cmdinput").attr('disabled', 'disabled'); //disable old inputs
    $(".console").append(`<div class="line"><textarea style="color: ${TEXTCOLOR}; background-color: ${BGCOLOR}" rows="${nb_lines}" class="cmdinput">${text}</textarea></div>`)
    $("input").last().focus();
}


/**
 * Create a new error message
 */
function create_new_error_line() {
    let last_cmd = $("input:last").val();
    $("input .cmdinput").attr('disabled', 'disabled'); //disable old inputs
    $(".console").append(`<div class="line"><span style="color: ${TEXTCOLOR}" class="path">C:\\Users\\${USERNAME}></span><input style="color: ${TEXTCOLOR}; background-color: ${BGCOLOR}" class="cmdinput" value="'${last_cmd}' is not recognized as an internal command. Type 'help' for help "/></div>`)
    $("input").last().focus();
}


// onchange - text color
function textcolor(t) {
    TEXTCOLOR = t.value;
    $("*").css("color", TEXTCOLOR);
}
// onchange - background color
function bgcolor(t) {
    BGCOLOR = t.value;
    $("*").css("background-color", BGCOLOR);
}

// add "0" if number < 10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

// Show Time
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();


    var y = today.getFullYear();
    var mo = today.getMonth();
    var d = today.getDay();
    var d_s = dayOfWeekAsString(d);
    // add a zero in front of numbers<10
    y = checkTime(y);
    mo = checkTime(mo);
    d = checkTime(d);
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = `It's now ${h}:${m}:${s} ⏲️ ${d_s} ${d}/${mo}/${y}`;
    t = setTimeout(function () {
        startTime()
    }, 500);
}




/**
 * Converts a day number to a string.
 *
 * @param {Number} dayIndex
 * @return {String} Returns day as string
 */
function dayOfWeekAsString(dayIndex) {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex];
}

// Sleep function
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * Return random quote
 */
function getQuote() {
    let rand_between_1_44 = Math.floor(Math.random() * 44) + 1;
    return programming_quotes[rand_between_1_44]["quote"];
}
/**
 * Return random joke
 */
function getJoke() {
    let rand_between_1_62 = Math.floor(Math.random() * 62) + 1;
    return "\n-------------\n" + jokes[rand_between_1_62]["setup"] + "\n" + jokes[rand_between_1_62]["punchline"] + "\n-------------";
}

function welcomeMsg() {
    var today = new Date()
    var curHr = today.getHours()
    if (curHr < 12) {
        document.getElementById('welcome').innerHTML = `☀️ Good morning ${USERNAME}.`;
    } else if (curHr < 18) {
        document.getElementById('welcome').innerHTML = `🌤️ Good afternoon ${USERNAME}.`;
    } else {
        document.getElementById('welcome').innerHTML = `🌙 Good evening ${USERNAME}.`;
    }
}

async function getUsername() {
    let user = localStorage.getItem('username');
    if (user == null) {


        const {
            value: u
        } = await swal({
            title: 'Thanks for using WebCmd!\nPlease enter your name',
            input: 'text',
            inputPlaceholder: 'Your Name',
            inputValidator: (value) => {
                return !value && 'You need to write something!'
            }
        })

        USERNAME = u;
        localStorage.setItem("username", capitalizeFirstLetter(u));
        location.reload();
    } else {
        USERNAME = user;
    }

}


/**
 * Capitalize first letter 
 * Example : adem ==> Adem
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * return IP
 */
function myIP() {
    const ipAPI = 'https://api.ipify.org?format=json';
    const inputValue = fetch(ipAPI)
        .then(response => response.json())
        .then(data => {
            create_result_line("Your IP : " + data.ip);
            create_new_empty_line();
        }).catch(() => {
            create_result_line("Oops! Please check your internet connection...");
            create_new_empty_line();
        });

}

// onclick Help button
// (onclick doesn't work on chrome extension... so i must use this shit)
document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('help');
    link.addEventListener('click', function () {
        helpBtn();
    });
});

// onchange Text color 
// (onclick doesn't work on chrome extension... so i must use this shit)
document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('textselect');
    link.addEventListener('change', function () {
        localStorage.setItem('textcolor', link.value);
        textcolor(link);
    });
});

// onchange Text color 
// (onclick doesn't work on chrome extension... so i must use this shit)
document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('bgselect');
    link.addEventListener('change', function () {
        localStorage.setItem('bgcolor', link.value);
        bgcolor(link);
    });
});




/**
 * Show Help when btn clicked
 */
function helpBtn() {
    $("html, body").animate({
        scrollTop: $(document).height()
    }, "slow");
    create_result_multiline(helptext);
    create_new_empty_line();
}

/**
 * Reset Everything
 */
function reset() {
    localStorage.clear();
    location.reload();
}




function showAllNotes() {
    if (NOTES.length !== 0) {
        arr_notes = NOTES;
        res = "";
        arr_notes.forEach((element, i) => {
            res += i + 1 + ") " + element + "\n";
        });
        create_result_multiline(res);
    } else {
        create_result_line("No Notes Found... You can add notes by typing 'notes add { your note }'")
    }
}
/**
 * create a new note
 * @param {string} text 
 */
async function storeNote() {

    const {
        value: n
    } = await swal({
        title: 'Write your note here',
        input: 'text',
        inputPlaceholder: 'Your Note',
        inputValidator: (value) => {
            return !value && 'You need to write something!'
        }
    });
    if (n) {
        swal(`Done!`, `Note Added Successfully!`, `success`).then(() => {
            location.reload();
        });

    }
    mynote = n;
    NOTES.push(mynote);
    localStorage.setItem("notes", JSON.stringify(NOTES));



}

/**
 * init notes
 */
function init_notes() {
    if (localStorage.getItem("notes") != null) {
        NOTES = JSON.parse(localStorage.getItem("notes"));
    }
}

/**
 * Remove All notes
 */
function removeAllNotes() {
    localStorage.removeItem("notes");
    NOTES = [];
}

/**
 * Remove Note by index
 * @param {string} index 
 */
function removeNoteByIndex(index) {
    if (!hasNumber(index)) {
        return;
    }
    NOTES.splice(index - 1, 1);
    localStorage.setItem("notes", JSON.stringify(NOTES));
}

/**
 * check if string contains number
 * @param {string} myString 
 */
function hasNumber(myString) {
    return /\d/.test(myString);
}

/**
 * Live Music Streaming
 * @param {string} type 
 */
function music(type) {
    if (type == "lofi") {
        create_new_audio_line("http://streaming211.radionomy.com/ArotoInstrumentalRadio");
    }
    if (type == "rock") {
        create_new_audio_line("http://mp3channels.webradio.de/heavy-metal");
    }
    if (type == "jazz") {
        create_new_audio_line("http://streaming208.radionomy.com/Jazz4ever");
    }
}

/**
 * Init Custom commands storage
 */
function custom_cmds_init() {
    if (localStorage.getItem("custom_cmds") != null) {
        // custom commands exists
        CUSTOM_CMDS = JSON.parse(localStorage.getItem("custom_cmds"));
    } else {
        //alert("custom_cmds not initialized");
    }
}

/**
 * Add a custom command
 * @param {string} cmd 
 * @param {string} url 
 */
function add_custom_cmd(cmd, url) {
    let conf = {
        "cmd": cmd,
        "url": url
    }
    CUSTOM_CMDS.push(conf);
    localStorage.setItem("custom_cmds", JSON.stringify(CUSTOM_CMDS));
}


/**
 * Show all commands
 */
function show_list_custom_cmd() {

    if (CUSTOM_CMDS.length !== 0) {

        arr_custom_cmd = CUSTOM_CMDS;
        res = "";
        arr_custom_cmd.forEach((element, i) => {
            res += "\n" + (i + 1) + ") " + element.cmd + " ----> " + element.url;
        });
        create_result_multiline("Custom Commands : \n------------" + res);
    } else {
        create_result_line("No Custom Commands Found... You can add new commands by typing 'cmd add'")
    }

}

/**
 * Remove Custom command by index
 * @param {int} index 
 */

function removeCMDByIndex(index) {
    if (!hasNumber(index)) {
        return;
    }
    CUSTOM_CMDS.splice(index - 1, 1);
    localStorage.setItem("custom_cmds", JSON.stringify(CUSTOM_CMDS));
}




/**
 * Add a custom command UI
 */
async function custom_cmd_add_ui() {

    const {
        value: formValues
    } = await swal({

        html: '<span style="float: left">Type your custom command :</span><input id="cmd-input" name="cmd" placeholder="Your Command  (Example: yahoo)" class="swal2-input">' +
            '<span style="float: left">Copy/Paste your URL here :</span><input id="url-input" placeholder="Your url (Example: http://yahoo.com)" class="swal2-input">',
        focusConfirm: true,
        showCancelButton: true,
        preConfirm: () => {
            return [
                document.getElementById('cmd-input').value,
                document.getElementById('url-input').value
            ]
        }
    })

    if (formValues) {
        add_custom_cmd(formValues[0], formValues[1]);
        swal("Success", "Thank you", "success").then(() => {
            location.reload();
        });

    }
}


/*
 * Test if command is a custom command 
 */
function isCustomCmd(cmd) {
    if (CUSTOM_CMDS.length > 0) {
        let status = false;
        CUSTOM_CMDS.forEach(function (element) {
            if (element.cmd == cmd) {
                status = true;
            }
        });
        return status;

    }

}


/*
 * Return URL by custom Command
 */
function getURLbyCmd(cmd) {
    if (CUSTOM_CMDS.length > 0) {

        let url = "";

        CUSTOM_CMDS.forEach(function (element) {
            if (element.cmd == cmd) {
                url = element.url;
            }
        });

        return url;
    }
}

/**
 * Remove All Custom Commands
 */
function removeAllCMD() {
    localStorage.removeItem("custom_cmds");
    CUSTOM_CMDS = [];
}

function getCustomCmdArray(){
    let res = [];
    if (CUSTOM_CMDS.length !== 0) {

        arr_custom_cmd = CUSTOM_CMDS;
        arr_custom_cmd.forEach((element, i) => {
            res.push(element.cmd);
        });
      
    } 
    return res;

}
