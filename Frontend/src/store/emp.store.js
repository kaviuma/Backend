import {create} from "zustand"
import axios from "axios"


export let Z = create((set)=>({

emp:[],

getemp : async function (){

axios.get("http://localhost:5000/api/emp/getemp")
.then(async (d)=>{
await set({emp:d.data.empList});
console.log(d.data.empList);
})
.catch((e)=>{
alert("ERROR")
})
},

update: async (id, updatedData)=> {
    axios.put(`http://localhost:5000/api/emp/update/${id}`, updatedData)
      .then(async(res) => {
        alert( res.data.msg);
      })
      .catch((e) => {
        alert(e.data.msg);
      });
}
}))