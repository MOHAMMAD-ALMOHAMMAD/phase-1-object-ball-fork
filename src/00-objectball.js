function gameObject () { 
return {

   Home: {
    teamName:"Brooklyn Nets",
    colors:["Black","White "],
    players:{
        "Alan Anderson":{
            "number":0,
            "shoe":16,
            "points":22,
            "rebounds":12,
            "assists":12,
            "steals":3,
            "blocks":1,
            "slamDunks":1 

        },
        "Reggie Evans":{
            "number":30,
            "shoe":14,
            "points":12,
            "rebounds":12,
            "assists":12,
            "steals":12,
            "blocks":12,
            "slamDunks":7 


        },
        "Brook Lopez":{
            "number":11,
            "shoe":17,
            "points":17,
            "rebounds":19,
            "assists":10,
            "steals":3,
            "blocks":1,
            "slamDunks":15 

        },
        "Mason Plumlee":{
            "number":1,
            "shoe":19,
            "points":26,
            "rebounds":12,
            "assists":6,
            "steals":3,
            "blocks":8,
            "slamDunks":5 

        },
                    
        "Jason Terry": {
            "number":31,
            "shoe":15,
            "points":19,
            "rebounds":2,
            "assists":2,
            "steals":4,
            "blocks":11,
            "slamDunks":1 

        }


    }

   },

   Away:{
    teamName:"Charlotte Hornets",
    colors : ["Turquoise", "Purple"],
    players : {
        "Jeff Adrien":{
           
            "number":4,
            "shoe":18,
            "points":10,
            "rebounds":1,
            "assists":1,
            "steals":2,
            "blocks":7,
            "slamDunks":2

        },
        "Bismak Biyombo":{
            "number":0,
            "shoe":16,
            "points":12,
            "rebounds":4,
            "assists":7,
            "steals":7,
            "blocks":15,
            "slamDunks":10

        },
        "DeSagna Diop":{
            "number":2,
            "shoe":14,
            "points":24,
            "rebounds":12,
            "assists":12,
            "steals":4,
            "blocks":5,
            "slamDunks":5


        },
        "Ben Gordon":{
            "number":8,
            "shoe":15,
            "points":33,
            "rebounds":3,
            "assists":2,
            "steals":1,
            "blocks":1,
            "slamDunks":0


        },	
        "Brendan Haywood":{
            "number":33,
            "shoe":15,
            "points":6,
            "rebounds":12,
            "assists":12,
            "steals":22,
            "blocks":5,
            "slamDunks":12


        }

    }
   }

}

}

// REQUIRED ASSIGNMENT QUESTIONS

const numPointsScored = (playerName) => {
    let homeObj=gameObject()["Home"]["players"]
    let awayObj=gameObject()["Away"]["players"]

    
       if (Object.keys(homeObj).find((x) => x===playerName)){
        return homeObj[playerName].points
       }
       else if(Object.keys(awayObj).find((x) => x===playerName)) {
        return awayObj[playerName].points
    }
       else {
        console.log("Player not found,please enter a valid player name")
       }
return
}


const shoeSize = (playerName) => {
    let homeObj=gameObject()["Home"]["players"]
    let awayObj=gameObject()["Away"]["players"]

    
       if (Object.keys(homeObj).find((x) => x===playerName)){
        return homeObj[playerName].shoe
       }
       else if(Object.keys(awayObj).find((x) => x===playerName)) {
        return awayObj[playerName].shoe
       }
       else {
        console.log("Player not found in either home or away team, please enter a valid player name")
       }
return
}


const teamColors = (teamName) => {
    let homeObj=gameObject()["Home"]
    let awayObj=gameObject()["Away"]
    
    if(homeObj["teamName"]===teamName){
        return homeObj["colors"]
    }
    else if(awayObj["teamName"===teamName]){
        return awayObj["colors"]

    }
    else {
        console.log("Team not found in either home or away teams, please enter a valid team name")
    }
return
}

const teamNames = () => {
    const teamsList=[]
  
    let homeObj=gameObject()["Home"]
    let awayObj=gameObject()["Away"]

    teamsList.push(homeObj.teamName,awayObj.teamName)

    return teamsList;


}

const playerNumbers =(teamName) => {
    
    let homeObj=gameObject()["Home"]
    let awayObj=gameObject()["Away"]
    const homeNumbers=[]
    const awayNumbers=[]

    
    if(homeObj["teamName"]===teamName){
        for (const player in homeObj["players"]){
            homeNumbers.push(homeObj["players"][player].number)
        }
        return homeNumbers;
    }
    else if(awayObj["teamName"===teamName]){
        for (const player in awayObj["players"]){
            homeNumbers.push(awayObj["players"][player].number)
        }
        return awayNumbers;
     }
    
     else {
        console.log("Team not found in either home or away teams, please enter a valid team name")
    }
return

}

const playerStats = (playerName) => {
    let homeObj=gameObject()["Home"]["players"]
    let awayObj=gameObject()["Away"]["players"]

    
       if (Object.keys(homeObj).find((x) => x===playerName)){
        return homeObj[playerName]
       }
       else if(Object.keys(awayObj).find((x) => x===playerName)) {
        return awayObj[playerName]
       }
       else {
        console.log("Player not found in either home or away team, please enter a valid player name")
       }
return
}


const bigShoeRebounds= () =>
  { 

  const homePlayerEntries= Object.entries(gameObject()["Home"]["players"])
  const awayPlayerEntries= Object.entries(gameObject()["Away"]["players"])

  homePlayerEntries.sort((a,b) => a[1].shoe-b[1].shoe)
  awayPlayerEntries.sort((a,b) => a[1].shoe-b[1].shoe)

  const homeRebounds= homePlayerEntries[homePlayerEntries.length-1][1]["rebounds"]
  const awayRebounds= awayPlayerEntries[awayPlayerEntries.length-1][1]["rebounds"]


  return "From Home Team,Highest Rebound Of Player With Biggest Shoe Size Is: "+homeRebounds +", From Away Team,Highest Rebound Of Player with Biggest Shoe Size Is: "+awayRebounds+"."   
  }

  
  
  // END OF REQUIRED ASSIGNMENT QUESTIONS

  
  
  // START OF BONUS QUESTION
  
  const mostPointsScored= () =>
  { 

  const homePlayerEntries= Object.entries(gameObject()["Home"]["players"])
  const awayPlayerEntries= Object.entries(gameObject()["Away"]["players"])

  homePlayerEntries.sort((a,b) => a[1].points-b[1].points)
  awayPlayerEntries.sort((a,b) => a[1].points-b[1].points)
  const homeMostPointsPlayer= homePlayerEntries[homePlayerEntries.length-1][0]

  const awayMostPointsPlayer= awayPlayerEntries[awayPlayerEntries.length-1][0]

  const homeMostPoints= homePlayerEntries[homePlayerEntries.length-1][1]["points"]
  const awayMostPoints= awayPlayerEntries[awayPlayerEntries.length-1][1]["points"]

  const hold=[]
  hold.push(["From Home : "+homeMostPointsPlayer,homeMostPoints],["From Away: "+awayMostPointsPlayer,awayMostPoints])


  return hold   
  }

  const winningTeam = () => {
    const homePlayers= Object.entries(gameObject()["Home"]["players"])
    const awayPlayers= Object.entries(gameObject()["Away"]["players"])

      
     homePoints=homePlayers.reduce((sum,player) => sum+player[1].points,0)
     awayPoints=awayPlayers.reduce((sum,player) => sum+player[1].points,0)

     return homePoints>awayPoints?"Home Team Wins with "+homePoints + " Points": "Away Team Wins with "+awayPoints + " Point"

      } 
  
const playerWithLongestName = () =>
{
    const homePlayerEntries= Object.entries(gameObject()["Home"]["players"])
    const awayPlayerEntries= Object.entries(gameObject()["Away"]["players"])
  
    homePlayerEntries.sort((a,b) => a[0].length-b[0].length)
    awayPlayerEntries.sort((a,b) => a[0].length-b[0].length)
    
    const homeLongestNamePlayer= homePlayerEntries[homePlayerEntries.length-1][0]
    const awayLongestNamePlayer= awayPlayerEntries[awayPlayerEntries.length-1][0]
  
    
  const hold=[]
    
     hold.push(homeLongestNamePlayer,awayLongestNamePlayer)
     return hold;
  
  
     
}


// END OF BONUS QUESTIONS 


// START OF SUPER BONUS QUESTION

const doesLongNameStealATon= () =>
{ 

const homePlayerEntries= Object.entries(gameObject()["Home"]["players"])
const awayPlayerEntries= Object.entries(gameObject()["Away"]["players"])

homePlayerEntries.sort((a,b) => a[1].steals-b[1].steals)
awayPlayerEntries.sort((a,b) => a[1].steals-b[1].steals)
const homeMostStealsPlayer= homePlayerEntries[homePlayerEntries.length-1][0]

const awayMostStealsPlayer= awayPlayerEntries[awayPlayerEntries.length-1][0]

const longestPlayerNames=playerWithLongestName()
const hold=["For Home : "+ false,"For Away : "+false]

if (homeMostStealsPlayer===longestPlayerNames[0]){
    hold.unshift()
    hold.shift("For Home : "+ true)
}
if (awayMostStealsPlayer===longestPlayerNames[1]){
    hold.pop()
    hold.push("For Away : "+true)

}


return hold   



}
