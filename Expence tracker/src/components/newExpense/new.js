import './new.css';
import Form from './Form';
function New(props){
    const  getformdata=(formdata)=>{
      const expencedata={
        ...formdata,
        id:Math.random().toString()
      }
      console.log(expencedata);
      props.data(expencedata);
    };


    return (
      <div className="main-container">
        <Form formdata={getformdata} />
      </div>
    );
}

export default New;