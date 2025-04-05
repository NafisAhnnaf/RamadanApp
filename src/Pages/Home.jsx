import React, {useState} from 'react'

const Home = () => {
    const [c, setDate] = useState('');
    const [daysV, setDaysV] = useState('');
    const [hoursV, setHoursV] = useState('');
    const [minutesV, setMinutesV] = useState('');
    const [Cols, setCols] = useState(4);
    const d = new Date(2026,1,17,17,55,0,0);
    setInterval(()=>{
        setDate(new Date());
    }, 1000)
    console.log((d-c))
    let rem = d-c;
    const mon =  rem/2592000000;
    const days =  rem/86400000;
    const hours = (days - Math.floor(days))*24;
    const minutes = (hours - Math.floor(hours))*60;
    const seconds = (minutes - Math.floor(minutes))*60;
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
    // console.log(seconds);
    
    return (
    <div className='h-screen flex flex-col justify-center items-center space-y-12 text-center'>
        <div className='text-4xl' >Ramadan Countdown</div>
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