import { MOC_DATA } from "../projectData/sampledata"



function Dashboard(){
    return (
    <>
    <h1>project</h1>
     
     <pre>
        {JSON.stringify(MOC_DATA,null,' ')}
    </pre>
    
    </>);
   

}

export default Dashboard;