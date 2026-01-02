
function instaLogin(){
   return new Promise((resolve,reject)=>{//async operation
        setTimeout(()=>{ //2 sec
            console.log("1.Login to insta Id Succcessful....");
            resolve ("insta login Successful"); //fulfilled
        },4000)
    })
}
function fetchingFL (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("2.Fetching frinds list Successful.....");
            resolve("fetched frinds list");
        },5000)
    })
}
function postingPhoto(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("3.Photo Upload is Scuccessfull......");
        resolve("photo Upload Successfully");
        },6000)
    });
}
function commenting(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("4.Comments fetched Successfully.......");
            resolve("commented fetched Successfully");
        },7000)
    });
}
 async function Instagram()
 {
   try{
    await instaLogin(); //wait till promise is resolved
    await fetchingFL(); //wait till promise is resolved
    await postingPhoto();
    await commenting();
   }
   catch(error){
    // POST NOT FETCHED
    console.log(" something error occured:",error);//catch the error
   }
}

Instagram()










//fetchingFL();
//postingPhoto();
//commenting();