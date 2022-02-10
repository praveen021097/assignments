
let API_KEY = "AIzaSyBSy0PUBjEltIcAvGhxe2zPTN9pgfiueiM";

let searchResults = document.getElementById("searchResults");

const searchVideo = async () => {

    try {
        let searchTerm = document.getElementById("searchTerm").value;

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${API_KEY}&q=${searchTerm}`);

        let data = await res.json();

        let videoList = data.items;

        displayData(videoList);
    } catch (error) {
        console.log("error :", error);
    }



};

const displayData=(videoList)=>{
        searchResults.innerHTML="";

       videoList.forEach((video)=>{
           const {
               id:{videoId},
           }=video;

           let videoCard=document.createElement("div");
           let iframe=document.createElement("iframe");
           iframe.src=`https://m.youtube.com/embed/${videoId}`;
           iframe.setAttribute("allowFullscreen",true);
           iframe.width="100%";

           videoCard.append(iframe);
           searchResults.append(videoCard);
       });
};