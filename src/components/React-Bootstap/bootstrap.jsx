import DemoCarousel from "./Tasks/carousal"


const BootstrapExam = () =>{
  return(
    <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
      <div className="App">
            <h3>React Carousel with `react-responsive-carousel`</h3>
            <DemoCarousel />
        </div>
        <h3>Column 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
        </p>
      </div>
      <div className="col-sm-4">
      
      
        <div className="App">
            <h3>React Carousel with `react-responsive-carousel`</h3>
            <DemoCarousel />
        </div>

        <h3>Column 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
        </p>
      </div>
      <div className="col-sm-4">
      
      <div className="App">
            <h3>React Carousel with `react-responsive-carousel`</h3>
            <DemoCarousel />
        </div>
       
        <h3>Column 3</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...
        </p>
      </div>
    </div>
  </div>
</>

  )
}
export default BootstrapExam