import {useState,useEffect} from 'react'

const EmployeeDetail=()=>{

    let [empdetail,setempdetail]=useState({});
    let [myaccess,sertmyccess]=useState('');

    useEffect(()=>{
        if(localStorage.empdata !== undefined){
            let emp=JSON.parse(localStorage.getItem('empdata'))
            setempdetail({...emp})
        }
        sertmyccess('admin')
    })

    return(
        <div>
            <h3>Employee Details</h3>
            Name : {empdetail.ename} <br />
            Gender : {empdetail.gender} <br />
            Domain : {empdetail.domain} <br />
            City : {empdetail.city}
        </div>
    )
}
export default EmployeeDetail;