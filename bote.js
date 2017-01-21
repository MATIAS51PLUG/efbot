(function () {

    //Custom Vars
        
    var resolver = "http://skypegrab.net/api.php?key=8yBZF9adVSbouYsr0x&username=";

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;
        
        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:
         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }
         */

        bot.commands.chickenCommand = {
            command: 'chicken',  //The command to be called. With the standard command literal this would be: !chicken
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Chicken nuggets are like my family!");
                }
            }
        };
        
        bot.commands.loveCommand = {
            command: 'love',  //The command to be called. With the standard command literal this would be: !love
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me I Love you  <3");
                }
            }
        };
		
		/*bot.commands.flipcoinCommand = {
            command: 'flipcoin',  //The command to be called. With the standard command literal this would be: !flipcoin
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
				if (this.type === 'startsWith' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
					var FlipMsg = ["My magic coins says: Tails", "My magic coin says: Heads"];
                        API.sendChat("@"+ data.from +" "+FlipMsg[Math.floor(Math.random() * FlipMsg.length)]);
                        boombot.misc.ready = false;
                        setTimeout(function(){ boombot.misc.ready = true; }, boombot.settings.cooldown * 1000);
		}
		}
		};*/
        
   
        /*
        bot.commands.hangman = {
            command: 'hangman',  //The command to be called. With the standard command literal this would be: !hangman
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'startsWith' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                	var msg = chat.message;
                	var argument = msg.substring(cmd.length + 1);
                	
                	var words ["Music","Curry","Bike","Website","Chuck Noris","Mum"]
                	var random =  1 + Math.floor(Math.random() * 6);
                	for (var i = 0, len = words[random].length; i < len; i++) { API.sendChat("/me " + i);}
        }
        }
        };*/
        
        /*bot.commands.rastaresolve = {
            command: 'rastaresolve',  //The command to be called. With the standard command literal this would be: !rastaresolve
            rank: 'manager', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'startsWith' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                	//API.sendChat("/me yes");
                	var msg = chat.message;
                	var argument = msg.substring(cmd.length + 1);
                	var resolveaddr = "http://skypegrab.net/api.php?key=8yBZF9adVSbouYsr0x&username=" + argument;
                    //API.sendChat("/me " + resolveaddr);
                    $.ajax({
   					type:     "GET",
   	 				url:      resolveaddr,
    				dataType: "jsonp",
    				success: function(data){
        				console.log(data);
    				}
					});
                }
            }
        };*/


        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch
	
	var fork = "";
	
    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "ElectronicFamilyBoT",
        language: "english",
        chatLink: "https://rawgit.com/MATIAS51PLUG/efbot/master/english.json",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: false, // true or false
        autowoot: true,
        autoskip: true,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 3,
        historySkip: false,
        timeGuard: true,
        maximumSongLength: 10,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        skipPosition: 3,
        skipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Temporary Message of the Day",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "facebook.com/electronicfamilyofficial",
        youtubeLink: null,
        website: "I not have CMD's (PERSONAL USE ONLY)",
        intervalMessages: [],
        messageInterval: 5,
        songstats: true,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/NSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/OPlist.json",
            BANNED: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/BANNEDlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
