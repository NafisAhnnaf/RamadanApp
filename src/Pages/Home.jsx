import React, {useEffect, useState} from 'react'

const Home = () => {
    const [c, setDate] = useState('');
    const [daysV, setDaysV] = useState('');
    const [hoursV, setHoursV] = useState('');
    const [minutesV, setMinutesV] = useState('');
    const [Cols, setCols] = useState(4);
    
    //Get Location:

    // const [geoPermissionState, setGeoPermissionState] = useState('');

    // const success = (pos)=>{
    //     var crd = pos.coords;
    //     console.log(`Coordinates Lat: ${crd.latitude} Long: ${crd.longitude}, Accuracy: ${crd.accuracy}`);
    // }
    // const err = (errMsg)=>{
    //     console.log(errMsg);    
    // }
    // var  options = {
    //     enableHighAccuracy: true,
    //     timeout: 5000,
    //     maximumAge: 0,
    // }
    // useEffect(()=>{
    //     if(navigator.geolocation){
    //         navigator.permissions.
    //         query({name: 'geolocation'}).
    //         then((result)=>{
    //             console.log(result);
    //             if(result.state === 'prompt'){
    //                 navigator.geolocation.getCurrentPosition(success, err, options);    
    //             }
    //             else if(result.state === 'granted'){
    //                 navigator.geolocation.getCurrentPosition(success, err, options);
    //             }
    //             else if(result.state === 'denied'){
    //                 alert("Locaiton Permissions Denied. Please Allow Location Permission in site settings");
    //             }
    //             result.onchange = ()=>{setGeoPermissionState(result.state)};
    //         })
    //     }
    //     else{
    //         console.log("geolocation not supported");
    //     }
    // }, [])

    // useEffect(()=>{
    //     navigator.geolocation.getCurrentPosition(success, err, options);
    // }, [geoPermissionState]);

    const d = new Date(2026,1,17,17,55,0,0);

    //Refreshing every second: 
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date());
        }, 1000);
    }, []);

    

    let rem = d-c;
    const days =  rem/86400000;
    const hours = (days - Math.floor(days))*24; 
    const minutes = (hours - Math.floor(hours))*60;
    const seconds = (minutes - Math.floor(minutes))*60;
    //Display status
    if(days==0){
        setCols(3);
        setDaysV('hidden');
        if(hours==0){
            setCols(2);
            setHoursV('hidden');
            if(minutes==0){
                setCols(1);
                setMinutesV('hidden');
            }
        }
    }
    
    return (
    <div className='h-screen flex flex-col justify-center items-center space-y-12 text-center'>
        <div className='text-4xl'>Ramadan Countdown</div>
        <div className={Cols+' grid grid-cols-1 md:grid-cols-4 space-y-6 md:space-x-6'}>
            {/* <div>
                <div className='text-6xl' onLoad={(e)=>setDate(d.getMonth())} >{d.getMonth()+1}</div>
                <div>Month</div>
            </div> */}
            <div>
                <div className={daysV+' text-6xl'}>{Math.floor(days)}</div>
                <div>Days</div>
            </div>
            <div>
                <div className={hoursV+' text-6xl'}>{Math.floor(hours)}</div>
                <div>Hours</div>
            </div>
            <div>
                <div className={minutesV+' text-6xl'}>{Math.floor(minutes)}</div>
                <div>Minutes</div>
            </div>
            <div>
                <div className='text-6xl'>{Math.floor(seconds)}</div>
                <div>Seconds</div>
            </div>
        </div>
    </div>
  )
}

export default Home