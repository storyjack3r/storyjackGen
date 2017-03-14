var story;


var testContent = [	{ 	
					ID:"StoryA", 
					stringHTML:"A man asks you if you have money to spare. You feel in your pocket and find a ten pound note, you get it out wave it in his face and then...", 

					mcq:"<form> <input type= 'radio' name='good' value='good'> Give the money to the man</input><br><input type= 'radio' name='neither' value='neither'> Walk away without giving the money to the man</input><br><input type= 'radio' name='bad' value='bad'> Kick the man in the face</input><br><button type='button' onclick='buttoniser()'>Next >></button></form>",

					openended:"<form><textarea name='message' rows='10' cols='30'></textarea><button type='button' onclick='buttoniser()'>Next >></button></form>",

					good: "Man thanks you and goes on his way.",

					neither: "Man looks at you angrily and tells you you ought to be ashamed of yourself. You make a sarcastic remark and feel like you have just joined the 52 per cent who voted Brexit...",

					bad: "The man's nose explodes with blood gushing out in all directions. He looks stunned for a moment and then starts crying. You feel someone grab you roughly from behind. A member of the public pushes you away. You try to to run but trip over. 'He started it,' you shout baselessly."
				},
				{ 	
					ID:"StoryB", 
					stringHTML:"A monkey was swinging from a tree with its child. I took out my rifle and used he telescopic lens to see it closer...",
					mcq:"<form> <input type= 'radio' ID='good' value='1'> Give the money to the man</input><br><input type= 'radio' ID='neither' value='1'> Walk away without giving the money to the man</input><br><input type= 'radio' ID='bad' value='1'> Kick the man in the face</input><br><button type='button' onclick='buttoniser()'>Next >></button></form>",
					openended:"<form><textarea name='message' rows='10' cols='30'></textarea><button type='button' onclick='buttoniser()'>Next >></button></form>",
					good: "Man thanks you and goes on his way.",
					neither: "Man looks at you angrily and tells you you ought to be ashamed of yourself. You make a sarcastic remark and feel like you have just joined the 52 per cent who voted Brexit...",
					bad: "The man's nose explodes with blood gushing out in all directions. He looks stunned for a moment and then starts crying. You feel someone grab you roughly from behind. A member of the public pushes you away. You try to to run but trip over. 'He started it,' you shout baselessly."
				},
				];

// x = either 0 or 1 (it decides the story). y = either 2 or 3 (it decides the form)
				function contentSelector() {
						if(story == 0 || story == 1){
							story++;
							if (story ==2) { story=0;}
							console.log("else");
						}
					else{
						story = Math.floor((Math.random() * 2));
						console.log("if");
					}
					
					document.getElementById("exerpt").innerHTML="<p>" + testContent[story].stringHTML + "</p>";
					document.getElementById("challenge").innerHTML=testContent[story].mcq;
					if (story==0){story=1;} else {story=0};				
			
				}
				function buttoniser(){
					var choice
					var good = document.getElementById("good");
					
					var neither = document.getElementById("neither");
					var bad = document.getElementById("bad");
					if (good.checked==true||neither.checked==true || bad.checked==true)
						{
							if (good.checked==true){choice="good";}
							if (neither.checked==true){choice="neither";}
							if (bad.checked==true) {choice="bad";}

							var followUp=testContent[story].choice;

						document.getElementById("challenge").style.color = "blue";
					document.getElementById("result").innerHTML=followUp;
					document.getElementById("result").style.visibility = "visible";
					
					}
				// 
					// document.getElementById("challenge").style.visibility = "collapse";
					else{
					alert("Select something, friend...");	
					}
				}
