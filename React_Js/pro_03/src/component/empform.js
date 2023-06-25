import { useState } from "react";
import EmployeeDetail from './EmployeeDetail';

const EmployeeForm=()=>{
    let [empform,setEmpfrom]=useState({ename:'',gender:'male',domain:['insurance'],city:'pune'});

    let handleChange=(event)=>{
        if(event.target.checked){
            setEmpfrom({...empform,gender:event.target.value});
        }
    }

    let domainList=(event)=>{
        if(event.target.checked){
            if(!empform.domain.includes(event.target.value)){
                setEmpfrom({...empform,domain:[...empform.domain,event.target.value]});
            }else{
                if(empform.domain.includes(event.target.value)){
                    let newarr=empform.domain.filter(a=>a!==event.target.value)
                    setEmpfrom({...empform,domain:newarr})
                }
                
            }
        }
    }
    
    let [flag,setflag]=useState(false);

    let displayFrom=()=>{
        alert(JSON.stringify(empform));
        setflag(true);
        localStorage.setItem('empdata',JSON.stringify(empform));
    }

    return(
        <div>
        <form>
            Enter name : <input type="text" name="nm" id="nm" value={empform.ename} 
            onChange={(event)=>setEmpfrom({...empform,ename:event.target.value})}
            /> <br />

            Gender : <input type="radio" name="gender" id="male" value='male'
            checked={empform.gender==='male'}
            onChange={(event)=>{handleChange(event)}}
            /><lable htmlFor='male'> Male </lable> &emsp; 
            
            <input type="radio" name="gender" id="female" value='female'
            checked={empform.gender==='female'}
            onChange={(event)=>{handleChange(event)}}
            /> <label htmlFor="female"> Female</label><br />

            Domain : <input type="checkbox" name="domain" id="insurance" value='insurance'
            checked={empform.domain.includes('insurance')}
            onChange={(event)=>domainList(event)}
            /> <label htmlFor="insurance"> Insurance</label><br />

            <input type="checkbox" name="domain" id="telecome" value='telecome'
            checked={empform.domain.includes('telecome')}
            onChange={(event)=>domainList(event)}
            /> <label htmlFor="telecome"> Telecome</label><br />
            
            <input type="checkbox" name="domain" id="banking" value='banking'
            checked={empform.domain.includes('banking')}
            onChange={(event)=>domainList(event)}
            /> <label htmlFor="banking"> Banking</label><br />
            
            <input type="checkbox" name="domain" id="mutual funds" value='mutual funds'
            checked={empform.domain.includes('mutual funds')}
            onChange={(event)=>domainList(event)}
            /> <label htmlFor="mutual funds"> mutual funds</label><br />

            City : <select name="city" id="city" value={empform.value} onChange={(event)=>setEmpfrom({...empform,city:event.target.value})}>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nasik">Nasik</option>
                <option value="Satara">Satara</option>
            </select><br />
            <button type='button' name='btn' id='btn' value='btn' onClick={displayFrom} >Enter</button>

        </form>
        {flag?<EmployeeDetail/>:''};
    </div>
    )
    
}
export default EmployeeForm;
