
const getProfile = async (user) =>{

    const resp1 = await fetch(`https://api.github.com/users/${user}`);
    // console.log(resp1);
    if(resp1.status!==200)
    {
        return new Error('User Not Found');
    }

    const resp2 = await resp1.json();

    return resp2;

}
//
// getProfile().then((hi)=>{
//     console.log(hi);
// }).catch((err)=>{
//     console.log(err);
// });