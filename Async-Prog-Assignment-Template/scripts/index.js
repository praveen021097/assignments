let images_arr=JSON.parse(localStorage.getItem("posterImage"))||[];
let image=document.querySelector("#images");
let i=0;

setInterval(function(){
    if(i==movies_arr.length-1){
        i=0;
    }
    i=i+1;
    image.src=movies_arr[i].posterImg;
    
} ,2000);


let movies_arr=[
    {
        name:"Syam singha Roy",
        release_date:2021,
        posterImg:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSddqAHq1_CAyb-7czl5T2KFBTOjCUT6suEVhw-_L7U4qyT-Gu9qHex-lwItg88dOAATHYRqIpKE6DKK6j_fz1FiV3k.jpg?r=235",
        IMDb_rating:8.7,
    },
    {
        name:"suryavansham",
        release_date:2021,
        posterImg:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABexS0LfxGgUSaFLpju6Vv-iWtY4wClZY2BfiRScvXqu5Gnc6Foxb5ZYGJ1NpkEaBb3VLTrpzQv7XKO0J_BV3Dps2n1g.jpg?r=947",
        IMDb_rating:9.7,
    },
    {
        name:"Red Notice",
        release_date:2011,
        posterImg:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX0PtSPw59nh_ScwhDYvqvx5jvaFOqQnBJrttZyGo1Cg6SXcsu1fLgPRTZ6LysCXGN2SE0rlowH4NBMWNE5OPmb9DMEiau5BFXsQjfAw39CYVjbGwkKq5k8ZGqyH.jpg?r=a7a",
        IMDb_rating:5.0,
    },
    {
        name:"Dolittle",
        release_date:2011,
        posterImg:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZT9uFDe5yHyV1-0Tlbp1t12QXUM3ACjNBhL6JACgE8usHUlVANLlG61fWlUMFb_MKTkyhanQmbtE-mNg-yga51chhs.jpg?r=56a",
        IMDb_rating:9.5,
    },
    {
        name:"Roohi",
        release_date:2022,
        posterImg:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTCMWO_3uxtP9k3RDoNtiaWgRU488gSWx9BRs8f9MBM2p6MbFQ08ROPq90wnTs00NSYVtADStdyk_GEnJN3L5-v9gKQ.jpg?r=baf",
        IMDb_rating:7.0,
    },
    {
        name:"Dangal",
        release_date:2018,
        posterImg:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeko0x6dmPbgsa21sF42InUeuTH1W7LIG8hAipIOFf1xM6piyv4i0P1fx4-8g1NQ6VVuueYX6pWZ5J1Lb9W6BViwoc4.jpg?r=8b8",
        IMDb_rating:7.5,
    },
    {
        name:"The Persuite of happyness",
        release_date:2016,
        posterImg:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYLU37VnnakHF_mDqTljD3Wd9sARgCb8VH-Ado4WiQBCOhBA_PbRkm5TdZlh1WC5Rx7Cf9TCx124YVQ71nHSh_Mv61s.jpg?r=c7f",
        IMDb_rating:8.0,
    },
    {
        name:"Panipat",
        release_date:2022,
        posterImg:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVvEtB5EcNWJ48qCtX76WL0TSFOkNV5A1sdBKPLIWcY4kqOknjEjQUIpXekbB0XGW822LdEs3U88540Jv5LUEVtXAog.jpg?r=b7b",
        IMDb_rating:8.6,
    },
    {
        name:"Extraction",
        release_date:2021,
        posterImg:"https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYMS5YGLiwN5aMiaIiAi_4TH5pNkVW1idwdOgi5N4szStG0NCfqxktClaE8yz8znFeOlkfwXQo1z2jjQYa9Ld_Wen_PCg1hnmJGrFPoOjLvqURizsQhPb9fG5JBF.jpg?r=eac",
        IMDb_rating:8.9,
    },
    

]

localStorage.setItem("Movies",JSON.stringify(movies_arr));

let movieData=JSON.parse(localStorage.getItem("Movies"))||[];
let container=document.querySelector("#movies");






 displayItem(movieData);

function displayItem(movieData){
    container.innerHTML="";
    movieData.map(function(elem){
        let div=document.createElement("div");
        div.setAttribute("class","moviesdata");
        let contentdiv=document.createElement("div");
        let imgdiv=document.createElement("div");
      
      

        let img=document.createElement("img");
        img.setAttribute("src",elem.posterImg);

        let name=document.createElement("p");
        name.innerText=elem.name;

        let releaseDate=document.createElement("p");

        releaseDate.innerText=elem.release_date;

        let  imdbRate=document.createElement("p");

        imdbRate.innerText=elem.IMDb_rating;
        imgdiv.append(img);
        contentdiv.append(name,releaseDate,imdbRate);
        div.append(imgdiv,contentdiv);
        container.append(div);
    })
}
function data(){
    let sorting=document.getElementById("sorting").value;
    
    if(sorting){
        let data=movieData.sort(function(a,b){
            if(sorting==="sort-lh"){
               
                return a.IMDb_rating-b.IMDb_rating;
            }
            else if(sorting==="sort-hl"){
               
                return b.IMDb_rating-a.IMDb_rating;
                
            }
            
        });
        displayItem(data);
        
    }
    else{
         displayItem(movieData)  ; 
         
    }
}
