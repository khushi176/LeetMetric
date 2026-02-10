document.addEventListener("DOMContentLoaded", function() {
   const searchButton = document.getElementById("search-btn");
   const usernameInput = document.getElementById("user-input");
   const statsContainer = document.querySelector(".stats-container");
   const easyProgressCircle = document.querySelector(".easy-progress");
   const MediumProgressCircle = document.querySelector(".Medium-progress");
   const HardProgressCircle = document.querySelector(".Hard-progress");
   const easyLevel = document.getElementById("easy-level");
   const MediumLevel = document.getElementById("Medium-level");
   const HardLevel = document.getElementById("Hard-level");
   const cardStatsContainer = document.querySelector(".stats-card");

   // return true or false based on a regex

  function validateUsername(username){
    if(username.trim()==="")
    {
        alert("username should not be empty")
        return false;
    }
    const regex =/^[a-zA-Z0-9_-]{1,15}$/;
    const ismatching = regex.test(username);
    if(!ismatching)
    {
        alert("Invalid username");
    }
    return ismatching;
  }

  async function fetchUserdatails(username)
  {
    // const url =  `https://leetcode.com/graphql`
    try{

        searchButton.textContent= "searching...";
        searchButton.disabled = true;
           const targetUrl = 'https://leetcode.com/graphql/';
        const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`; 
            
            
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

           const graphql = JSON.stringify({
    query: `
        query userSessionProgress($username: String!) {
            allQuestionsCount {
                difficulty
                count
            }
            matchedUser(username: $username) {
                submitStats {
                    acSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                    totalSubmissionNum {
                        difficulty
                        count
                        submissions
                    }
                }
            }
        }`,
    variables: { "username": username }
});

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };

        
        
        const response = await  fetch(proxyUrl, requestOptions);
        if(!response.ok)
        {
            throw new Error("Unable to fetch the user datails");
        }
        const parsedData= await response.json();
        console.log("Logging Data: ",parsedData);

        displayUserData(parsedData);
    }
    catch(Error){
        statsContainer.innerHTML= `<p>${Error.message}</p>`
    }
    finally{
       searchButton.textContent= "search";
        searchButton.disabled = false;
    }
  }

   function updateProgress(solved, total, level, circle) {
        const progressDegree = (solved/total)*100; // calculation of percentage//
        circle.style.setProperty("--progress-degree", `${progressDegree}%`); // property setup//
       level.textContent = `${solved}/${total}`; // setup Text content
    }

  function displayUserData(parsedData)
  {
      const totalQuestion= parsedData.data.allQuestionsCount[0].count;
      const totaleasyQuestion= parsedData.data.allQuestionsCount[1].count;
      const totalmediumQuestion= parsedData.data.allQuestionsCount[2].count;
      const totalhardQuestion= parsedData.data.allQuestionsCount[3].count;

      const SolvedtotalQuestion= parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
      const SolvedtotaleasyQuestion= parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
      const SolvedtotalmediumQuestion= parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
      const SolvedtotalhardQuestion= parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

      updateProgress(SolvedtotaleasyQuestion, totaleasyQuestion, easyLevel, easyProgressCircle);
      updateProgress(SolvedtotalmediumQuestion, totalmediumQuestion,MediumLevel, MediumProgressCircle);
      updateProgress(SolvedtotalhardQuestion, totalhardQuestion, HardLevel, HardProgressCircle);

      const cardsData = [
            {level: "Overall Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions },
            {level: "Overall Easy Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions },
            {level: "Overall Medium Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions },
            {level: "Overall Hard Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions },
        ];
          
        console.log("card ka data: " , cardsData);

        cardStatsContainer.innerHTML = cardsData.map(
            data => 
                    `<div class="card">
                    <h4>${data.level}</h4>
                    <p>${data.value}</p>
                    </div>`
        ).join("")


  }

searchButton.addEventListener('click', function()
{
    const username = usernameInput.value;
    console.log("Log_In Username: ", username);
    if(validateUsername(username)) {
        fetchUserdatails(username);
    }
});

});
