 const form=document.querySelector('#searchform')
 const btn=document.querySelector('button')
 const btn1=document.querySelector('#rem')
 const div=document.querySelector('#pic')
 form.addEventListener('submit',async function(e){
    e.preventDefault();
    const search=form[0].value ///or form.elements.search.value //or form.search.value
    const config={params:{q:search}}
     //const res=await axios.get(` https://api.tvmaze.com/search/shows?q=${search}`)//  useful when one parameter is there
   const res=await axios.get(`https://api.tvmaze.com/search/shows`,config)
    console.log(res)
      addimg(res.data)
      form[0].value=""
    
 })

 const addimg= (show)=>{
    div.innerHTML=""
    for(let result of show){
         
        if(result.show.image){
        const img=document.createElement('IMG')   
       
        img.src=result.show.image.medium
       
        div.append(img)
       // document.body.append(div)
        }
    }
    
 } 
 //alternate to remove by rem button
//  const remimg= function(){
//    //div.remove()
//  //document.body.removeChild(div)
//  const childs=div.children
//  for(let child of childs ){
//    child.src=""
//  }
//     }
// // const remimg=()=>{

// // }
//  btn1.addEventListener('click',remimg )